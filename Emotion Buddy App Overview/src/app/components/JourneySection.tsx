import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import journalEntryImg from 'figma:asset/b61d215a7f59b167cbc0fdef148369cb0fc7147e.png';
import calendarImg from 'figma:asset/c9f06ae71dc90b5ebdfc68a5506bdbd0f45d4c38.png';
import { Pencil, Lock, Sparkles, TrendingUp } from 'lucide-react';

const journeyFeatures = [
  {
    icon: Pencil,
    title: 'Write Freely',
    description: 'Express yourself in any way—text, voice, or quick mood check-ins'
  },
  {
    icon: Sparkles,
    title: 'AI Insights',
    description: 'Get personalized insights and follow-up questions to deepen reflection'
  },
  {
    icon: Lock,
    title: 'Private & Secure',
    description: 'End-to-end encryption ensures your thoughts remain yours alone'
  },
  {
    icon: TrendingUp,
    title: 'Track Progress',
    description: 'See your emotional growth with beautiful visualizations and streaks'
  }
];

export function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600">
            Your Personal Growth Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every reflection is a step forward. Track your emotional wellness,
            celebrate wins, and discover the patterns that shape your life.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Calendar phone - Background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: 20 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative md:absolute md:left-12 md:top-12 md:z-0"
            >
              <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl max-w-xs mx-auto">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <img 
                    src={calendarImg} 
                    alt="Calendar view"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>

            {/* Journal entry phone - Foreground */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative z-10 mt-8 md:mt-0"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-400 opacity-20 blur-3xl rounded-[3rem] scale-105" />
              
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl max-w-xs mx-auto">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <img 
                    src={journalEntryImg} 
                    alt="Journal entry"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-500 to-pink-500 text-white px-6 py-3 rounded-2xl shadow-2xl font-bold"
              >
                <div className="text-2xl">96</div>
                <div className="text-xs opacity-90">reflections</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Feature List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
          >
            {journeyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all border border-orange-100"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '10M+', label: 'Entries Written' },
            { value: '500K+', label: 'Active Users' },
            { value: '4.9★', label: 'App Rating' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-pink-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
