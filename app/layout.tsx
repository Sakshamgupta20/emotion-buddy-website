import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emotion Buddy - Your Personal AI Companion for Emotional Wellness',
  description: 'Transform your emotional wellness journey with Emotion Buddy. Smart journaling, mood tracking, and AI-powered insights to help you understand yourself better.',
  keywords: ['emotion buddy', 'mental health', 'journaling', 'mood tracking', 'emotional wellness', 'AI companion'],
  authors: [{ name: 'Emotion Buddy' }],
  openGraph: {
    title: 'Emotion Buddy - Your Personal AI Companion for Emotional Wellness',
    description: 'Transform your emotional wellness journey with smart journaling, mood tracking, and AI-powered insights.',
    type: 'website',
    url: 'https://emotionbuddy.ai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
