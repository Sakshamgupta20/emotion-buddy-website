'use client'

import { useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  Mic, MessageCircle, TrendingUp, Shield, Zap, Star,
  Cloud, Sparkles, Download, Crown, X, Check
} from 'lucide-react'

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-24 pb-16 overflow-x-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 mb-6 md:mb-8"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-xs md:text-sm font-semibold text-purple-900">AI-Powered Emotional Wellness</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
            >
              Your Journey to
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 pb-2">
                Self-Discovery
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Transform your mental wellness with AI-powered insights, empathetic chat support,
              and beautiful visualizations. Start each day mindfully with your Emotion Buddy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 md:mb-12"
            >
              <a href="https://app.emotionbuddy.ai/" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 md:px-8 py-4 md:py-5 text-base md:text-lg rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Try Emotion Buddy
                </motion.button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8 md:gap-12 justify-center lg:justify-start"
            >
              {[
                { value: '10M+', label: 'Journal Entries' },
                { value: '4.9★', label: 'App Rating' }
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-[240px] sm:w-[280px] lg:w-[320px]"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-30 blur-3xl scale-110 rounded-[3rem]" />

                {/* Phone frame */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2.5 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <Image
                      src="/images/app-screenshots/345ba0ceb2f98fb321631b606c595d917b39c3e4.png"
                      alt="Home Screen"
                      width={320}
                      height={693}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-xs md:text-sm text-gray-500 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-gray-600 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// ============================================================================
// FEATURES SECTION (Clean Marketing Version)
// ============================================================================
function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const features = [
    {
      icon: MessageCircle,
      title: 'AI-Powered Chat',
      description: 'Talk to an empathetic AI that understands your emotions and helps you process your thoughts.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Mood Analytics',
      description: 'Beautiful visualizations that reveal patterns in your emotional journey over time.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mic,
      title: 'Voice Journaling',
      description: 'Speak your thoughts freely. AI transcribes and analyzes your voice entries instantly.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Private & Secure',
      description: 'End-to-end encryption. Your thoughts stay yours. Delete anytime with one tap.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section ref={ref} id="features" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Everything you need to understand yourself better
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Simple tools, powerful insights. Start your journey to emotional wellness today.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 h-full">
                <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Features Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-lg transition-colors"
          >
            See all features
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// PRICING SECTION
// ============================================================================
function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
        { text: 'Morning follow-ups', included: true },
        { text: 'Advanced insights & trends', included: true },
        { text: 'Priority support', included: true },
        { text: 'Export data anytime', included: true }
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
        { text: 'Advanced insights & trends', included: true },
        { text: 'VIP support', included: true },
        { text: 'Early access to features', included: true }
      ]
    }
  ]

  return (
    <section ref={ref} id="pricing" className="py-20 md:py-32 bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 text-white overflow-hidden relative">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
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

          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base md:text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed px-4">
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
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5`} />

                <div className="relative p-6 md:p-8 flex flex-col h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl`}>
                    <plan.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-purple-200 text-sm mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="text-purple-300 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 flex-1 mb-8">
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
                        <span className={`text-sm leading-relaxed ${
                          feature.included ? 'text-purple-100' : 'text-purple-300/50'
                        }`}>
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>

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
  )
}

// ============================================================================
// FINAL CTA SECTION
// ============================================================================
function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} id="download" className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100" />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-40"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Stars rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-2 mb-6"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <Star className="w-6 h-6 md:w-8 md:h-8 fill-yellow-400 text-yellow-400" />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base text-gray-600 mb-8 md:mb-12"
        >
          Rated 4.9/5 on the App Store
        </motion.p>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
        >
          Start Your Journey Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto px-4"
        >
          Join thousands who&apos;ve transformed their emotional well-being.
          Available on web, iOS, and Android.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12"
        >
          <a
            href="https://app.emotionbuddy.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 md:px-12 py-5 md:py-7 text-base md:text-xl rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center gap-2"
            >
              <Download className="w-5 h-5 md:w-6 md:h-6" />
              Try Emotion Buddy
            </motion.button>
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-600 mb-12 md:mb-16"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>Free to start</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>100% private & secure</span>
          </div>
        </motion.div>

        {/* App badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="https://apps.apple.com/us/app/emotion-buddy/id6755134472"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-5 md:px-6 py-3 bg-black text-white rounded-xl font-semibold items-center gap-3 cursor-pointer hover:scale-105 transition-transform shadow-lg"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">Download on the</div>
              <div className="text-sm md:text-base">App Store</div>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.emotionbuddy.mobile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-5 md:px-6 py-3 bg-black text-white rounded-xl font-semibold items-center gap-3 cursor-pointer hover:scale-105 transition-transform shadow-lg"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">Get it on</div>
              <div className="text-sm md:text-base">Google Play</div>
            </div>
          </a>
          <a
            href="https://app.emotionbuddy.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-5 md:px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold items-center gap-3 cursor-pointer hover:scale-105 transition-transform shadow-lg"
          >
            <Cloud className="w-6 h-6 md:w-7 md:h-7" />
            <div className="text-left">
              <div className="text-xs opacity-80">Open in</div>
              <div className="text-sm md:text-base">Web Browser</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// BLOG SECTION
// ============================================================================
function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            From Our Blog
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Insights on emotional wellness, mental health tips, and journaling techniques.
          </p>
        </motion.div>

        {/* Featured Article Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/blog/how-to-journal-with-ai-chat" className="group block">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
              {/* Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src="/images/app-screenshots/journaling-hero.png"
                  alt="AI Chat Journaling"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    New Article
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    Journaling Guide
                  </span>
                  <span className="text-sm text-gray-500">8 min read</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  How to Journal with AI Chat
                </h3>
                <p className="text-gray-600 mb-6">
                  Discover how AI chat journaling removes the barriers of traditional journaling. No blank page anxiety, just natural conversations that help you understand your emotions better.
                </p>
                <span className="text-purple-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-lg transition-colors"
          >
            View All Articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-white">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <BlogSection />
        <PricingSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  )
}
