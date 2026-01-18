'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogArticle() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category & Read time */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  Journaling Guide
                </span>
                <span className="text-sm text-gray-500">8 min read</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                How to Journal with AI Chat: A Complete Guide to Conversational Self-Reflection
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">EB</span>
                  </div>
                  <span className="font-medium">Emotion Buddy Team</span>
                </div>
                <span className="text-gray-400">|</span>
                <span>January 18, 2026</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 md:py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/2]"
            >
              <Image
                src="/images/app-screenshots/journaling-hero.png"
                alt="AI Chat Journaling"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-8 md:py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              {/* Introduction */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Traditional journaling can feel intimidating. Staring at a blank page, wondering what to write,
                and struggling to articulate your feelings is a common experience. But what if you could simply
                talk to someone who listens without judgment and helps you explore your thoughts? That&apos;s exactly
                what AI chat journaling offers.
              </p>

              {/* Section 1 */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                What is AI Chat Journaling?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                AI chat journaling is a modern approach to self-reflection where you have a conversation with
                an empathetic AI assistant instead of writing in a traditional diary. The AI asks thoughtful
                questions, reflects back what you&apos;ve shared, and helps you dig deeper into your emotions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Unlike talking to a friend or therapist, AI chat journaling is available 24/7, completely
                private, and free from any social pressure or judgment. You can be completely honest about
                your feelings without worrying about how you&apos;ll be perceived.
              </p>

              {/* Benefit Box */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 my-8 border border-purple-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">✨</span> Key Benefits of AI Chat Journaling
                </h3>
                <ul className="space-y-3">
                  {[
                    'No blank page anxiety - just start talking',
                    'Guided questions help you explore deeper',
                    'Available anytime, anywhere',
                    '100% private and non-judgmental',
                    'AI remembers context and follows up',
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="text-purple-500 mt-1">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 2 */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                How to Start Your First AI Chat Journal Session
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                Step 1: Choose Your Starting Point
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                You don&apos;t need a dramatic event to journal about. Start with whatever is on your mind.
                Some great conversation starters include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>&quot;I&apos;ve been feeling stressed about work lately&quot;</li>
                <li>&quot;Something happened today that I can&apos;t stop thinking about&quot;</li>
                <li>&quot;I&apos;m not sure why, but I feel anxious right now&quot;</li>
                <li>&quot;I want to understand why I reacted that way&quot;</li>
              </ul>

              {/* Screenshot with caption */}
              <div className="my-10">
                <div className="bg-gray-50 rounded-2xl p-4 md:p-6">
                  <div className="flex justify-center">
                    <div className="w-56 md:w-72 relative">
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] p-2 shadow-xl">
                        <div className="bg-white rounded-[1.5rem] overflow-hidden">
                          <Image
                            src="/images/app-screenshots/b1acfb52ae6f24673a3ede24bd84a6a9aaccf73b.png"
                            alt="Starting a journal conversation"
                            width={288}
                            height={624}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Start with a simple message about how you&apos;re feeling
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                Step 2: Let the Conversation Flow
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Once you share your initial thought, the AI will respond with empathy and ask follow-up
                questions to help you explore further. Don&apos;t worry about giving &quot;perfect&quot; answers -
                just respond naturally as you would in a conversation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The AI might ask things like:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>&quot;What do you think triggered that feeling?&quot;</li>
                <li>&quot;How did your body react in that moment?&quot;</li>
                <li>&quot;What would you tell a friend in this situation?&quot;</li>
                <li>&quot;What&apos;s one small thing that might help right now?&quot;</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                Step 3: Reflect on the Insights
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At the end of your conversation, the AI will summarize key themes and emotions from your
                chat. This helps you see patterns and gain clarity on what you&apos;re experiencing. Many users
                find that simply articulating their thoughts helps them feel lighter and more understood.
              </p>

              {/* Quote Box */}
              <blockquote className="border-l-4 border-purple-500 pl-6 py-2 my-8 bg-purple-50 rounded-r-xl">
                <p className="text-lg text-gray-700 italic">
                  &quot;Writing in a traditional journal felt like homework. But chatting with the AI feels
                  like talking to a wise friend who always knows the right questions to ask.&quot;
                </p>
                <cite className="text-sm text-gray-500 mt-2 block">— Sarah, Emotion Buddy User</cite>
              </blockquote>

              {/* Section 3 */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                Tips for Effective AI Chat Journaling
              </h2>

              <div className="grid gap-4 my-8">
                {[
                  {
                    num: '01',
                    title: 'Be Honest',
                    desc: 'The AI doesn\'t judge. Share your real feelings, even the messy ones.',
                  },
                  {
                    num: '02',
                    title: 'Journal Regularly',
                    desc: 'Even 5 minutes daily creates powerful habits and reveals patterns over time.',
                  },
                  {
                    num: '03',
                    title: 'Use Voice Notes',
                    desc: 'When typing feels like too much effort, just speak your thoughts.',
                  },
                  {
                    num: '04',
                    title: 'Review Your History',
                    desc: 'Look back at past conversations to see how far you\'ve come.',
                  },
                ].map((tip) => (
                  <div key={tip.num} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                    <span className="text-3xl font-bold text-purple-300">{tip.num}</span>
                    <div>
                      <h4 className="font-bold text-gray-900">{tip.title}</h4>
                      <p className="text-gray-600 text-sm">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Analytics Section */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                Track Your Emotional Journey
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                One of the most powerful aspects of AI chat journaling is how it tracks your emotional
                patterns over time. Each conversation is analyzed to identify your mood, key themes, and
                emotional triggers. Over weeks and months, you&apos;ll start to see patterns emerge.
              </p>

              {/* Analytics Screenshot */}
              <div className="my-10">
                <div className="bg-gray-50 rounded-2xl p-4 md:p-6">
                  <div className="flex justify-center gap-4">
                    <div className="w-44 md:w-56 relative">
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] p-2 shadow-xl">
                        <div className="bg-white rounded-[1.5rem] overflow-hidden">
                          <Image
                            src="/images/app-screenshots/c9f06ae71dc90b5ebdfc68a5506bdbd0f45d4c38.png"
                            alt="Mood Analytics"
                            width={224}
                            height={485}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-44 md:w-56 relative hidden sm:block">
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] p-2 shadow-xl">
                        <div className="bg-white rounded-[1.5rem] overflow-hidden">
                          <Image
                            src="/images/app-screenshots/655396ba337408e2b0647e6e4f480c0b1bab3375.png"
                            alt="Emotional Insights"
                            width={224}
                            height={485}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Beautiful visualizations help you understand your emotional patterns
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 md:p-10 my-12 text-white text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-purple-100 mb-6 max-w-lg mx-auto">
                  Join thousands who have transformed their self-reflection practice with AI chat journaling.
                  Start your free conversation today.
                </p>
                <a
                  href="https://app.emotionbuddy.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-colors shadow-lg"
                >
                  Try Emotion Buddy Free
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Conclusion */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
                Final Thoughts
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                AI chat journaling removes the barriers that make traditional journaling feel difficult.
                There&apos;s no pressure to write beautifully, no blank page staring back at you, and no fear
                of judgment. It&apos;s just you and a thoughtful AI having a meaningful conversation about
                what matters most - your emotional wellbeing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re new to journaling or looking for a fresh approach, give AI chat journaling
                a try. You might be surprised by what you discover about yourself.
              </p>
            </motion.div>

            {/* Author & Share */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">EB</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Emotion Buddy Team</p>
                    <p className="text-sm text-gray-500">Helping you understand yourself better</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Back to Blog */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
              </Link>
            </motion.div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
