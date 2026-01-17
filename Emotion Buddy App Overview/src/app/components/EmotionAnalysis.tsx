import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import emotionImg from 'figma:asset/09c5ef16e22631ccde75ab7f55ef54c4f70f32f7.png';
import topicsImg from 'figma:asset/c836c7e10242f8242c71d4c2687f53f61b19d781.png';
import calendarImg from 'figma:asset/c9f06ae71dc90b5ebdfc68a5506bdbd0f45d4c38.png';
import { TrendingUp, Calendar, Sparkles, BarChart3, Target, Zap } from 'lucide-react';

const insights = [
  {
    icon: BarChart3,
    title: 'Emotion Distribution',
    description: 'See how your emotions are balanced across different moods',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Target,
    title: 'Pattern Recognition',
    description: 'AI identifies recurring themes and emotional triggers',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: TrendingUp,
    title: 'Growth Tracking',
    description: 'Monitor your emotional wellness journey over time',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Sparkles,
    title: 'Topic Extraction',
    description: 'Discover what topics you reflect on most often',
    color: 'from-orange-500 to-amber-500'
  }
];

export function EmotionAnalysis() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden relative">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-2xl opacity-50"
              />
              <div className="relative w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl flex items-center justify-center shadow-2xl">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            Deep Emotional Intelligence
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Our AI doesn't just read your words—it understands the emotions behind them,
            revealing patterns and insights that illuminate your inner world.
          </p>
        </motion.div>

        {/* Insights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${insight.color} opacity-0 group-hover:opacity-20 blur-2xl rounded-3xl transition-opacity duration-500`} />
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all h-full">
                <div className={`w-14 h-14 bg-gradient-to-br ${insight.color} rounded-2xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform`}>
                  <insight.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{insight.title}</h3>
                <p className="text-purple-200 text-sm leading-relaxed">{insight.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Phone Showcase - 3D Layout */}
        <div className="relative" style={{ perspective: '2000px' }}>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left - Calendar */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: 30 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 10 } : { opacity: 0, x: -100, rotateY: 30 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ rotateY: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-20 blur-3xl rounded-[3rem] scale-105" />
                
                {/* Phone */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <img 
                      src={calendarImg} 
                      alt="Mood Calendar"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-full shadow-xl font-semibold text-sm whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Mood Calendar
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Center - Emotion Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative group lg:-mt-12"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 opacity-30 blur-3xl rounded-[3rem] scale-110" />
                
                {/* Phone */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <img 
                      src={emotionImg} 
                      alt="Emotion Analysis"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Badge */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-gradient-to-br from-pink-500 to-rose-500 text-white p-4 rounded-2xl shadow-2xl"
                >
                  <Sparkles className="w-8 h-8" />
                </motion.div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-full shadow-xl font-semibold text-sm whitespace-nowrap"
                >
                  <BarChart3 className="w-4 h-4 inline mr-1" />
                  Emotion Analysis
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right - Topics */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -30 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: -10 } : { opacity: 0, x: 100, rotateY: -30 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ rotateY: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-400 opacity-20 blur-3xl rounded-[3rem] scale-105" />
                
                {/* Phone */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <img 
                      src={topicsImg} 
                      alt="Topics & Themes"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 1.4 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2 rounded-full shadow-xl font-semibold text-sm whitespace-nowrap"
                >
                  <Zap className="w-4 h-4 inline mr-1" />
                  Topics & Themes
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-32 text-center"
        >
          <p className="text-2xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Every journal entry becomes a data point in your emotional journey,
            revealing insights that guide you toward greater self-awareness.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-900 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all"
          >
            Explore Analytics
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
