import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import journalEntryImg from 'figma:asset/b61d215a7f59b167cbc0fdef148369cb0fc7147e.png';
import { Pencil, Mic, Image, Lock, Sparkles, Zap, Shield } from 'lucide-react';

const journalMethods = [
  {
    icon: Pencil,
    title: 'Write',
    description: 'Traditional journaling with rich text',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Mic,
    title: 'Speak',
    description: 'Voice notes with AI transcription',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Image,
    title: 'Capture',
    description: 'Image journaling with descriptions',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Zap,
    title: 'Quick Check-in',
    description: 'Fast mood logging in seconds',
    color: 'from-green-500 to-emerald-500'
  }
];

const securityFeatures = [
  { icon: Lock, text: 'End-to-end encryption' },
  { icon: Shield, text: 'AES-256 security' },
  { icon: Sparkles, text: 'Privacy-first design' }
];

export function JournalFeature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Phone & Security */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Main phone */}
              <motion.div
                animate={isInView ? { y: [0, -20, 0] } : {}}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 opacity-20 blur-3xl rounded-[3rem]" />
                
                {/* Phone frame */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <img 
                      src={journalEntryImg} 
                      alt="Journal Entry"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating security badges */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -left-8 top-1/4 space-y-3"
              >
                {securityFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                    whileHover={{ scale: 1.1, x: -5 }}
                    className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl border border-gray-200"
                  >
                    <feature.icon className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-800">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Streak badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                className="absolute -right-8 bottom-1/4"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="bg-gradient-to-br from-orange-400 to-red-500 text-white p-6 rounded-3xl shadow-2xl text-center"
                >
                  <div className="text-4xl font-bold mb-1">96</div>
                  <div className="text-xs font-medium opacity-90">Day Streak</div>
                  <div className="mt-2">🔥</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-sm font-bold uppercase tracking-wider mb-3 text-blue-600">
                Express Yourself
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Journal Your Way
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 mb-10 leading-relaxed"
            >
              Whether you prefer typing, speaking, or capturing moments with images—
              Emotion Buddy adapts to your style. Every entry is encrypted and analyzed
              to give you meaningful insights.
            </motion.p>

            {/* Journal Methods Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {journalMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  {/* Glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500`} />
                  
                  <div className="relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-transparent hover:shadow-xl transition-all">
                    <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{method.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-4"
            >
              {[
                'AI-generated follow-up questions for deeper reflection',
                'Automatic emotion detection and tagging',
                'Save chat conversations as journal entries',
                '30-day recovery for deleted entries'
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mt-0.5">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
