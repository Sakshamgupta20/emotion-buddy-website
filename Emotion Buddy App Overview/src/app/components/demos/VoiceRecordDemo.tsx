import { motion } from 'motion/react';
import { ArrowLeft, Mic, Pause, Trash2 } from 'lucide-react';

export function VoiceRecordDemo() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-[2rem] overflow-hidden">
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
          <h1 className="text-xl font-bold text-gray-900">Voice Note</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-12 flex flex-col items-center justify-center">
        {/* Recording Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-6xl font-bold text-gray-900 text-center mb-2">
            00:47
          </p>
          <div className="flex items-center justify-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-red-500 rounded-full"
            />
            <p className="text-sm text-gray-500">Recording...</p>
          </div>
        </motion.div>

        {/* Waveform Visualization */}
        <div className="w-full max-w-xs mb-12">
          <div className="flex items-center justify-center gap-1 h-32">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: [
                    `${20 + Math.random() * 60}%`,
                    `${20 + Math.random() * 80}%`,
                    `${20 + Math.random() * 60}%`,
                  ],
                }}
                transition={{
                  duration: 0.5 + Math.random() * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex-1 bg-gradient-to-t from-blue-400 to-purple-500 rounded-full"
                style={{ minHeight: '20%' }}
              />
            ))}
          </div>
        </div>

        {/* Microphone Button */}
        <div className="relative mb-8">
          {/* Pulsing rings */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-red-400 rounded-full -m-8"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute inset-0 bg-red-400 rounded-full -m-4"
          />
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-full shadow-2xl flex items-center justify-center"
          >
            <Pause className="w-12 h-12 text-white" />
          </motion.button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-lg"
          >
            <Trash2 className="w-6 h-6 text-gray-700" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg"
          >
            Save & Transcribe
          </motion.button>
        </div>

        {/* Info Text */}
        <p className="text-sm text-gray-500 mt-8 text-center max-w-xs">
          Your voice will be transcribed and analyzed for emotions
        </p>
      </div>
    </div>
  );
}
