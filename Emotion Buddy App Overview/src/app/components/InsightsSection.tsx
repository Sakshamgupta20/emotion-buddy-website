import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import topicsImg from 'figma:asset/7f2f4d1ccc0fa7042e19780e64f30b13784a49d2.png';
import journalEntryImg from 'figma:asset/7c07d52321e54874426a0c7fee45dd4a80c17ba2.png';
import { BarChart3, Tag, TrendingUp, Sparkles, Brain, Heart } from 'lucide-react';

const insightFeatures = [
  {
    icon: Tag,
    title: 'Topics & Themes',
    description: 'AI automatically extracts topics from your journals',
    stat: '50+',
    label: 'themes tracked'
  },
  {
    icon: Brain,
    title: 'Emotion Analysis',
    description: 'Deep analysis of your emotional state and valence',
    stat: '40+',
    label: 'emotions detected'
  },
  {
    icon: TrendingUp,
    title: 'Life Contexts',
    description: 'Track patterns across work, relationships, and health',
    stat: '100%',
    label: 'contextual'
  },
  {
    icon: Heart,
    title: 'Self-Reflection',
    description: 'Measure your journey toward greater self-awareness',
    stat: '95%',
    label: 'accuracy'
  }
];

export function InsightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center shadow-2xl">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900">
            Discover Your Patterns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your journal entries into actionable insights. See what topics 
            dominate your thoughts and how your emotions evolve over time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Phones */}
          <div className="relative">
            {/* Background phone - Journal Entry */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: -20 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative md:absolute md:left-0 md:top-12 md:z-0"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl max-w-xs mx-auto md:mx-0">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <img 
                    src={journalEntryImg} 
                    alt="Journal Entry Analysis"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>

            {/* Foreground phone - Topics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative z-10 mt-8 md:mt-0 md:ml-32"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-400 opacity-20 blur-3xl scale-110 rounded-[3rem]" />
              
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl max-w-xs mx-auto md:mx-0">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <img 
                    src={topicsImg} 
                    alt="Topics & Themes"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-500 to-red-500 text-white px-6 py-3 rounded-3xl shadow-2xl font-bold text-center"
              >
                <Sparkles className="w-6 h-6 mx-auto mb-1" />
                <div className="text-sm">AI Powered</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Features */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            {insightFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group relative"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 to-red-400/0 group-hover:from-orange-400/10 group-hover:to-red-400/10 blur-xl rounded-3xl transition-all duration-500" />
                
                <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 group-hover:border-orange-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-3">{feature.description}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                          {feature.stat}
                        </span>
                        <span className="text-sm text-gray-500">{feature.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-3xl p-8 shadow-2xl border-2 border-orange-100">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Start discovering your patterns today
              </h3>
              <p className="text-gray-600">
                Every journal entry reveals new insights about yourself
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-orange-500/50 transition-all whitespace-nowrap"
            >
              Get Started Free
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
