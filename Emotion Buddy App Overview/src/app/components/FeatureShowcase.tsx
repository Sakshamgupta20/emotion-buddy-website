import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { Brain, MessageCircle, TrendingUp, Lock, Calendar, Sparkles, Zap, Heart } from 'lucide-react';
import insightsImg from 'figma:asset/73f1b0b4bf33780b6b3d81215124519059a6d3d5.png';
import chatImg from 'figma:asset/6ece1b8a78a1025dd159088bf79fe3607ac70bc7.png';
import journeyImg from 'figma:asset/655396ba337408e2b0647e6e4f480c0b1bab3375.png';
import journalEntryImg from 'figma:asset/b61d215a7f59b167cbc0fdef148369cb0fc7147e.png';

const features = [
  {
    icon: Brain,
    title: 'AI Emotion Detection',
    subtitle: 'Understand What You Feel',
    description: 'Our advanced AI analyzes your journal entries to detect over 40 different emotions with 95% accuracy. Discover patterns in your emotional landscape and gain insights you never knew existed.',
    image: insightsImg,
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    stats: [
      { icon: Zap, label: 'Real-time Analysis', value: '< 2s' },
      { icon: Brain, label: 'Emotions Tracked', value: '40+' },
      { icon: TrendingUp, label: 'Accuracy', value: '95%' }
    ],
    highlights: ['Valence tracking', 'Mood categories', 'Emotion descriptors', 'Pattern detection']
  },
  {
    icon: MessageCircle,
    title: 'AI Chat Companion',
    subtitle: 'Your Empathetic Guide',
    description: 'Chat with an AI that truly understands you. Get personalized insights, thoughtful follow-up questions, and empathetic support available 24/7. Your companion learns from your journey to provide better guidance.',
    image: chatImg,
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    stats: [
      { icon: MessageCircle, label: 'Response Time', value: '< 1s' },
      { icon: Heart, label: 'Context Aware', value: '100%' },
      { icon: Sparkles, label: 'Crisis Support', value: '24/7' }
    ],
    highlights: ['Streaming responses', 'Conversation history', 'Save as journal entry', 'Crisis detection']
  },
  {
    icon: TrendingUp,
    title: 'Visual Journey',
    subtitle: 'See Your Growth',
    description: 'Transform your emotional data into beautiful, insightful visualizations. Track trends, celebrate streaks, and watch your self-awareness grow with interactive charts and calendar heatmaps.',
    image: journeyImg,
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    stats: [
      { icon: Calendar, label: 'Daily Tracking', value: 'Unlimited' },
      { icon: TrendingUp, label: 'Insights', value: '10+/day' },
      { icon: Sparkles, label: 'Streak Rewards', value: 'Yes' }
    ],
    highlights: ['Time-series charts', 'Mood distribution', 'Calendar heatmap', 'Topics extraction']
  }
];

function UnlockAnimation({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -100 : 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -100 : 100 }}
            transition={{ duration: 0.8 }}
            className={!isEven ? 'lg:col-start-2' : ''}
          >
            {/* Icon badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="mb-6"
            >
              <div className={`inline-flex p-4 rounded-3xl bg-gradient-to-br ${feature.gradient} shadow-2xl`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className={`text-sm font-bold uppercase tracking-wider mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                {feature.subtitle}
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                {feature.title}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-10 leading-relaxed"
            >
              {feature.description}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              {feature.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {feature.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  className={`px-4 py-2 rounded-full bg-gradient-to-r ${feature.gradient} text-white text-sm font-medium shadow-lg`}
                >
                  {highlight}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Phone mockup with unlock animation */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 100 : -100, rotateY: isEven ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: isEven ? 100 : -100, rotateY: isEven ? -20 : 20 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}
            style={{ perspective: '1500px' }}
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                animate={isInView ? { scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] } : {}}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-30 blur-3xl rounded-[4rem]`}
              />

              {/* Phone */}
              <motion.div
                animate={isInView ? { y: [0, -20, 0] } : {}}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl max-w-sm mx-auto">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Floating unlock badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                  transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
                  className="absolute -top-6 -right-6 z-10"
                >
                  <div className={`relative w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-3xl shadow-2xl flex items-center justify-center`}>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Lock className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.3, delay: 1.2 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Sparkles className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function FeatureShowcase() {
  return (
    <section className="bg-white relative">
      {/* Section header */}
      <div className="py-32 text-center px-6">
        <UnlockAnimation>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Features That Transform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every feature is designed to help you understand yourself better, 
            grow emotionally, and build lasting mental wellness habits.
          </p>
        </UnlockAnimation>
      </div>

      {/* Feature cards */}
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} index={index} />
      ))}
    </section>
  );
}
