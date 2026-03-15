import { useState, useEffect } from 'react';
import { Bell, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

interface ReminderSettingsProps {
  reminderTime: string;
  onReminderTimeChange: (time: string) => void;
  notificationsEnabled: boolean;
  onNotificationsToggle: () => void;
}

export function ReminderSettings({
  reminderTime,
  onReminderTimeChange,
  notificationsEnabled,
  onNotificationsToggle,
}: ReminderSettingsProps) {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [localTime, setLocalTime] = useState(reminderTime);

  useEffect(() => {
    setLocalTime(reminderTime);
  }, [reminderTime]);

  const handleSave = () => {
    onReminderTimeChange(localTime);
    setShowTimePicker(false);
    toast.success('Reminder updated', {
      description: `Daily reminder set for ${localTime}`,
    });
  };

  const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
      toast.error('Notifications not supported');
      return;
    }

    if (Notification.permission === 'granted') {
      onNotificationsToggle();
      if (!notificationsEnabled) {
        toast.success('Notifications enabled');
      }
    } else if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        onNotificationsToggle();
        toast.success('Notifications enabled');
      } else {
        toast.error('Permission denied');
      }
    } else {
      toast.error('Enable notifications in settings');
    }
  };

  return (
    <div className="space-y-3">
      {/* Reminder Time Button */}
      <button
        onClick={() => setShowTimePicker(!showTimePicker)}
        className="w-full bg-white rounded-xl px-4 py-3 flex items-center justify-between shadow-sm active:scale-[0.98] transition-transform"
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-pink-500 flex items-center justify-center">
            <Bell className="w-4 h-4 text-white" />
          </div>
          <div className="text-left">
            <div className="text-[17px] text-gray-900">Daily Reminder</div>
            <div className="text-[13px] text-[#8e8e93]">{reminderTime}</div>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-[#c7c7cc]" />
      </button>

      {/* Time Picker Expand */}
      {showTimePicker && (
        <div className="bg-white rounded-xl px-4 py-4 shadow-sm space-y-4">
          <div>
            <label className="block text-[13px] font-medium text-[#8e8e93] mb-2 uppercase tracking-wide">
              Time
            </label>
            <input
              type="time"
              value={localTime}
              onChange={(e) => setLocalTime(e.target.value)}
              className="w-full px-4 py-2.5 text-[17px] border border-[#e5e5ea] rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
            />
          </div>
          <button
            onClick={handleSave}
            className="w-full bg-pink-500 text-white py-2.5 rounded-lg text-[17px] font-semibold active:scale-[0.98] transition-transform"
          >
            Save
          </button>
        </div>
      )}

      {/* Notifications Toggle */}
      <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center">
            <Bell className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-[17px] text-gray-900">Notifications</div>
          </div>
        </div>
        <button
          onClick={requestNotificationPermission}
          className={`
            relative inline-flex h-[31px] w-[51px] items-center rounded-full transition-colors
            ${notificationsEnabled ? 'bg-[#34c759]' : 'bg-[#e5e5ea]'}
          `}
        >
          <span
            className={`
              inline-block h-[27px] w-[27px] transform rounded-full bg-white transition-transform shadow-sm
              ${notificationsEnabled ? 'translate-x-[22px]' : 'translate-x-[2px]'}
            `}
          />
        </button>
      </div>
    </div>
  );
}
