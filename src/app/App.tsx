import { useState, useEffect } from 'react';
import { PillPack } from './components/PillPack';
import { ReminderSettings } from './components/ReminderSettings';
import { Button } from './components/ui/button';
import { Toaster } from './components/ui/sonner';
import { RotateCcw, Pill } from 'lucide-react';
import { toast } from 'sonner';

export default function App() {
  const [takenPills, setTakenPills] = useState<Map<number, Date>>(() => {
    const saved = localStorage.getItem('takenPills');
    if (saved) {
      const parsed = JSON.parse(saved);
      return new Map(parsed.map(([num, date]: [number, string]) => [num, new Date(date)]));
    }
    return new Map();
  });

  const [reminderTime, setReminderTime] = useState(() => {
    return localStorage.getItem('reminderTime') || '20:00';
  });

  const [notificationsEnabled, setNotificationsEnabled] = useState(() => {
    return localStorage.getItem('notificationsEnabled') === 'true';
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    const serialized = Array.from(takenPills.entries()).map(([num, date]) => [num, date.toISOString()]);
    localStorage.setItem('takenPills', JSON.stringify(serialized));
  }, [takenPills]);

  useEffect(() => {
    localStorage.setItem('reminderTime', reminderTime);
  }, [reminderTime]);

  useEffect(() => {
    localStorage.setItem('notificationsEnabled', notificationsEnabled.toString());
  }, [notificationsEnabled]);

  // Check for daily notifications
  useEffect(() => {
    if (!notificationsEnabled) return;

    const checkNotification = () => {
      const now = new Date();
      const [hours, minutes] = reminderTime.split(':').map(Number);
      const reminderDate = new Date();
      reminderDate.setHours(hours, minutes, 0, 0);

      const diff = reminderDate.getTime() - now.getTime();
      
      if (diff > 0 && diff < 60000) {
        if (Notification.permission === 'granted') {
          new Notification('Time for your pill', {
            body: 'Daily birth control reminder',
            icon: '💊',
            badge: '💊',
          });
        }
      }
    };

    const interval = setInterval(checkNotification, 30000);
    checkNotification();

    return () => clearInterval(interval);
  }, [notificationsEnabled, reminderTime]);

  const handlePillTap = (pillNumber: number) => {
    setTakenPills((prev) => {
      const newMap = new Map(prev);
      if (newMap.has(pillNumber)) {
        newMap.delete(pillNumber);
        toast.info('Pill unmarked');
      } else {
        newMap.set(pillNumber, new Date());
        toast.success('Pill marked as taken');
      }
      return newMap;
    });
  };

  const handleReset = () => {
    setTakenPills(new Map());
    toast.success('New pack started');
  };

  const handleNotificationsToggle = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  return (
    <div className="min-h-screen w-full bg-[#f2f2f7] flex flex-col safe-area">
      <Toaster position="top-center" />
      
      {/* iOS-style Header */}
      <div className="bg-[#f2f2f7] pt-safe">
        <div className="px-5 pt-4 pb-2">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center shadow-sm">
              <Pill className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-[34px] font-bold text-black tracking-tight leading-none">
              Pill Tracker
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content - iOS Card Style */}
      <div className="flex-1 px-4 pb-8">
        <PillPack takenPills={takenPills} onPillTap={handlePillTap} />

        {/* iOS-style Action Buttons */}
        <div className="mt-6 space-y-3">
          <ReminderSettings
            reminderTime={reminderTime}
            onReminderTimeChange={setReminderTime}
            notificationsEnabled={notificationsEnabled}
            onNotificationsToggle={handleNotificationsToggle}
          />
          
          <button
            onClick={handleReset}
            className="w-full bg-white rounded-xl px-4 py-3.5 flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-transform"
          >
            <RotateCcw className="w-4 h-4 text-gray-600" />
            <span className="text-[17px] text-gray-900">Start New Pack</span>
          </button>
        </div>
      </div>
    </div>
  );
}
