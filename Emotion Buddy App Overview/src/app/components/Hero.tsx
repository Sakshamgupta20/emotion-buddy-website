import { motion } from 'motion/react';
import { Sparkles, Download } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import homeImg from 'figma:asset/345ba0ceb2f98fb321631b606c595d917b39c3e4.png';
import chatStartImg from 'figma:asset/c3f4d894bfdcf7f9121b1da9a16f1f6ee1e41c1c.png';
import journalEntryImg from 'figma:asset/7c07d52321e54874426a0c7fee45dd4a80c17ba2.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 mb-6 md:mb-8"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-xs md:text-sm font-semibold text-purple-900">AI-Powered Emotional Wellness</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
            >
              Your Journey to
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
                Self-Discovery
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed"
            >
              Transform your mental wellness with AI-powered insights, empathetic chat support, 
              and beautiful visualizations. Start each day mindfully with your Emotion Buddy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12"
            >
              <a 
                href="https://app.emotionbuddy.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Try Emotion Buddy
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 md:gap-8"
            >
              {[
                { value: '500K+', label: 'Active Users' },
                { value: '10M+', label: 'Journal Entries' },
                { value: '4.9★', label: 'App Rating' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Phone Mockups */}
          <div className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
            {/* Center phone - Home Screen */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
              style={{ width: '240px' }}
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-30 blur-3xl scale-110 rounded-[3rem]" />
                
                {/* Phone frame */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    <img 
                      src={homeImg} 
                      alt="Home Screen"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Left phone - Chat */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: 25 }}
              animate={{ opacity: 1, x: 0, rotateY: 15 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:block"
              style={{ width: '200px', perspective: '1000px' }}
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-20 blur-2xl scale-110 rounded-[3rem]" />
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    <img 
                      src={chatStartImg} 
                      alt="AI Chat"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right phone - Journal Entry */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -25 }}
              animate={{ opacity: 1, x: 0, rotateY: -15 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:block"
              style={{ width: '200px', perspective: '1000px' }}
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 opacity-20 blur-2xl scale-110 rounded-[3rem]" />
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    <img 
                      src={journalEntryImg} 
                      alt="Journal Entry"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-xs md:text-sm text-gray-500 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <motion.div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
