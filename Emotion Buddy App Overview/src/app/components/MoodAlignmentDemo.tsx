import { motion } from 'motion/react';
import { Scale, TrendingUp, Brain, AlertTriangle, CheckCircle } from 'lucide-react';

export function MoodAlignmentDemo() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
          <Scale className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Mood Alignment</h3>
          <p className="text-sm text-gray-500">Your perception vs AI analysis</p>
        </div>
      </div>

      {/* Sample Data Banner */}
      <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 mb-6 flex items-start gap-3">
        <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-white text-xs font-bold">!</span>
        </div>
        <p className="text-sm text-amber-800">
          This is sample data. Select your mood when journaling to see your own alignment!
        </p>
      </div>

      {/* Alignment Score */}
      <div className="flex items-center gap-6 mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative"
        >
          <svg className="w-28 h-28 transform -rotate-90">
            <circle
              cx="56"
              cy="56"
              r="50"
              stroke="#e5e7eb"
              strokeWidth="12"
              fill="none"
            />
            <motion.circle
              cx="56"
              cy="56"
              r="50"
              stroke="url(#gradient)"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 314" }}
              animate={{ strokeDasharray: "267 314" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl font-bold text-emerald-600"
            >
              85%
            </motion.span>
          </div>
        </motion.div>

        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-1">Great Alignment</h4>
          <p className="text-sm text-gray-600">Your mood matches AI analysis well</p>
        </div>
      </div>

      {/* Mood Comparison */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-bold text-gray-900">Mood Comparison</h4>
          <div className="flex items-center gap-1 text-sm text-emerald-600">
            <CheckCircle className="w-4 h-4" />
            <span>0.4 pt diff</span>
          </div>
        </div>

        {/* Your Mood */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xs">👤</span>
              </div>
              <span className="font-semibold text-gray-900">Your Mood</span>
            </div>
            <span className="text-xl font-bold text-gray-900">7.2</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
            />
          </div>
        </div>

        {/* AI Detected */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-orange-600" />
              </div>
              <span className="font-semibold text-gray-900">AI Detected</span>
            </div>
            <span className="text-xl font-bold text-gray-900">6.8</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "68%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full"
            />
          </div>
        </div>

        {/* Scale */}
        <div className="flex justify-between text-xs text-gray-400 px-1">
          <span>0</span>
          <span>2.5</span>
          <span>5.0</span>
          <span>7.5</span>
          <span>10</span>
        </div>
      </div>

      {/* Divergence Warning */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-900">
          2 entries with significant divergence detected
        </p>
      </div>

      {/* Detected Patterns */}
      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-4">Detected Patterns</h4>
        
        <div className="space-y-4">
          {/* Resilience */}
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0 mt-1.5" />
            <div>
              <h5 className="font-bold text-gray-900 mb-1">Resilience</h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                You tend to recover well from difficult emotions and maintain a positive outlook.
              </p>
            </div>
          </div>

          {/* Self awareness */}
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0 mt-1.5" />
            <div>
              <h5 className="font-bold text-gray-900 mb-1">Self awareness</h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your self-reported mood aligns well with emotional patterns detected in your writing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
