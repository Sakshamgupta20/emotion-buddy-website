import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import moodCheckImg from 'figma:asset/0e2d44c40d375c1e637532efc767f1db50fc0b7e.png';
import voiceRecordImg from 'figma:asset/b1b214167a0c4f2c0aec550741c1e6e7d8c2f3bb.png';
import calendarImg from 'figma:asset/b1acfb52ae6f24673a3ede24bd84a6a9aaccf73b.png';
import { Smile, Mic, Calendar, Zap, TrendingUp, Target } from 'lucide-react';

const trackingMethods = [
  {
    icon: Smile,
    title: 'Interactive Mood Check',
    description: 'Drag the orb to express exactly how you feel',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Mic,
    title: 'Voice Journaling',
    description: 'Speak your thoughts with AI transcription',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Calendar,
    title: 'Calendar Heatmap',
    description: 'Visualize your emotional journey over time',
    color: 'from-green-400 to-emerald-500'
  }
];

export function MoodTracking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden relative">
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
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl">
              <Smile className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            Track Your Emotions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Multiple ways to capture your mood—from quick check-ins to voice notes. 
            Watch your emotional landscape come to life with beautiful visualizations.
          </p>
        </motion.div>

        {/* 3-Phone Showcase */}
        <div className="relative mb-20" style={{ perspective: '2000px' }}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Phone 1 - Mood Check */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: 20 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 10 } : { opacity: 0, x: -100, rotateY: 20 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ rotateY: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 opacity-20 blur-3xl rounded-[3rem] scale-105" />
                
                {/* Phone */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <img 
                      src={moodCheckImg} 
                      alt="Mood Check"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-5 py-2 rounded-full shadow-xl font-semibold text-sm whitespace-nowrap"
                >
                  <Smile className="w-4 h-4 inline mr-1" />
                  Quick Check-in
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Phone 2 - Voice Recording */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative group lg:-mt-12"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-30 blur-3xl rounded-[3rem] scale-110" />
                
                {/* Phone */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <img 
                      src={voiceRecordImg} 
                      alt="Voice Recording"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Pulsing mic badge */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center"
                >
                  <Mic className="w-8 h-8 text-white" />
                </motion.div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-full shadow-xl font-semibold text-sm whitespace-nowrap"
                >
                  <Mic className="w-4 h-4 inline mr-1" />
                  Voice Notes
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Phone 3 - Calendar */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -20 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: -10 } : { opacity: 0, x: 100, rotateY: -20 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ rotateY: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-400 opacity-20 blur-3xl rounded-[3rem] scale-105" />
                
                {/* Phone */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <img 
                      src={calendarImg} 
                      alt="Calendar View"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Floating stats */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-500 text-white p-4 rounded-3xl shadow-2xl text-center"
                >
                  <TrendingUp className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-xs font-bold">Trending Up</div>
                </motion.div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-2 rounded-full shadow-xl font-semibold text-sm whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Mood Calendar
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {trackingMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-20 blur-2xl rounded-3xl transition-opacity duration-500`} />
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{method.title}</h3>
                <p className="text-gray-300 leading-relaxed">{method.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: Target, label: '40+ Emotions', value: 'Tracked' },
            { icon: Zap, label: '< 2 seconds', value: 'Analysis' },
            { icon: TrendingUp, label: '95%', value: 'Accuracy' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
