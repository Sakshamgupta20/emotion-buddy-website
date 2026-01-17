'use client'

import { useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import {
  Mic, MessageCircle, TrendingUp, Heart,
  Shield, Zap, Brain, Star,
  Lock, Cloud, Eye, Server, CheckCircle,
  Sparkles, Download, Calendar, Smile,
  Target, BarChart3, Tag, Crown, X, Check
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
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
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
              <a href="#download">
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
// AI CHAT FEATURE SECTION
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
    <section ref={ref} id="features" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
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
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all"
          >
            Try AI Chat Now
          </motion.a>
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
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden relative">
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
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
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

              {/* Sample Data Banner */}
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-3 sm:p-4 mb-6 flex items-start gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800">
                  This is sample data. Select your mood when journaling to see your own alignment!
                </p>
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

                {/* Scale */}
                <div className="flex justify-between text-xs text-gray-400 px-1">
                  <span>0</span><span>2.5</span><span>5.0</span><span>7.5</span><span>10</span>
                </div>
              </div>

              {/* Divergence Warning */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 sm:p-4 mb-6 flex items-start gap-3">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-amber-900">2 entries with significant divergence detected</p>
              </div>

              {/* Detected Patterns */}
              <div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4">Detected Patterns</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 rounded-full flex-shrink-0 mt-1.5" />
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Resilience</h5>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">You tend to recover well from difficult emotions and maintain a positive outlook.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 rounded-full flex-shrink-0 mt-1.5" />
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Self awareness</h5>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Your self-reported mood aligns well with emotional patterns detected in your writing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Title below card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 sm:mt-8 text-center"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Mood Alignment Analysis</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4">
                Compare your self-perception with AI-detected emotions. Build better self-awareness by understanding the gap between how you feel and what your writing reveals.
              </p>
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

              {/* Quick Stats Section */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-lg sm:text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Quick Stats</h4>
                    <p className="text-xs text-gray-500">Key metrics at a glance</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {/* Health Trend */}
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-emerald-100">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Health Trend</span>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">--</div>
                  </div>

                  {/* Avg Valence */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-blue-100">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-400 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Avg Valence</span>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">--</div>
                  </div>

                  {/* Crisis Events */}
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-emerald-100">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Crisis E...</span>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">0</div>
                    <div className="text-xs text-gray-500">last 7 d...</div>
                  </div>
                </div>
              </div>

              {/* Mood Trends */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <span className="text-lg sm:text-xl">📊</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Mood Trends</h4>
                    <p className="text-xs text-gray-500">How your mood has changed over time</p>
                  </div>
                </div>

                {/* Sample Data Banner */}
                <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-3 sm:p-4 mb-4 flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    This is sample data to show what your emotional journey will look like. Start journaling to see your own trends!
                  </p>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full" />
                    <span className="text-xs text-gray-600">Valence (Mood)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full" />
                    <span className="text-xs text-gray-600">Intensity</span>
                  </div>
                </div>

                {/* Chart */}
                <div className="relative h-36 sm:h-48 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-4 border border-gray-200">
                  {/* Y-axis labels */}
                  <div className="absolute left-2 top-3 sm:top-4 bottom-3 sm:bottom-4 flex flex-col justify-between text-xs text-gray-400">
                    <span>10</span><span>8</span><span>6</span><span>4</span>
                  </div>

                  {/* Chart Area */}
                  <svg className="w-full h-full pl-5 sm:pl-6" viewBox="0 0 380 180" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="valenceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.05" />
                      </linearGradient>
                      <linearGradient id="intensityGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fb923c" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#fb923c" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <path d="M 0 90 Q 95 50, 190 70 T 380 80 L 380 180 L 0 180 Z" fill="url(#intensityGrad)" />
                    <path d="M 0 100 Q 95 80, 190 90 T 380 70 L 380 180 L 0 180 Z" fill="url(#valenceGrad)" />
                    <path d="M 0 90 Q 95 50, 190 70 T 380 80" fill="none" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" />
                    <path d="M 0 100 Q 95 80, 190 90 T 380 70" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Title below card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 sm:mt-8 text-center"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Comprehensive Dashboard</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4">
                Track your emotional well-being over time with beautiful area charts, health metrics, and valence trends. See your growth at a glance.
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
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all"
          >
            Explore Analytics
          </motion.a>
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
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 overflow-hidden">
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
          className="max-w-4xl mx-auto mb-20"
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
                  { text: 'Confusion', color: 'text-red-400', size: 'text-base sm:text-lg' },
                  { text: 'Hope', color: 'text-green-500', size: 'text-sm sm:text-base' },
                  { text: 'Reflection', color: 'text-yellow-500', size: 'text-sm sm:text-base' },
                  { text: 'Expression', color: 'text-purple-500', size: 'text-sm sm:text-base' },
                  { text: 'Connection Struggle', color: 'text-cyan-500', size: 'text-sm' },
                  { text: 'Memory', color: 'text-gray-500', size: 'text-sm' },
                  { text: 'Challenge', color: 'text-green-400', size: 'text-xs sm:text-sm' },
                  { text: 'Stress', color: 'text-orange-300', size: 'text-xs sm:text-sm' },
                  { text: 'Self Care Routine', color: 'text-teal-400', size: 'text-xs sm:text-sm' },
                  { text: 'Family', color: 'text-blue-400', size: 'text-xs sm:text-sm font-semibold' },
                  { text: 'Self-expression', color: 'text-pink-400', size: 'text-xs sm:text-sm' },
                ].map((tag, i) => (
                  <span key={i} className={`${tag.color} ${tag.size}`}>{tag.text}</span>
                ))}
              </div>
            </div>

            {/* Life Contexts */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Life Contexts</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  { name: 'Money', count: 9, percent: '39%' },
                  { name: 'Learning', count: 5, percent: '22%' },
                  { name: 'Personal', count: 3, percent: '13%' },
                  { name: 'Health', count: 2, percent: '9%' },
                  { name: 'Home', count: 1, percent: '4%' },
                ].map((ctx, i) => (
                  <div key={i} className="bg-gray-100 rounded-full px-4 py-2 text-sm">
                    <span className="font-semibold text-gray-900">{ctx.name}</span>
                    <span className="text-gray-500 ml-1">{ctx.count} ({ctx.percent})</span>
                  </div>
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
                  { theme: 'Relationships', count: 7, width: '41%' },
                  { theme: 'Confusion', count: 6, width: '35%' },
                  { theme: 'Hope', count: 6, width: '35%' },
                  { theme: 'Reflection', count: 6, width: '35%' },
                  { theme: 'Expression', count: 5, width: '29%' },
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-3xl p-8 shadow-2xl border-2 border-orange-100">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Start discovering your patterns today
              </h3>
              <p className="text-gray-600">
                Every journal entry reveals new insights about yourself
              </p>
            </div>
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-orange-500/50 transition-all whitespace-nowrap"
            >
              Get Started Free
            </motion.a>
          </div>
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
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50"
              />
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Your Privacy is Sacred
          </h2>
          <p className="text-base md:text-xl text-blue-200 max-w-3xl mx-auto px-4">
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
// MAIN PAGE COMPONENT
// ============================================================================
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-white">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <ChatFeatureSection />
        <MoodTrackingSection />
        <AnalyticsSection />
        <InsightsSection />
        <PricingSection />
        <SecuritySection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  )
}
