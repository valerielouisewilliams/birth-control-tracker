import { motion } from 'motion/react';
import { format } from 'date-fns';

interface PillPackProps {
  takenPills: Map<number, Date>;
  onPillTap: (pillNumber: number) => void;
}

export function PillPack({ takenPills, onPillTap }: PillPackProps) {
  const activePills = Array.from({ length: 21 }, (_, i) => i + 1);
  const placeboPills = Array.from({ length: 7 }, (_, i) => i + 22);

  const PillButton = ({ pillNumber, isPlacebo }: { pillNumber: number; isPlacebo: boolean }) => {
    const takenDate = takenPills.get(pillNumber);
    const isTaken = !!takenDate;

    return (
      <div className="flex flex-col items-center gap-1">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => onPillTap(pillNumber)}
          className={`
            relative w-11 h-11 rounded-full flex items-center justify-center
            transition-all duration-200
            ${isTaken 
              ? 'bg-[#e5e5ea]' 
              : isPlacebo
                ? 'bg-gradient-to-br from-purple-400 to-purple-500 shadow-md'
                : 'bg-gradient-to-br from-pink-400 to-pink-500 shadow-md'
            }
          `}
        >
          {isTaken ? (
            <motion.svg
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="w-5 h-5 text-[#8e8e93]"
              fill="none"
              strokeWidth="3"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </motion.svg>
          ) : (
            <span className="text-xs font-semibold text-white">
              {pillNumber}
            </span>
          )}
        </motion.button>
        
        {/* Date caption */}
        {isTaken && takenDate && (
          <motion.span 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[9px] text-[#8e8e93] font-medium tracking-tight"
          >
            {format(takenDate, 'MMM d')}
          </motion.span>
        )}
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        {/* Week labels */}
        <div className="flex items-center justify-between mb-4 px-1">
          <span className="text-xs font-semibold text-[#8e8e93] uppercase tracking-wide">Active</span>
          <span className="text-xs font-medium text-[#8e8e93]">{takenPills.size}/28</span>
        </div>

        {/* Active Pills - 3 rows of 7 */}
        <div className="space-y-4 mb-6">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex justify-between gap-1.5">
              {activePills.slice(row * 7, (row + 1) * 7).map((pillNumber) => (
                <PillButton key={pillNumber} pillNumber={pillNumber} isPlacebo={false} />
              ))}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-[#e5e5ea] my-5"></div>

        {/* Placebo label */}
        <div className="mb-4 px-1">
          <span className="text-xs font-semibold text-[#8e8e93] uppercase tracking-wide">Placebo</span>
        </div>

        {/* Placebo Pills - 1 row of 7 */}
        <div className="flex justify-between gap-1.5">
          {placeboPills.map((pillNumber) => (
            <PillButton key={pillNumber} pillNumber={pillNumber} isPlacebo={true} />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 pt-5 border-t border-[#e5e5ea]">
          <div className="w-full h-1 bg-[#e5e5ea] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(takenPills.size / 28) * 100}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
