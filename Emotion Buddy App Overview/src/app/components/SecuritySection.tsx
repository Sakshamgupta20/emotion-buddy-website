import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Lock, Eye, Server, CheckCircle } from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'Your journal entries are encrypted with AES-256 before they leave your device'
  },
  {
    icon: Eye,
    title: 'Privacy First',
    description: 'We can\'t read your entries. Only you have the keys to decrypt your thoughts'
  },
  {
    icon: Server,
    title: 'GDPR Compliant',
    description: 'Full data export, right to deletion, and transparent data handling'
  },
  {
    icon: CheckCircle,
    title: 'No Ads, Ever',
    description: 'Your data is never sold. We make money from subscriptions, not your privacy'
  }
];

export function SecuritySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
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
            className="inline-block mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50"
              />
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Your Privacy is Sacred
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            We built Emotion Buddy with security at its core. Your most personal thoughts
            deserve the highest level of protection.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 h-full hover:border-blue-400/50 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-200 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical specs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Security Standards</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'AES-256 Encryption', value: '🔐' },
              { label: 'Argon2 Hashing', value: '🛡️' },
              { label: 'JWT Authentication', value: '🔑' },
              { label: 'HTTPS Only', value: '✅' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="text-4xl mb-3">{item.value}</div>
                <div className="text-blue-200 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex justify-center items-center gap-8 flex-wrap"
        >
          {['SOC 2 Compliant', 'GDPR Ready', 'HIPAA Aligned', 'ISO 27001'].map((badge, i) => (
            <div key={i} className="px-6 py-3 bg-white/10 rounded-full text-sm font-semibold border border-white/20">
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
