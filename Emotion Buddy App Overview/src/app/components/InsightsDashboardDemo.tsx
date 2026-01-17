import { motion } from 'motion/react';
import { TrendingUp, Heart, AlertCircle, Info } from 'lucide-react';

export function InsightsDashboardDemo() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Insights</h3>
          <p className="text-sm text-gray-500">Your emotional well-being dashboard</p>
        </div>
      </div>

      {/* Time Period Tabs */}
      <div className="flex gap-2 mb-6">
        {['7D', '30D', '90D', '1Y'].map((period, index) => (
          <motion.button
            key={period}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              index === 1
                ? 'bg-blue-400 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {period}
          </motion.button>
        ))}
      </div>

      {/* Quick Stats Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
            <span className="text-xl">🎯</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Quick Stats</h4>
            <p className="text-xs text-gray-500">Key metrics at a glance</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {/* Health Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-4 border border-emerald-100"
          >
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center mb-3 shadow-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-xs font-medium text-gray-600">Health Trend</span>
              <Info className="w-3 h-3 text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900">--</div>
          </motion.div>

          {/* Avg Valence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100"
          >
            <div className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center mb-3 shadow-lg">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-xs font-medium text-gray-600">Avg Valence</span>
              <Info className="w-3 h-3 text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900">--</div>
          </motion.div>

          {/* Crisis Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-100"
          >
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center mb-3 shadow-lg">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-xs font-medium text-gray-600">Crisis E...</span>
              <Info className="w-3 h-3 text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900">0</div>
            <div className="text-xs text-gray-500">last 7 d...</div>
          </motion.div>
        </div>
      </div>

      {/* Mood Trends */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
            <span className="text-xl">📊</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Mood Trends</h4>
            <p className="text-xs text-gray-500">How your mood has changed over time</p>
          </div>
        </div>

        {/* Sample Data Banner */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 mb-4 flex items-start gap-3">
          <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-xs font-bold">!</span>
          </div>
          <p className="text-xs text-amber-800 leading-relaxed">
            This is sample data to show what your emotional journey will look like. Start journaling to see your own trends!
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-400 rounded-full" />
            <span className="text-xs text-gray-600">Valence (Mood)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-400 rounded-full" />
            <span className="text-xs text-gray-600">Intensity</span>
          </div>
        </div>

        {/* Chart */}
        <div className="relative h-48 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-gray-200">
          {/* Y-axis labels */}
          <div className="absolute left-2 top-4 bottom-4 flex flex-col justify-between text-xs text-gray-400">
            <span>10</span>
            <span>8</span>
            <span>6</span>
            <span>4</span>
          </div>

          {/* Chart Area */}
          <svg className="w-full h-full pl-6" viewBox="0 0 380 180" preserveAspectRatio="none">
            <defs>
              <linearGradient id="valenceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="intensityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fb923c" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#fb923c" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Intensity Area */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              d="M 0 90 Q 95 50, 190 70 T 380 80 L 380 180 L 0 180 Z"
              fill="url(#intensityGradient)"
            />

            {/* Valence Area */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
              d="M 0 100 Q 95 80, 190 90 T 380 70 L 380 180 L 0 180 Z"
              fill="url(#valenceGradient)"
            />

            {/* Intensity Line */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              d="M 0 90 Q 95 50, 190 70 T 380 80"
              fill="none"
              stroke="#fb923c"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Valence Line */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
              d="M 0 100 Q 95 80, 190 90 T 380 70"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
