import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import chatStartImg from 'figma:asset/c3f4d894bfdcf7f9121b1da9a16f1f6ee1e41c1c.png';
import chatConvo1Img from 'figma:asset/e9036958c32def3e90ad2f72909ba6b6f057b8ee.png';
import chatConvo2Img from 'figma:asset/619c5f289840d540e38d346f45677041beb24da3.png';
import { MessageCircle, Sparkles, Heart, TrendingUp, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Empathetic AI',
    description: 'Your companion understands context and emotions',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: TrendingUp,
    title: 'Pattern Recognition',
    description: 'Identifies themes across your journal entries',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Shield,
    title: 'Crisis Detection',
    description: '24/7 support with immediate helpline resources',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Real-time Insights',
    description: 'Get meaningful reflections in seconds',
    color: 'from-orange-500 to-amber-500'
  }
];

export function ChatFeature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
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
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900">
            Your AI Companion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Chat with an empathetic AI that truly understands your journey. Get insights, 
            find patterns, and receive thoughtful support whenever you need it.
          </p>
        </motion.div>

        {/* 3-Phone Layout */}
        <div className="relative mb-20" style={{ perspective: '2000px' }}>
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Phone 1 - Chat Start */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: 20 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 5 } : { opacity: 0, x: -100, rotateY: 20 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ rotateY: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                animate={isInView ? { y: [0, -15, 0] } : {}}
                style={{ animationDuration: '5s', animationIterationCount: 'infinite' }}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 opacity-20 blur-3xl rounded-[3rem] scale-105" />
                
                {/* Phone */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl max-w-sm mx-auto">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <img 
                      src={chatStartImg} 
                      alt="Start Chat"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full shadow-xl font-semibold text-sm whitespace-nowrap"
                >
                  Quick Actions
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Phone 2 - Conversation */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative group lg:-mt-12"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                animate={isInView ? { y: [0, -20, 0] } : {}}
                style={{ animationDuration: '6s', animationIterationCount: 'infinite' }}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-30 blur-3xl rounded-[3rem] scale-110" />
                
                {/* Phone */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl max-w-sm mx-auto">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <img 
                      src={chatConvo1Img} 
                      alt="AI Insights"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-4 rounded-3xl shadow-2xl"
                >
                  <Sparkles className="w-8 h-8" />
                </motion.div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-full shadow-xl font-semibold text-sm whitespace-nowrap"
                >
                  Pattern Analysis
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Phone 3 - Deep Conversation */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -20 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: -5 } : { opacity: 0, x: 100, rotateY: -20 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ rotateY: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                animate={isInView ? { y: [0, 15, 0] } : {}}
                style={{ animationDuration: '7s', animationIterationCount: 'infinite' }}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 opacity-20 blur-3xl rounded-[3rem] scale-105" />
                
                {/* Phone */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl max-w-sm mx-auto">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <img 
                      src={chatConvo2Img} 
                      alt="Deep Conversation"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full shadow-xl font-semibold text-sm whitespace-nowrap"
                >
                  Save to Journal
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Features Grid */}
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
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
            Start a conversation that understands you
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all"
          >
            Try AI Chat Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
