import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

// Replace with your Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-JP4RD7CG1J'

export const metadata: Metadata = {
  title: 'Emotion Buddy - AI Journaling with 12+ Analytics | Track Your Mental Health',
  description: 'Professional emotional wellness app with voice journaling, mood tracking on precision scales, and 12+ analytics visualizations including emotional journey charts, mood alignment, and crisis detection. AES-256 encrypted. Instant data deletion. Free for iOS & Android.',
  keywords: ['mood tracker', 'mental health app', 'AI journaling', 'emotional wellness', 'mood analytics', 'daily journal', 'voice notes', 'crisis detection', 'emotion tracking', 'mental health tracker', 'journal app', 'mindfulness', 'self-care'],
  authors: [{ name: 'Emotion Buddy' }],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Emotion Buddy - AI Journaling with 12+ Professional Analytics',
    description: 'Track your emotional wellness with precision mood tracking, 7 different visualization types, and AI-powered insights. Full privacy with instant account deletion and AES-256 encryption.',
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
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
