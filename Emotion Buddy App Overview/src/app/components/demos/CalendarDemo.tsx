import { motion } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const moodColors = [
  'bg-green-500', 'bg-blue-400', 'bg-yellow-400', 'bg-orange-400', 
  'bg-red-400', 'bg-purple-400', 'bg-pink-400', 'bg-cyan-400'
];

const generateCalendarData = () => {
  const days = [];
  for (let i = 0; i < 35; i++) {
    if (i < 3 || i > 32) {
      days.push({ day: '', intensity: 0 });
    } else {
      const hasEntry = Math.random() > 0.3;
      days.push({
        day: i - 2,
        intensity: hasEntry ? Math.floor(Math.random() * 5) + 1 : 0,
      });
    }
  }
  return days;
};

const calendarData = generateCalendarData();

export function CalendarDemo() {
  return (
    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-6 py-3">
        <span className="text-sm font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-3 border border-gray-800 rounded-sm" />
        </div>
      </div>

      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </motion.button>
          <h1 className="text-xl font-bold text-gray-900">Mood Calendar</h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <Filter className="w-5 h-5 text-gray-700" />
          </motion.button>
        </div>

        {/* Month Navigator */}
        <div className="flex items-center justify-between">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </motion.button>
          <h2 className="text-lg font-bold text-gray-900">January 2026</h2>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </motion.button>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Weekday Headers */}
        <div className="grid grid-cols-7 gap-2 mb-3">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-xs font-semibold text-gray-500">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 mb-6">
          {calendarData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.02 }}
              whileHover={data.day ? { scale: 1.1 } : {}}
              className="aspect-square"
            >
              {data.day ? (
                <div
                  className={`w-full h-full rounded-xl flex items-center justify-center text-sm font-semibold relative ${
                    data.intensity === 0
                      ? 'bg-gray-100 text-gray-400'
                      : 'text-white'
                  }`}
                  style={{
                    background: data.intensity > 0
                      ? `linear-gradient(135deg, ${
                          ['#10b981', '#3b82f6', '#eab308', '#f97316', '#ef4444'][
                            Math.min(data.intensity - 1, 4)
                          ]
                        }, ${
                          ['#059669', '#2563eb', '#ca8a04', '#ea580c', '#dc2626'][
                            Math.min(data.intensity - 1, 4)
                          ]
                        })`
                      : undefined,
                  }}
                >
                  {data.day}
                  {data.intensity > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.02 }}
                      className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"
                    />
                  )}
                </div>
              ) : (
                <div className="w-full h-full" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs font-semibold text-gray-700 mb-3">Mood Intensity</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Low</span>
            <div className="flex-1 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className="flex-1 h-3 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${
                      ['#10b981', '#3b82f6', '#eab308', '#f97316', '#ef4444'][level - 1]
                    }, ${
                      ['#059669', '#2563eb', '#ca8a04', '#ea580c', '#dc2626'][level - 1]
                    })`,
                  }}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">High</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200">
            <p className="text-2xl font-bold text-gray-900 mb-1">23</p>
            <p className="text-xs text-gray-600">Entries</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-200">
            <p className="text-2xl font-bold text-gray-900 mb-1">7.2</p>
            <p className="text-xs text-gray-600">Avg Mood</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 border border-orange-200">
            <p className="text-2xl font-bold text-gray-900 mb-1">12</p>
            <p className="text-xs text-gray-600">Streak</p>
          </div>
        </div>
      </div>
    </div>
  );
}
