'use client'

import { useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  Mic, MessageCircle, TrendingUp, Heart,
  Shield, Zap, Brain, Star,
  Lock, Cloud, Eye, Server, CheckCircle,
  Sparkles, Download, Calendar, Smile,
  Target, BarChart3, Tag, ArrowRight
} from 'lucide-react'

// ============================================================================
// CHAT FEATURE SECTION
// ============================================================================
function ChatFeatureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
  ]

  return (
    <section ref={ref} id="chat" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl">
              <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-gray-900">
            Your AI Companion
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Chat with an empathetic AI that truly understands your journey. Get insights,
            find patterns, and receive thoughtful support whenever you need it.
          </p>
        </motion.div>

        {/* 3-Phone Layout with Actual Screenshots */}
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
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 opacity-20 blur-3xl rounded-[3rem] scale-105" />

                {/* Phone */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl max-w-sm mx-auto">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <Image
                      src="/images/app-screenshots/c3f4d894bfdcf7f9121b1da9a16f1f6ee1e41c1c.png"
                      alt="Start Chat"
                      width={320}
                      height={693}
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
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-30 blur-3xl rounded-[3rem] scale-110" />

                {/* Phone */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl max-w-sm mx-auto">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <Image
                      src="/images/app-screenshots/e9036958c32def3e90ad2f72909ba6b6f057b8ee.png"
                      alt="AI Insights"
                      width={320}
                      height={693}
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
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 opacity-20 blur-3xl rounded-[3rem] scale-105" />

                {/* Phone */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl max-w-sm mx-auto">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <Image
                      src="/images/app-screenshots/619c5f289840d540e38d346f45677041beb24da3.png"
                      alt="Deep Conversation"
                      width={320}
                      height={693}
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
      </div>
    </section>
  )
}

// ============================================================================
// MOOD TRACKING SECTION
// ============================================================================
function MoodTrackingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
  ]

  return (
    <section ref={ref} id="mood-tracking" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden relative">
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
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl">
              <Smile className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-white">
            Track Your Emotions
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Multiple ways to capture your mood—from quick check-ins to voice notes.
            Watch your emotional landscape come to life with beautiful visualizations.
          </p>
        </motion.div>

        {/* 3-Phone Showcase with Actual Screenshots */}
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
                    <Image
                      src="/images/app-screenshots/0e2d44c40d375c1e637532efc767f1db50fc0b7e.png"
                      alt="Mood Check"
                      width={320}
                      height={693}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-5 py-2 rounded-full shadow-xl font-semibold text-sm whitespace-nowrap flex items-center gap-2"
                >
                  <Smile className="w-4 h-4" />
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
                    <Image
                      src="/images/app-screenshots/b1b214167a0c4f2c0aec550741c1e6e7d8c2f3bb.png"
                      alt="Voice Recording"
                      width={320}
                      height={693}
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
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-full shadow-xl font-semibold text-sm whitespace-nowrap flex items-center gap-2"
                >
                  <Mic className="w-4 h-4" />
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
                    <Image
                      src="/images/app-screenshots/b1acfb52ae6f24673a3ede24bd84a6a9aaccf73b.png"
                      alt="Calendar View"
                      width={320}
                      height={693}
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
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-2 rounded-full shadow-xl font-semibold text-sm whitespace-nowrap flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
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
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
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
  )
}

// ============================================================================
// ANALYTICS SECTION
// ============================================================================
function AnalyticsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
  ]

  return (
    <section ref={ref} id="analytics" className="py-20 md:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl">
              <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-gray-900">
            Advanced Analytics
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Go beyond basic mood tracking. Discover deep insights about your emotional
            intelligence, self-awareness, and personal growth patterns.
          </p>
        </motion.div>

        {/* Interactive Demos - Card-based UI */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Mood Alignment Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 border border-gray-200"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Mood Alignment</h3>
                  <p className="text-xs sm:text-sm text-gray-500">Your perception vs AI analysis</p>
                </div>
              </div>

              {/* Alignment Score */}
              <div className="flex items-center gap-4 sm:gap-6 mb-8">
                <div className="relative">
                  <svg className="w-20 h-20 sm:w-28 sm:h-28 transform -rotate-90">
                    <circle cx="50%" cy="50%" r="40%" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                    <circle cx="50%" cy="50%" r="40%" stroke="url(#alignGradient)" strokeWidth="12" fill="none" strokeLinecap="round" strokeDasharray="267 314" />
                    <defs>
                      <linearGradient id="alignGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl sm:text-3xl font-bold text-emerald-600">85%</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Great Alignment</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Your mood matches AI analysis well</p>
                </div>
              </div>

              {/* Mood Comparison */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900">Mood Comparison</h4>
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-emerald-600">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>0.4 pt diff</span>
                  </div>
                </div>

                {/* Your Mood */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs">👤</span>
                      </div>
                      <span className="font-semibold text-gray-900 text-sm sm:text-base">Your Mood</span>
                    </div>
                    <span className="text-lg sm:text-xl font-bold text-gray-900">7.2</span>
                  </div>
                  <div className="h-2.5 sm:h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full" style={{ width: '72%' }} />
                  </div>
                </div>

                {/* AI Detected */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                      </div>
                      <span className="font-semibold text-gray-900 text-sm sm:text-base">AI Detected</span>
                    </div>
                    <span className="text-lg sm:text-xl font-bold text-gray-900">6.8</span>
                  </div>
                  <div className="h-2.5 sm:h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full" style={{ width: '68%' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Insights Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 border border-gray-200"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Insights</h3>
                  <p className="text-xs sm:text-sm text-gray-500">Your emotional well-being dashboard</p>
                </div>
              </div>

              {/* Time Period Tabs */}
              <div className="flex gap-2 mb-6">
                {['7D', '30D', '90D', '1Y'].map((period, index) => (
                  <button
                    key={period}
                    className={`flex-1 py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                      index === 1 ? 'bg-blue-400 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-emerald-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-600">Health Trend</span>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">↑</div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-blue-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-400 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-600">Avg Valence</span>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">7.2</div>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-emerald-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-600">Crisis Events</span>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">0</div>
                </div>
              </div>

              {/* Chart placeholder */}
              <div className="relative h-36 sm:h-48 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-4 border border-gray-200">
                <svg className="w-full h-full" viewBox="0 0 380 180" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="valenceGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 100 Q 95 80, 190 90 T 380 70 L 380 180 L 0 180 Z" fill="url(#valenceGrad2)" />
                  <path d="M 0 100 Q 95 80, 190 90 T 380 70" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
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
      </div>
    </section>
  )
}

// ============================================================================
// INSIGHTS SECTION
// ============================================================================
function InsightsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} id="insights" className="py-20 md:py-32 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl">
              <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-gray-900">
            Discover Your Patterns
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Transform your journal entries into actionable insights. See what topics
            dominate your thoughts and how your emotions evolve over time.
          </p>
        </motion.div>

        {/* Topics & Themes Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.01, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-200"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Tag className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Topics & Themes</h3>
                <p className="text-sm text-gray-500">What you&apos;ve been journaling about</p>
              </div>
            </div>

            {/* Tag Cloud */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 mb-6">
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                {[
                  { text: 'Loneliness', color: 'text-red-500', size: 'text-xl sm:text-2xl font-bold' },
                  { text: 'Uncertainty', color: 'text-orange-400', size: 'text-lg sm:text-xl' },
                  { text: 'Connection', color: 'text-blue-500', size: 'text-lg sm:text-xl' },
                  { text: 'Relationships', color: 'text-gray-700', size: 'text-base sm:text-lg font-semibold' },
                  { text: 'Hope', color: 'text-green-500', size: 'text-sm sm:text-base' },
                  { text: 'Reflection', color: 'text-yellow-500', size: 'text-sm sm:text-base' },
                  { text: 'Expression', color: 'text-purple-500', size: 'text-sm sm:text-base' },
                ].map((tag, i) => (
                  <span key={i} className={`${tag.color} ${tag.size}`}>{tag.text}</span>
                ))}
              </div>
            </div>

            {/* Theme Frequency */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Theme Frequency</h4>
              <div className="space-y-4">
                {[
                  { theme: 'Loneliness', count: 17, width: '100%' },
                  { theme: 'Uncertainty', count: 11, width: '65%' },
                  { theme: 'Connection', count: 9, width: '53%' },
                  { theme: 'Hope', count: 6, width: '35%' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-900 text-sm sm:text-base">{item.theme}</span>
                      <span className="text-gray-500 text-sm">{item.count} times</span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: item.width } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        className="h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// SECURITY SECTION
// ============================================================================
function SecuritySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
  ]

  return (
    <section ref={ref} id="security" className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
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
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-blue-500/30 rounded-3xl blur-2xl"
              />
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl flex items-center justify-center shadow-2xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
            Your Privacy, Protected
          </h2>
          <p className="text-base md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed px-4">
            Your journal is your most private space. We use bank-level encryption
            and zero-knowledge architecture to keep your thoughts safe.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:border-blue-400/50 transition-all h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-3xl transition-all" />

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-blue-200 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Link href="/privacy">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-all border border-white/20 cursor-pointer"
            >
              Read our Privacy Policy
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4 text-gray-900"
            >
              Features
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              Discover all the powerful tools Emotion Buddy offers for your emotional wellness journey.
            </motion.p>

            {/* Quick nav */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {[
                { name: 'AI Chat', href: '#chat', icon: MessageCircle },
                { name: 'Mood Tracking', href: '#mood-tracking', icon: Smile },
                { name: 'Analytics', href: '#analytics', icon: BarChart3 },
                { name: 'Insights', href: '#insights', icon: Tag },
                { name: 'Security', href: '#security', icon: Shield },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-purple-600"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{item.name}</span>
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        <ChatFeatureSection />
        <MoodTrackingSection />
        <AnalyticsSection />
        <InsightsSection />
        <SecuritySection />

        {/* Final CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Ready to start your journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-purple-100 mb-8"
            >
              Join thousands of users improving their emotional wellness every day.
            </motion.p>
            <motion.a
              href="https://app.emotionbuddy.ai/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all"
            >
              <Download className="w-5 h-5" />
              Try Emotion Buddy Free
            </motion.a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
