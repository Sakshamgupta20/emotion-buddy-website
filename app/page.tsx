import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Emotional{' '}
                <span className="text-primary-500">Wellness Journey</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Your personal AI companion for emotional wellness and mindful journaling.
                Combine the power of journaling, mood tracking, and AI-powered insights to
                understand yourself better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#download" className="btn-primary inline-flex items-center justify-center">
                  Download Now
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
                <a href="#features" className="btn-secondary inline-flex items-center justify-center">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful Features for Your Wellness
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to build lasting emotional resilience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1: Smart Journaling */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Journaling</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Beautiful, distraction-free interface</li>
                  <li>• Add photos, videos, and voice notes</li>
                  <li>• Track word count and writing habits</li>
                  <li>• Secure cloud backup</li>
                </ul>
              </div>

              {/* Feature 2: Mood Tracking */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💭</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mood Tracking</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Intuitive mood capture</li>
                  <li>• 10-point feeling scale</li>
                  <li>• Add context to your emotions</li>
                  <li>• Identify patterns and triggers</li>
                </ul>
              </div>

              {/* Feature 3: Analytics */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Powerful Analytics</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Track emotional health trends</li>
                  <li>• Monitor mood patterns</li>
                  <li>• Identify crisis events</li>
                  <li>• Measure self-awareness growth</li>
                </ul>
              </div>

              {/* Feature 4: AI Insights */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Personalized entry analysis</li>
                  <li>• Understand emotional patterns</li>
                  <li>• Contextual well-being insights</li>
                  <li>• Privacy-focused AI</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Emotion Buddy Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Emotion Buddy?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Mental health matters. Whether you're managing stress, processing emotions,
                  or simply want to be more self-aware, Emotion Buddy provides the tools you need.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-300 flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">End-to-end Encryption</h3>
                      <p className="text-gray-600">Your data is secured with industry-standard encryption</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-300 flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Secure Authentication</h3>
                      <p className="text-gray-600">Your account is protected with robust security measures</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-300 flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Your Journal is Yours Alone</h3>
                      <p className="text-gray-600">Complete privacy and control over your personal data</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🔒</div>
                  <p className="text-gray-700 font-semibold">Privacy & Security First</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Download Emotion Buddy for free and take the first step toward better emotional wellness
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Google Play Badge */}
              <a
                href="https://play.google.com/store/apps/details?id=com.emotionbuddy.app"
                className="inline-block hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 min-w-[200px]">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </div>
              </a>

              {/* App Store Badge */}
              <a
                href="https://apps.apple.com/app/emotion-buddy"
                className="inline-block hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 min-w-[200px]">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </div>
              </a>
            </div>

            <p className="mt-8 text-gray-500 text-sm">
              Available on Android. iOS coming soon!
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Emotional Wellness?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already on their journey to better mental health
            </p>
            <a href="#download" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors inline-block">
              Get Started Free
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
