import { motion } from 'motion/react';
import { ArrowLeft, MoreVertical, Sparkles } from 'lucide-react';

export function JournalEntryDemo() {
  return (
    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-white">
        <span className="text-sm font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-3 border border-gray-800 rounded-sm" />
        </div>
      </div>

      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </motion.button>
          <div className="text-center">
            <p className="font-bold text-gray-900">Journal Entry</p>
            <p className="text-xs text-gray-500">Today, 2:34 PM</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <MoreVertical className="w-5 h-5 text-gray-700" />
          </motion.button>
        </div>
      </div>

      {/* Entry Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Mood Indicator */}
        <div className="flex items-center gap-3">
          <span className="text-4xl">😌</span>
          <div>
            <p className="text-sm text-gray-500">Your Mood</p>
            <p className="text-lg font-bold text-gray-900">Calm & Peaceful</p>
          </div>
        </div>

        {/* Entry Text */}
        <div>
          <p className="text-gray-800 leading-relaxed">
            Finally finished that project I've been working on for weeks. The sense of accomplishment is overwhelming in the best way possible. 
          </p>
          <p className="text-gray-800 leading-relaxed mt-4">
            I took a long walk this afternoon and just let my mind wander. It's amazing how much clarity comes when you give yourself permission to just be.
          </p>
        </div>

        {/* AI Analysis Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <p className="font-bold text-gray-900">AI Insights</p>
          </div>

          {/* Emotion Tags */}
          <div className="mb-4">
            <p className="text-xs text-gray-600 mb-2 font-semibold">Detected Emotions</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                Calm
              </span>
              <span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                Accomplished
              </span>
              <span className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                Peaceful
              </span>
              <span className="px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                Reflective
              </span>
            </div>
          </div>

          {/* Valence Score */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-gray-600 font-semibold">Emotional Valence</p>
              <p className="text-sm font-bold text-gray-900">7.2/10</p>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '72%' }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-blue-400 to-green-400 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Topics */}
        <div>
          <p className="text-xs text-gray-600 mb-2 font-semibold">Topics</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
              Work
            </span>
            <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
              Self-care
            </span>
            <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
              Nature
            </span>
          </div>
        </div>

        {/* Follow-up Question */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
          <p className="text-sm font-semibold text-blue-900 mb-2">💡 Follow-up Reflection</p>
          <p className="text-sm text-blue-800">
            What specific aspects of the project made you feel most accomplished?
          </p>
        </div>
      </div>
    </div>
  );
}
