'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  {
    slug: 'how-to-journal-with-ai-chat',
    title: 'How to Journal with AI Chat: A Complete Guide to Conversational Self-Reflection',
    excerpt: 'Discover how AI chat journaling removes the barriers of traditional journaling. No blank page anxiety, just natural conversations that help you understand your emotions better.',
    category: 'Journaling Guide',
    date: 'Jan 18, 2026',
    readTime: '8 min read',
    author: 'Emotion Buddy Team',
    image: '/images/app-screenshots/journaling-hero.png',
    featured: true,
  },
]

const categories = ['All', 'Journaling Guide', 'Wellness', 'Psychology', 'Product Updates']

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
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
              Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600"
            >
              Insights on emotional wellness, mental health tips, and product updates.
            </motion.p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {blogPosts.filter(p => p.featured).map((post, index) => (
          <section key={post.slug} className="py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
                    {/* Image */}
                    <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">EB</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{post.author}</p>
                            <p className="text-xs text-gray-500">{post.date}</p>
                          </div>
                        </div>
                        <span className="text-purple-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                          Read Article
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
        ))}

        {/* More Articles Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                More Articles Coming Soon
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto mb-8">
                We&apos;re working on more insightful articles about emotional wellness, journaling techniques, and mental health tips.
              </p>

              {/* Upcoming topics preview */}
              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {[
                  { icon: '🧠', title: 'Understanding Anxiety' },
                  { icon: '📊', title: 'Reading Your Mood Patterns' },
                  { icon: '🎙️', title: 'Voice Journaling Tips' },
                ].map((topic) => (
                  <div key={topic.title} className="p-4 bg-white rounded-xl border border-gray-200">
                    <div className="text-2xl mb-2">{topic.icon}</div>
                    <p className="text-sm font-medium text-gray-700">{topic.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
