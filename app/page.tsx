'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useRef } from 'react'
import {
  Mic, MessageCircle, TrendingUp, Heart, Apple,
  Smartphone, Shield, Zap, Brain, Star,
  ChevronDown, Check, ArrowRight, Play,
  Lock, Cloud, Smartphone as Phone
} from 'lucide-react'

export default function Home() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  const features = [
    {
      icon: Mic,
      title: 'Voice & Text Journaling',
      description: 'Express yourself freely through voice recordings or text. Your private space to reflect and grow.',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: MessageCircle,
      title: 'AI Chat Companion',
      description: 'Have meaningful conversations with your AI companion. Get supportive, empathetic responses 24/7.',
      gradient: 'from-fuchsia-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: '12+ visualization types. Track emotional patterns, identify triggers, and celebrate your growth.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Discover patterns you never knew existed. Get personalized recommendations for your well-being.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'AES-256 encryption, biometric authentication. Your thoughts stay yours, always.',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Zap,
      title: 'Instant Mood Capture',
      description: 'Log your mood in seconds. Beautiful, intuitive interface designed for daily use.',
      gradient: 'from-amber-500 to-yellow-500'
    }
  ]

  const testimonials = [
    {
      quote: "Emotion Buddy has completely transformed how I understand my emotions. The AI insights are incredibly accurate.",
      author: "Sarah M.",
      role: "Therapist",
      rating: 5
    },
    {
      quote: "Finally, an app that takes privacy seriously. I feel safe sharing my deepest thoughts here.",
      author: "Michael R.",
      role: "Software Engineer",
      rating: 5
    },
    {
      quote: "The voice journaling feature is a game-changer. I can process my thoughts while walking or commuting.",
      author: "Emily K.",
      role: "Marketing Director",
      rating: 5
    }
  ]

  const faqs = [
    {
      question: "Is my data really private?",
      answer: "Absolutely. We use AES-256 encryption, the same standard used by banks. Your journal entries are encrypted on your device before being stored. We cannot read your data - only you can."
    },
    {
      question: "How does the AI work?",
      answer: "Our AI analyzes patterns in your journal entries to provide insights about your emotional health. It's trained to be supportive and empathetic, never judgmental. All processing respects your privacy."
    },
    {
      question: "Can I export my data?",
      answer: "Yes! You own your data. Export your entire journal history anytime in multiple formats including PDF, JSON, and plain text."
    },
    {
      question: "Is there a free version?",
      answer: "Yes! Emotion Buddy offers a generous free tier with unlimited journaling, basic mood tracking, and core features. Premium unlocks advanced analytics, AI insights, and priority support."
    }
  ]

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Gradient Orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-violet-400/20 rounded-full blur-[80px] md:blur-[120px]"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-fuchsia-400/20 rounded-full blur-[80px] md:blur-[120px]"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -30, 0],
                y: [0, 50, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] bg-cyan-400/15 rounded-full blur-[100px] md:blur-[150px]"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -50, 0],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
          </div>

          <motion.div
            style={{ opacity, scale, y }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-600">Now available on iOS & Android</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </motion.div>

            {/* Logo */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-28 h-28 flex items-center justify-center relative"
                >
                  <Image
                    src="/images/logo.png"
                    alt="Emotion Buddy Logo"
                    width={112}
                    height={112}
                    className="w-full h-full object-contain drop-shadow-xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-400/30 to-fuchsia-400/30 rounded-3xl blur-2xl -z-10" />
                </motion.div>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-gray-900">Understand Your</span>
              <span className="block gradient-text">Emotions Better</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The AI-powered journaling companion that helps you track moods,
              discover patterns, and transform your mental wellness journey.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="https://apps.apple.com/us/app/emotion-buddy/id6755134472"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </motion.a>

              <motion.a
                href="https://play.google.com/store/apps/details?id=com.emotionbuddy.mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-0 right-0 flex justify-center z-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-16 lg:py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 md:mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-violet-100 border border-violet-200 text-violet-600 text-xs md:text-sm font-medium mb-4 md:mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                Features
              </motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
                <span className="text-gray-900">Everything you need to</span>
                <br />
                <span className="gradient-text">understand yourself</span>
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Professional-grade tools designed for meaningful self-discovery and emotional growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="glass-card p-5 md:p-8 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <motion.div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 md:mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900 group-hover:gradient-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* App Preview Section */}
        <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-100/50 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-fuchsia-100 border border-fuchsia-200 text-fuchsia-600 text-sm font-medium mb-6">
                  Privacy First
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Your thoughts stay
                  <span className="gradient-text"> yours</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-900 mb-8 leading-relaxed">
                  We believe your innermost thoughts deserve the highest level of protection.
                  That&apos;s why we built Emotion Buddy with privacy at its core.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Lock, text: "AES-256 End-to-end encryption" },
                    { icon: Phone, text: "Biometric authentication support" },
                    { icon: Cloud, text: "Zero-knowledge architecture" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-violet-200 shadow-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-md">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-900 font-semibold text-lg">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative hidden lg:block"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative mx-auto w-64 h-[520px] lg:w-72 lg:h-[580px]">
                  {/* Phone Mockup */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl shadow-violet-500/20 border border-gray-700">
                    <div className="absolute top-3 lg:top-4 left-1/2 -translate-x-1/2 w-20 lg:w-24 h-5 lg:h-6 bg-black rounded-full" />
                    <div className="absolute inset-3 lg:inset-4 rounded-[2rem] lg:rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden">
                      {/* App Screen Content */}
                      <div className="p-4 lg:p-6 h-full flex flex-col">
                        <div className="text-center mb-4 lg:mb-6">
                          <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-2 lg:mb-3 rounded-xl lg:rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                            <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                          </div>
                          <h4 className="text-white font-semibold text-sm lg:text-base">How are you feeling?</h4>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 lg:gap-2 mb-4 lg:mb-6">
                          {['😊', '😌', '😔', '😤', '😰', '🥰'].map((emoji, i) => (
                            <motion.div
                              key={i}
                              className="aspect-square rounded-lg lg:rounded-xl bg-white/5 flex items-center justify-center text-xl lg:text-2xl hover:bg-white/10 cursor-pointer"
                              whileHover={{ scale: 1.1 }}
                            >
                              {emoji}
                            </motion.div>
                          ))}
                        </div>
                        <div className="flex-1 rounded-xl lg:rounded-2xl bg-white/5 p-3 lg:p-4">
                          <div className="h-2 w-3/4 bg-white/10 rounded mb-2" />
                          <div className="h-2 w-1/2 bg-white/10 rounded mb-3 lg:mb-4" />
                          <div className="h-16 lg:h-20 w-full bg-white/5 rounded-lg lg:rounded-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 rounded-[2.5rem] lg:rounded-[3rem] blur-3xl -z-10" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-16 lg:py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10 md:mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-600 text-xs md:text-sm font-medium mb-4 md:mb-6">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Loved by users
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-5 md:p-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex gap-1 mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.author}</div>
                    <div className="text-xs md:text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 lg:py-20 relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10 md:mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 text-xs md:text-sm font-medium mb-4 md:mb-6">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Common questions
              </h2>
            </motion.div>

            <div className="space-y-3 md:space-y-4">
              {faqs.map((faq, index) => (
                <motion.details
                  key={index}
                  className="glass-card group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none">
                    <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-4 pb-4 md:px-6 md:pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-12 md:py-16 lg:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-100/30 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* iOS Card */}
              <motion.div
                className="glass-card p-6 md:p-10 relative overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-400/20 to-transparent rounded-full blur-2xl" />

                <div className="relative">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-violet-500/30">
                    <Apple className="w-7 h-7 md:w-9 md:h-9 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">iOS App</h3>
                  <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                    Available for iPhone and iPad. Requires iOS 14.0 or later.
                  </p>
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {['Optimized for all iPhone models', 'iPad support with adaptive layout', 'Face ID / Touch ID security'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 md:gap-3 text-gray-700 text-sm md:text-base">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-violet-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href="https://apps.apple.com/us/app/emotion-buddy/id6755134472"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-6 font-semibold transition-all shadow-lg shadow-violet-500/30 flex items-center justify-center gap-2 text-sm md:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Apple className="w-5 h-5" />
                    Download on App Store
                  </motion.a>
                </div>
              </motion.div>

              {/* Android Card */}
              <motion.div
                className="glass-card p-6 md:p-10 relative overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-2xl" />

                <div className="relative">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-cyan-500/30">
                    <Smartphone className="w-7 h-7 md:w-9 md:h-9 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Android App</h3>
                  <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                    Available for Android devices. Requires Android 8.0 or later.
                  </p>
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {['Material Design 3 interface', 'Tablet & phone support', 'Fingerprint authentication'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 md:gap-3 text-gray-700 text-sm md:text-base">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-cyan-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href="https://play.google.com/store/apps/details?id=com.emotionbuddy.mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-6 font-semibold transition-all shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2 text-sm md:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Play className="w-5 h-5" />
                    Get it on Google Play
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-100/50 via-fuchsia-100/50 to-pink-100/50" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
                <span className="text-gray-900">Start your journey to</span>
                <br />
                <span className="gradient-text">emotional clarity</span>
              </h2>
              <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto px-4">
                Join people who have transformed their relationship with their emotions.
                Your journey to self-understanding starts here.
              </p>
              <motion.a
                href="#download"
                className="btn-primary inline-flex items-center gap-2 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Free
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <p className="mt-6 text-sm text-gray-500">
                No credit card required • Free forever plan available
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
