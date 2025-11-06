'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Sparkles, Mic, MessageCircle, TrendingUp, Image as ImageIcon, Search, Heart, Apple, Smartphone } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Mic,
      title: 'Voice & Text Journaling',
      description: 'Express yourself freely with text, audio recordings, or both. A distraction-free space to vent and reflect.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageCircle,
      title: 'AI Chat Companion',
      description: 'Talk to your AI companion about your thoughts and feelings. Get supportive responses and guidance.',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Mood Tracking & Analytics',
      description: 'Track emotions over time with 12+ visualization types including emotional journey charts and intensity heatmaps.',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: ImageIcon,
      title: 'Rich Media Support',
      description: 'Add photos, videos, and audio to your entries. Create a multimedia timeline of your emotional journey.',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      icon: Search,
      title: 'Smart Organization',
      description: 'Search entries, organize with tags, and favorite important moments. Your memories, beautifully organized.',
      gradient: 'from-orange-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'AI-Generated Insights',
      description: 'Discover patterns in your emotions, track crisis moments, and understand your mental health journey better.',
      gradient: 'from-red-500 to-purple-500'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-20 md:py-32">
          {/* Animated background gradient orbs */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"
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
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto text-center">
            {/* Logo */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-32 h-32 flex items-center justify-center"
                >
                  <Image
                    src="/images/logo.svg"
                    alt="Emotion Buddy Logo"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <Sparkles className="w-6 h-6 text-emotion-coral absolute -top-2 -right-2" />
                </motion.div>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-emotion-blue via-emotion-pink to-emotion-coral bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Emotion Buddy
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 font-medium mb-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Your AI-Powered Journaling Companion
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Combine traditional journaling with AI-assisted reflection. Write, record, and gain insights into your emotional journey with a mindful, peaceful experience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a
                href="#download"
                className="btn-primary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Apple className="w-5 h-5 mr-2" />
                Download for iOS
              </motion.a>
              <motion.a
                href="#download"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-10 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Download for Android
              </motion.a>
            </motion.div>

            <motion.p
              className="text-sm text-gray-500 mt-8 flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Free to download • Premium features available
            </motion.p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-4 py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need for mindful journaling and emotional wellness
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="download" className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Available on Your Device
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Access Emotion Buddy wherever you are, whenever you need it
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* iOS Card */}
              <motion.div
                className="p-10 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6">
                  <Apple className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  iOS App
                </h3>
                <p className="text-gray-600 mb-6">
                  Available for iPhone and iPad. Requires iOS 14.0 or later.
                </p>
                <ul className="space-y-2 mb-8 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Optimized for all iPhone models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>iPad support with adaptive layout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>iCloud sync across devices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Face ID / Touch ID security</span>
                  </li>
                </ul>
                <motion.button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full py-3 px-6 font-semibold transition-all shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download on App Store
                </motion.button>
              </motion.div>

              {/* Android Card */}
              <motion.div
                className="p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                  <Smartphone className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Android App
                </h3>
                <p className="text-gray-600 mb-6">
                  Available for Android devices. Requires Android 8.0 or later.
                </p>
                <ul className="space-y-2 mb-8 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Material Design 3 interface</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Tablet & phone support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Google Drive backup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Fingerprint authentication</span>
                  </li>
                </ul>
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full py-3 px-6 font-semibold transition-all shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get it on Google Play
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emotion-blue via-emotion-pink to-emotion-coral relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your Emotional Wellness?
            </motion.h2>
            <motion.p
              className="text-xl text-white/95 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join thousands of users who are already on their journey to better mental health
            </motion.p>
            <motion.a
              href="#download"
              className="bg-white text-gray-900 font-semibold py-4 px-10 rounded-full hover:bg-gray-50 transition-all inline-block shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
