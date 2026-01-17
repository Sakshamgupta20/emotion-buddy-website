import { motion } from 'motion/react';
import { ArrowLeft, Info } from 'lucide-react';

export function MoodCheckDemo() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-[2rem] overflow-hidden">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-6 py-3">
        <span className="text-sm font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-3 border border-gray-800 rounded-sm" />
        </div>
      </div>

      {/* Header */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-sm"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </motion.button>
          <h1 className="text-xl font-bold text-gray-900">Mood Check-in</h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-sm"
          >
            <Info className="w-5 h-5 text-gray-700" />
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-2">How are you feeling?</p>
          <p className="text-4xl font-bold text-gray-900">Calm</p>
        </div>

        {/* Interactive Mood Selector */}
        <div className="relative h-80 flex items-center justify-center mb-8">
          {/* Background gradient circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 opacity-30" />
          </div>

          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
            <line x1="150" y1="0" x2="150" y2="300" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="0" y1="150" x2="300" y2="150" stroke="#e5e7eb" strokeWidth="1" />
          </svg>

          {/* Axis Labels */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2">
            <p className="text-xs font-semibold text-gray-500">Happy</p>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <p className="text-xs font-semibold text-gray-500">Sad</p>
          </div>
          <div className="absolute left-8 top-1/2 -translate-y-1/2">
            <p className="text-xs font-semibold text-gray-500">Calm</p>
          </div>
          <div className="absolute right-8 top-1/2 -translate-y-1/2">
            <p className="text-xs font-semibold text-gray-500">Energetic</p>
          </div>

          {/* Draggable Orb */}
          <motion.div
            drag
            dragConstraints={{ left: -120, right: 120, top: -120, bottom: 120 }}
            dragElastic={0.1}
            whileHover={{ scale: 1.1 }}
            whileDrag={{ scale: 1.2 }}
            className="relative z-10 w-24 h-24 cursor-grab active:cursor-grabbing"
            style={{ x: -40, y: 20 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-xl opacity-60" />
            <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center">
              <span className="text-4xl">😌</span>
            </div>
          </motion.div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
          <p className="text-sm text-blue-900 text-center">
            Drag the orb to express exactly how you feel
          </p>
        </div>

        {/* Quick Mood Buttons */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {[
            { emoji: '😊', label: 'Happy' },
            { emoji: '😢', label: 'Sad' },
            { emoji: '😌', label: 'Calm' },
            { emoji: '😤', label: 'Angry' },
          ].map((mood, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-xl p-3 shadow-sm border border-gray-200 text-center"
            >
              <span className="text-2xl block mb-1">{mood.emoji}</span>
              <p className="text-xs text-gray-600 font-medium">{mood.label}</p>
            </motion.button>
          ))}
        </div>

        {/* Save Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 rounded-2xl shadow-lg"
        >
          Save Mood Check-in
        </motion.button>
      </div>
    </div>
  );
}
