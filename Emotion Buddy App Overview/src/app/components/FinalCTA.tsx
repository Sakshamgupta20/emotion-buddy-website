import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Star, Download, Smartphone } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100" />
      
      {/* Animated blobs */}
      <motion.div
        className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-40"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Stars rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-2 mb-6"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <Star className="w-6 h-6 md:w-8 md:h-8 fill-yellow-400 text-yellow-400" />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base text-gray-600 mb-8 md:mb-12"
        >
          Rated 4.9/5 by 500,000+ users worldwide
        </motion.p>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
        >
          Start Your Journey Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto px-4"
        >
          Join thousands who've transformed their emotional well-being.
          Available on web, iOS, and Android.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12"
        >
          <a 
            href="https://app.emotionbuddy.ai/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 md:px-12 py-5 md:py-7 text-base md:text-xl rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all"
              >
                <Download className="mr-2 w-5 h-5 md:w-6 md:h-6" />
                Try Emotion Buddy
              </Button>
            </motion.div>
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-600 mb-12 md:mb-16"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>Free to start</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>100% private & secure</span>
          </div>
        </motion.div>

        {/* App badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a 
            href="https://apps.apple.com/us/app/emotion-buddy/id6755134472"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-5 md:px-6 py-3 bg-black text-white rounded-xl font-semibold items-center gap-3 cursor-pointer hover:scale-105 transition-transform shadow-lg"
          >
            <Smartphone className="w-6 h-6 md:w-7 md:h-7" />
            <div className="text-left">
              <div className="text-xs opacity-80">Download on the</div>
              <div className="text-sm md:text-base">App Store</div>
            </div>
          </a>
          <a 
            href="https://play.google.com/store/apps/details?id=com.emotionbuddy.mobile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-5 md:px-6 py-3 bg-black text-white rounded-xl font-semibold items-center gap-3 cursor-pointer hover:scale-105 transition-transform shadow-lg"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">Get it on</div>
              <div className="text-sm md:text-base">Google Play</div>
            </div>
          </a>
          <a 
            href="https://app.emotionbuddy.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-5 md:px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold items-center gap-3 cursor-pointer hover:scale-105 transition-transform shadow-lg"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">Open in</div>
              <div className="text-sm md:text-base">Web Browser</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
