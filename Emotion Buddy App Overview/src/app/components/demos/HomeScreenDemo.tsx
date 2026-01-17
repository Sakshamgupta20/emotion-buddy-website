import { motion } from 'motion/react';
import { Plus, MessageCircle, Calendar, BarChart3, User, Bell } from 'lucide-react';

export function HomeScreenDemo() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-[2rem] overflow-hidden">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-sm">
        <span className="text-sm font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-3 border border-gray-800 rounded-sm relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-1 bg-gray-800" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-gray-500 text-sm">Good afternoon,</p>
            <h1 className="text-3xl font-bold text-gray-900">Buddy! 👋</h1>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"
          >
            <User className="w-5 h-5 text-purple-600" />
          </motion.button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 pb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 text-left shadow-lg"
          >
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-3">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <p className="text-white font-semibold">New Entry</p>
            <p className="text-white/80 text-xs">Write your thoughts</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-4 text-left shadow-lg"
          >
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-3">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <p className="text-white font-semibold">AI Chat</p>
            <p className="text-white/80 text-xs">Talk with buddy</p>
          </motion.button>
        </div>
      </div>

      {/* Recent Entries */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Recent Entries</h2>
          <button className="text-sm text-purple-600 font-semibold">View All</button>
        </div>

        <div className="space-y-3">
          {/* Entry 1 */}
          <motion.div
            whileHover={{ x: 4 }}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">😌</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Today was calm</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-1">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium">Calm</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm line-clamp-2">
              Finally finished that project I've been working on...
            </p>
          </motion.div>

          {/* Entry 2 */}
          <motion.div
            whileHover={{ x: 4 }}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">😊</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Great morning</p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </div>
              <div className="flex gap-1">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium">Happy</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm line-clamp-2">
              Coffee with Sarah was exactly what I needed...
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-6 py-3 rounded-b-[2rem]">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center gap-1 text-purple-600">
            <Calendar className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <BarChart3 className="w-6 h-6" />
            <span className="text-xs font-medium">Insights</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs font-medium">Chat</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
