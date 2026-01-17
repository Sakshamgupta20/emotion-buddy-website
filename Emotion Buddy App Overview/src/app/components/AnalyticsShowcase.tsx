import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MoodAlignmentDemo } from '@/app/components/MoodAlignmentDemo';
import { InsightsDashboardDemo } from '@/app/components/InsightsDashboardDemo';
import { BarChart3, Brain, TrendingUp, Target, Zap, Heart } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Self-Awareness Score',
    description: 'Measure how well your perception matches reality',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: TrendingUp,
    title: 'Mood Trends',
    description: 'Beautiful visualizations of your emotional journey',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Target,
    title: 'Pattern Detection',
    description: 'AI identifies resilience and emotional patterns',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Heart,
    title: 'Health Metrics',
    description: 'Track your overall emotional well-being over time',
    color: 'from-green-500 to-emerald-500'
  }
];

export function AnalyticsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
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
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900">
            Advanced Analytics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Go beyond basic mood tracking. Discover deep insights about your emotional 
            intelligence, self-awareness, and personal growth patterns.
          </p>
        </motion.div>

        {/* Interactive Demos */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mood Alignment Demo */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <MoodAlignmentDemo />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Mood Alignment Analysis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Compare your self-perception with AI-detected emotions. Build better 
                self-awareness by understanding the gap between how you feel and what 
                your writing reveals.
              </p>
            </motion.div>
          </motion.div>

          {/* Insights Dashboard Demo */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <InsightsDashboardDemo />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Comprehensive Dashboard
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Track your emotional well-being over time with beautiful area charts, 
                health metrics, and valence trends. See your growth at a glance.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-2xl rounded-3xl transition-opacity duration-500`} />
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all h-full">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <p className="text-2xl text-gray-700 mb-6">
            Turn your journal into a powerful tool for self-discovery
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all"
          >
            Explore Analytics
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
