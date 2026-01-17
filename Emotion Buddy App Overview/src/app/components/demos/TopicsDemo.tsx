import { motion } from 'motion/react';
import { ArrowLeft, TrendingUp, BarChart3 } from 'lucide-react';

const topics = [
  { name: 'Work', count: 24, color: 'bg-blue-500', percentage: 85 },
  { name: 'Relationships', count: 18, color: 'bg-pink-500', percentage: 65 },
  { name: 'Health', count: 15, color: 'bg-green-500', percentage: 55 },
  { name: 'Self-care', count: 12, color: 'bg-purple-500', percentage: 45 },
  { name: 'Family', count: 10, color: 'bg-orange-500', percentage: 35 },
  { name: 'Hobbies', count: 8, color: 'bg-cyan-500', percentage: 30 },
];

const lifeContexts = [
  { emoji: '💼', label: 'Work', value: 32 },
  { emoji: '❤️', label: 'Relationships', value: 28 },
  { emoji: '🏃', label: 'Health', value: 22 },
  { emoji: '👨‍👩‍👧', label: 'Family', value: 18 },
];

export function TopicsDemo() {
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
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </motion.button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Topics & Themes</h1>
            <p className="text-xs text-gray-500">Last 30 days</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-8">
        {/* Life Contexts */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Life Contexts</h2>
              <p className="text-xs text-gray-500">What you focus on</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {lifeContexts.map((context, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 border border-gray-200 text-center"
              >
                <span className="text-3xl block mb-2">{context.emoji}</span>
                <p className="text-xs text-gray-600 font-medium mb-1">{context.label}</p>
                <p className="text-lg font-bold text-gray-900">{context.value}%</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Most Frequent Topics */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Most Frequent Topics</h2>
              <p className="text-xs text-gray-500">Themes in your writing</p>
            </div>
          </div>

          <div className="space-y-4">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${topic.color} rounded-full`} />
                    <span className="font-semibold text-gray-900">{topic.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{topic.count} entries</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${topic.percentage}%` }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    className={`h-full ${topic.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Insight Card */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-5">
          <p className="text-sm font-semibold text-blue-900 mb-2">💡 Pattern Insight</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            You've been reflecting a lot on work lately. Consider balancing with more 
            entries about self-care and personal relationships.
          </p>
        </div>
      </div>
    </div>
  );
}
