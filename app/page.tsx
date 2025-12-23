'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import {
  Mic, MessageCircle, TrendingUp, Heart, Apple,
  Smartphone, Shield, Zap, Brain, Star,
  ChevronDown, Check, ArrowRight, Play,
  Lock, Cloud, Smartphone as Phone
} from 'lucide-react'

export default function Home() {

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
        <section className="relative min-h-0 md:min-h-screen flex items-center justify-center overflow-hidden">
          {/* Simple Background - hidden on mobile for performance */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Static gradient orbs - only on desktop */}
            <div className="hidden md:block absolute top-1/4 left-1/4 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] bg-violet-400/20 rounded-full blur-[120px]" />
            <div className="hidden md:block absolute top-1/3 right-1/4 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-fuchsia-400/20 rounded-full blur-[120px]" />
            <div className="hidden md:block absolute bottom-1/4 left-1/3 w-[450px] h-[450px] lg:w-[600px] lg:h-[600px] bg-cyan-400/15 rounded-full blur-[150px]" />

            {/* Mobile: simple gradient */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-b from-violet-50/50 via-white to-fuchsia-50/30" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-8 md:py-0">
            {/* Badge - smaller on mobile */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-4 md:mb-8">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500" />
              <span className="text-xs md:text-sm text-gray-600">Now available on iOS & Android</span>
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
            </div>

            {/* Logo - smaller on mobile */}
            <div className="flex justify-center mb-4 md:mb-8">
              <div className="w-16 h-16 md:w-28 md:h-28 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Emotion Buddy Logo"
                  width={112}
                  height={112}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>

            {/* Headline - much smaller on mobile */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-6 tracking-tight">
              <span className="text-gray-900">Understand Your </span>
              <span className="gradient-text">Emotions Better</span>
            </h1>

            {/* Subheadline - shorter on mobile */}
            <p className="text-base md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
              AI-powered journaling to track moods, discover patterns, and grow.
            </p>

            {/* CTA Buttons - full width on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4 sm:px-0">
              <a
                href="https://apps.apple.com/us/app/emotion-buddy/id6755134472"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 md:gap-3"
              >
                <Apple className="w-5 h-5 md:w-6 md:h-6" />
                <span className="font-semibold text-sm md:text-base">App Store</span>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.emotionbuddy.mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-secondary flex items-center justify-center gap-2 md:gap-3"
              >
                <Play className="w-5 h-5 md:w-6 md:h-6" />
                <span className="font-semibold text-sm md:text-base">Google Play</span>
              </a>
            </div>
          </div>

          {/* Scroll Indicator - hidden on mobile */}
          <div className="hidden md:flex absolute bottom-10 left-0 right-0 justify-center z-10">
            <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-10 md:py-16 lg:py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-16">
              <span className="inline-block px-3 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-600 text-xs font-medium mb-3 md:mb-6">
                Features
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6">
                <span className="text-gray-900">Everything you need to </span>
                <span className="gradient-text">understand yourself</span>
              </h2>
              <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                Professional tools for meaningful self-discovery.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="glass-card p-4 md:p-8"
                  >
                    <div
                      className={`w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-3 md:mb-6 shadow-md`}
                    >
                      <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                    </div>
                    <h3 className="text-sm md:text-xl font-semibold mb-1 md:mb-3 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-xs md:text-base line-clamp-3 md:line-clamp-none">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* App Preview Section */}
        <section className="py-10 md:py-16 lg:py-20 relative overflow-hidden">
          <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-transparent via-violet-100/50 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <span className="inline-block px-3 py-1.5 rounded-full bg-fuchsia-100 border border-fuchsia-200 text-fuchsia-600 text-xs font-medium mb-4 md:mb-6">
                  Privacy First
                </span>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
                  Your thoughts stay<span className="gradient-text"> yours</span>
                </h2>
                <p className="text-sm md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
                  Your innermost thoughts deserve the highest level of protection.
                </p>

                <div className="space-y-3">
                  {[
                    { icon: Lock, text: "AES-256 encryption" },
                    { icon: Phone, text: "Biometric authentication" },
                    { icon: Cloud, text: "Zero-knowledge architecture" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white border border-violet-200 shadow-sm md:shadow-md"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <span className="text-gray-900 font-medium text-sm md:text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone mockup - desktop only */}
              <div className="relative hidden lg:block">
                <div className="relative mx-auto w-72 h-[580px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl border border-gray-700">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
                    <div className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden">
                      <div className="p-6 h-full flex flex-col">
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                            <Heart className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="text-white font-semibold">How are you feeling?</h4>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mb-6">
                          {['😊', '😌', '😔', '😤', '😰', '🥰'].map((emoji, i) => (
                            <div key={i} className="aspect-square rounded-xl bg-white/5 flex items-center justify-center text-2xl">
                              {emoji}
                            </div>
                          ))}
                        </div>
                        <div className="flex-1 rounded-2xl bg-white/5 p-4">
                          <div className="h-2 w-3/4 bg-white/10 rounded mb-2" />
                          <div className="h-2 w-1/2 bg-white/10 rounded mb-4" />
                          <div className="h-20 w-full bg-white/5 rounded-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-10 md:py-16 lg:py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-16">
              <span className="inline-block px-3 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-600 text-xs font-medium mb-3 md:mb-6">
                Testimonials
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Loved by users
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-3 md:gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="glass-card p-4 md:p-8">
                  <div className="flex gap-1 mb-2 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 md:mb-6 leading-relaxed text-xs md:text-base">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 md:py-16 lg:py-20 relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-16">
              <span className="inline-block px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 text-xs font-medium mb-3 md:mb-6">
                FAQ
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Common questions
              </h2>
            </div>

            <div className="space-y-2 md:space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="glass-card group">
                  <summary className="flex items-center justify-between p-3 md:p-6 cursor-pointer list-none">
                    <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-3 pb-3 md:px-6 md:pb-6 text-gray-600 leading-relaxed text-xs md:text-base">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-10 md:py-16 lg:py-20 relative">
          <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-transparent via-violet-100/30 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
              {/* iOS Card */}
              <div className="glass-card p-5 md:p-10 relative overflow-hidden">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center mb-4 md:mb-6 shadow-md">
                  <Apple className="w-6 h-6 md:w-9 md:h-9 text-white" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">iOS App</h3>
                <p className="text-gray-600 mb-4 text-xs md:text-base">
                  iPhone and iPad. iOS 14.0+
                </p>
                <ul className="space-y-2 mb-5 md:mb-8">
                  {['All iPhone models', 'iPad support', 'Face ID / Touch ID'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 text-xs md:text-base">
                      <Check className="w-4 h-4 text-violet-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://apps.apple.com/us/app/emotion-buddy/id6755134472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl py-3 px-4 font-semibold shadow-md flex items-center justify-center gap-2 text-sm md:text-base active:scale-95 transition-transform"
                >
                  <Apple className="w-5 h-5" />
                  App Store
                </a>
              </div>

              {/* Android Card */}
              <div className="glass-card p-5 md:p-10 relative overflow-hidden">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center mb-4 md:mb-6 shadow-md">
                  <Smartphone className="w-6 h-6 md:w-9 md:h-9 text-white" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Android App</h3>
                <p className="text-gray-600 mb-4 text-xs md:text-base">
                  Android devices. Android 8.0+
                </p>
                <ul className="space-y-2 mb-5 md:mb-8">
                  {['Material Design 3', 'Tablet & phone', 'Fingerprint auth'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 text-xs md:text-base">
                      <Check className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://play.google.com/store/apps/details?id=com.emotionbuddy.mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl py-3 px-4 font-semibold shadow-md flex items-center justify-center gap-2 text-sm md:text-base active:scale-95 transition-transform"
                >
                  <Play className="w-5 h-5" />
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-10 md:py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-50 via-fuchsia-50 to-pink-50" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-gray-900">Start your journey to </span>
              <span className="gradient-text">emotional clarity</span>
            </h2>
            <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-10 max-w-2xl mx-auto">
              Join people transforming their relationship with emotions.
            </p>
            <a
              href="#download"
              className="btn-primary inline-flex items-center gap-2"
            >
              Download Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-4 md:mt-6 text-xs md:text-sm text-gray-500">
              No credit card required • Free forever plan
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
