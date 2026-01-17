import { motion } from 'motion/react';
import { ArrowLeft, Sparkles } from 'lucide-react';

const quickActions = [
  { emoji: '🤔', text: 'How am I feeling?', gradient: 'from-blue-500 to-cyan-500' },
  { emoji: '📝', text: 'Process my day', gradient: 'from-purple-500 to-pink-500' },
  { emoji: '💭', text: 'Explore a thought', gradient: 'from-orange-500 to-red-500' },
  { emoji: '🎯', text: 'Set an intention', gradient: 'from-green-500 to-emerald-500' },
  { emoji: '🌟', text: 'Gratitude practice', gradient: 'from-yellow-500 to-orange-500' },
  { emoji: '😌', text: 'Need support', gradient: 'from-indigo-500 to-purple-500' },
];

export function ChatStartDemo() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-[2rem] overflow-hidden">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-sm">
        <span className="text-sm font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-3 border border-gray-800 rounded-sm" />
        </div>
      </div>

      {/* Header */}
      <div className="px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </motion.button>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-gray-900">AI Companion</p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs text-gray-500">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Content */}
      <div className="px-6 py-8 space-y-6">
        {/* Welcome Message */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm border border-gray-100"
            >
              <p className="text-gray-900 leading-relaxed">
                Hey there! 👋 I'm here to listen and help you process your thoughts and emotions.
              </p>
            </motion.div>
            <p className="text-xs text-gray-400 mt-1 ml-2">Just now</p>
          </div>
        </div>

        {/* Quick Actions Prompt */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm border border-gray-100"
            >
              <p className="text-gray-900 leading-relaxed mb-3">
                What would you like to explore today?
              </p>
              
              {/* Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`bg-gradient-to-br ${action.gradient} rounded-xl p-3 text-left shadow-sm`}
                  >
                    <span className="text-2xl block mb-1">{action.emoji}</span>
                    <p className="text-white text-xs font-semibold">{action.text}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
            <p className="text-xs text-gray-400 mt-1 ml-2">Just now</p>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-white/95 backdrop-blur-lg border-t border-gray-200 rounded-b-[2rem]">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full bg-transparent text-gray-900 placeholder-gray-400 outline-none"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
