import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Check, Sparkles, Crown, Zap, X } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/forever',
    icon: Zap,
    gradient: 'from-gray-400 to-gray-600',
    description: 'Basic journaling with limited AI features',
    features: [
      { text: 'Unlimited journal entries', included: true },
      { text: '3 AI analyses per day', included: true },
      { text: '10 chat messages per day', included: true },
      { text: '10 voice notes per month', included: true },
      { text: '15 image attachments per month', included: true },
      { text: 'Basic emotion tracking', included: true },
      { text: 'End-to-end encryption', included: true },
      { text: 'Morning follow-ups', included: false },
      { text: 'Advanced insights', included: false }
    ]
  },
  {
    name: 'Pro',
    price: '$5',
    period: '/month',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500',
    description: 'Unlock the full power of AI-assisted self-reflection',
    featured: true,
    badge: 'Most Popular',
    features: [
      { text: 'Everything in Free', included: true },
      { text: 'Unlimited AI analyses', included: true },
      { text: '50 chat messages per day', included: true },
      { text: '30 voice notes per month', included: true },
      { text: '50 image attachments per month', included: true },
      { text: 'Morning follow-ups', included: true },
      { text: 'Advanced insights & trends', included: true },
      { text: 'Priority support', included: true }
    ]
  },
  {
    name: 'Premium',
    price: '$10',
    period: '/month',
    icon: Crown,
    gradient: 'from-orange-500 to-red-500',
    description: 'Everything unlimited for power users',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Unlimited AI analyses', included: true },
      { text: 'Unlimited chat messages', included: true },
      { text: 'Unlimited voice notes', included: true },
      { text: 'Unlimited image attachments', included: true },
      { text: 'Morning follow-ups', included: true },
      { text: 'Advanced insights & trends', included: true },
      { text: 'VIP support', included: true }
    ]
  }
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 text-white overflow-hidden relative">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-2xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed px-4">
            Start free and unlock more insights as you grow. All plans include 
            end-to-end encryption and privacy-first features.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative ${plan.featured ? 'md:-mt-4' : ''}`}
            >
              {/* Featured badge */}
              {plan.badge && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-bold shadow-2xl whitespace-nowrap">
                    {plan.badge}
                  </div>
                </motion.div>
              )}

              {/* Card */}
              <div className={`relative bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl overflow-hidden border-2 ${
                plan.featured 
                  ? 'border-purple-400 shadow-2xl shadow-purple-500/30' 
                  : 'border-white/10'
              } h-full flex flex-col`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5`} />

                <div className="relative p-6 md:p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-2xl`}>
                    <plan.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>

                  {/* Plan info */}
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-purple-200 text-xs md:text-sm mb-4 md:mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6 md:mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                      <span className="text-purple-300 ml-2 text-sm md:text-base">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 md:space-y-4 flex-1 mb-6 md:mb-8">
                    {plan.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.15 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          feature.included 
                            ? `bg-gradient-to-br ${plan.gradient}` 
                            : 'bg-white/10'
                        }`}>
                          {feature.included ? (
                            <Check className="w-3 h-3 text-white" />
                          ) : (
                            <X className="w-3 h-3 text-white/50" />
                          )}
                        </div>
                        <span className={`text-xs md:text-sm leading-relaxed ${
                          feature.included ? 'text-purple-100' : 'text-purple-300/50'
                        }`}>
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Info text */}
                  <p className="text-xs text-purple-300 text-center">
                    {plan.name === 'Free' ? 'Always free, no credit card required' : 'Available in mobile app'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1 }}
          className="text-center space-y-4 px-4"
        >
          <p className="text-purple-300 text-sm md:text-base">
            All plans include bank-level encryption and can be cancelled anytime
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-purple-200">7-day free trial for Pro</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-purple-200">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-purple-200">Money-back guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
