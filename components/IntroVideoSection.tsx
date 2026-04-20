'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Intro video section — embeds the 20.5s animated story from /public/intro-video/.
 * Uses an iframe with ?embed=1 to hide the playback bar and loop on autoplay.
 * 1920×1080 canvas — 16:9 aspect maintained via aspectRatio CSS.
 */
export default function IntroVideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      id="intro"
      className="relative py-20 md:py-28 bg-gradient-to-b from-white via-emotion-blue/5 to-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="eyebrow text-emotion-coral/80 mb-4">
            How it works · 20 seconds
          </p>
          <h2 className="h-section text-gray-900 mb-4 max-w-3xl mx-auto">
            The notebook that notices.
            <span className="block text-emotion-coral italic font-normal mt-1">
              And remembers the good ones.
            </span>
          </h2>
          <p className="lead max-w-xl mx-auto">
            You write a few words. We find the pattern across your days.
          </p>
        </motion.div>

        {/* Video frame */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Soft brand-gradient glow behind the frame */}
          <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-br from-emotion-blue/30 via-emotion-pink/20 to-emotion-coral/25 blur-3xl opacity-60 rounded-[2rem] pointer-events-none" />

          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-200/60 bg-[#F6F1E8]">
            <div
              style={{ aspectRatio: '16 / 9' }}
              className="relative w-full"
            >
              <iframe
                src="/intro-video/index.html?embed=1"
                title="Emotion Buddy — Intro Video"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allow="autoplay"
                aria-label="Short animated story: how Emotion Buddy notices patterns across your days and reminds you of the good ones."
              />
            </div>
          </div>

          {/* Caption under the frame */}
          <p className="mt-5 eyebrow text-center">
            Every entry, quietly held. Every pattern, gently shown.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
