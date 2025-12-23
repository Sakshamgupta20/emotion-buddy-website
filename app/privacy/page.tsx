import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Shield, Lock, Eye, Download, Trash2, Database, Globe, Mail } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy - Emotion Buddy',
  description: 'Privacy Policy for Emotion Buddy - Learn how we protect and handle your personal data.',
}

export default function PrivacyPolicy() {
  const lastUpdated = 'January 6, 2025'

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl md:rounded-2xl mb-4 md:mb-6">
              <Shield className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-3 md:mb-4">Privacy Policy</h1>
            <p className="text-gray-500 text-sm md:text-base">Last Updated: {lastUpdated}</p>
          </div>

          <div className="glass-card p-4 md:p-8 lg:p-12">
            {/* Introduction */}
            <section className="content-section">
              <h2><Eye className="w-6 h-6 text-violet-500" /> Introduction</h2>
              <p>
                Welcome to Emotion Buddy. We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy explains how we collect, use, store, and protect your information when you use our mobile application.
              </p>
              <p className="font-semibold text-gray-800">
                By using Emotion Buddy, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* Section 1: Information We Collect */}
            <section className="content-section">
              <h2><Database className="w-6 h-6 text-violet-500" /> 1. Information We Collect</h2>

              <h3>1.1 Account Information</h3>
              <p>When you create an account, we collect:</p>
              <ul>
                <li>Email address</li>
                <li>Name (optional)</li>
                <li>Password (encrypted)</li>
                <li>Profile preferences</li>
              </ul>

              <h3>1.2 Journal Data</h3>
              <p>As part of our core service, we collect and store:</p>
              <ul>
                <li>Journal entry text content</li>
                <li>Mood ratings and emotional data</li>
                <li>Timestamps of entries</li>
                <li>Uploaded photos and videos</li>
                <li>Voice recordings (audio notes)</li>
                <li>Entry metadata</li>
              </ul>

              <h3>1.3 Usage Data</h3>
              <p>We automatically collect:</p>
              <ul>
                <li>App interactions and feature usage</li>
                <li>Device information (type, OS version)</li>
                <li>Crash reports and error logs</li>
                <li>Performance metrics</li>
                <li>Analytics data (anonymized)</li>
              </ul>

              <h3>1.4 Information We Do NOT Collect</h3>
              <ul>
                <li>Location data</li>
                <li>Contact lists</li>
                <li>Device identifiers for advertising</li>
                <li>Sensitive device sensors without permission</li>
              </ul>
            </section>

            {/* Section 2: How We Use Your Information */}
            <section className="content-section">
              <h2>2. How We Use Your Information</h2>

              <h3>2.1 To Provide Our Services</h3>
              <ul>
                <li>Store and sync your journal entries across devices</li>
                <li>Generate mood analytics and emotional insights</li>
                <li>Process AI analysis of your journal entries</li>
                <li>Display your personal wellness dashboard</li>
                <li>Provide mood tracking and pattern recognition</li>
              </ul>

              <h3>2.2 To Improve Our App</h3>
              <ul>
                <li>Analyze usage patterns (anonymized)</li>
                <li>Fix bugs and crashes</li>
                <li>Develop new features</li>
                <li>Enhance user experience</li>
                <li>Improve AI analysis accuracy</li>
              </ul>

              <h3>2.3 To Communicate With You</h3>
              <ul>
                <li>Send important account notifications</li>
                <li>Provide customer support</li>
                <li>Notify about app updates</li>
                <li>Respond to your inquiries</li>
              </ul>
            </section>

            {/* Section 3: How We Share Your Information */}
            <section className="content-section">
              <h2>3. How We Share Your Information</h2>

              <h3>3.1 Third-Party Services</h3>

              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">OpenAI API</h4>
                <ul className="text-sm">
                  <li>Purpose: AI analysis of journal entries</li>
                  <li>Data shared: Journal text content only</li>
                  <li>Privacy: Data is not used to train AI models</li>
                  <li>Policy: <a href="https://openai.com/privacy" className="text-violet-600 hover:underline">openai.com/privacy</a></li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Cloud Storage</h4>
                <ul className="text-sm">
                  <li>Purpose: Secure storage of media files</li>
                  <li>Data shared: Photos, videos, audio recordings</li>
                  <li>Encryption: All data encrypted at rest and in transit</li>
                </ul>
              </div>

              <h3>3.2 What We Never Share</h3>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <ul className="text-red-700">
                  <li>We do NOT sell your data to anyone</li>
                  <li>We do NOT share with advertisers</li>
                  <li>We do NOT share with data brokers</li>
                  <li>We do NOT share with social media platforms</li>
                  <li>We do NOT share your journal content except for AI analysis (which you can disable)</li>
                </ul>
              </div>
            </section>

            {/* Section 4: Data Security */}
            <section className="content-section">
              <h2><Lock className="w-6 h-6 text-violet-500" /> 4. Data Security</h2>

              <h3>4.1 Security Measures</h3>
              <p>We implement industry-standard security practices:</p>
              <ul>
                <li><strong>Encryption in Transit</strong>: All data transmitted using HTTPS/TLS</li>
                <li><strong>Encryption at Rest</strong>: Data encrypted in our databases</li>
                <li><strong>Secure Authentication</strong>: Password hashing with bcrypt</li>
                <li><strong>Access Controls</strong>: Limited employee access to user data</li>
                <li><strong>Regular Audits</strong>: Security assessments and penetration testing</li>
              </ul>

              <h3>4.2 Your Responsibility</h3>
              <ul>
                <li>Choose a strong, unique password</li>
                <li>Keep your login credentials confidential</li>
                <li>Enable device security (PIN, biometric)</li>
                <li>Log out from shared devices</li>
                <li>Report suspicious activity immediately</li>
              </ul>
            </section>

            {/* Section 5: Data Retention */}
            <section className="content-section">
              <h2>5. Data Retention</h2>

              <h3>5.1 Active Accounts</h3>
              <p>
                We retain your data for as long as your account is active and you continue to use our Service.
              </p>
              <ul>
                <li>Journal entries and mood data are stored indefinitely while your account is active</li>
                <li>Media files (photos, videos, audio) remain accessible as long as you maintain your account</li>
                <li>You can delete individual entries or media files at any time</li>
              </ul>

              <h3>5.2 Deleted Accounts</h3>
              <p>When you delete your account:</p>
              <ul>
                <li><strong>Immediate deletion:</strong> All data is instantly removed from production databases</li>
                <li><strong>90-day backup retention:</strong> Encrypted backups are maintained for disaster recovery and automatically purged after 90 days</li>
              </ul>
            </section>

            {/* Section 6: Your Rights */}
            <section className="content-section">
              <h2><Download className="w-6 h-6 text-violet-500" /> 6. Your Rights</h2>
              <p>
                You have complete control over your data. We respect your privacy rights and make it easy to exercise them.
              </p>

              <h3>6.1 Right to Access</h3>
              <p>You can access all your data at any time through the app.</p>
              <ul>
                <li>View all journal entries, mood data, and insights anytime</li>
                <li>Access your profile information in Settings</li>
                <li>Request a copy of all data we have about you by emailing support@emotionbuddy.ai</li>
              </ul>

              <h3>6.2 Right to Download (Data Portability)</h3>
              <p>Export your data in a machine-readable format for use elsewhere.</p>
              <ul>
                <li>Go to Profile → Settings → Export My Data</li>
                <li>Choose JSON or PDF format</li>
                <li>Receive download link via email within 24 hours</li>
                <li>Includes all journal entries, mood ratings, and metadata</li>
              </ul>

              <h3>6.3 Right to Delete</h3>
              <p>Permanently delete your account and all associated data.</p>
              <ul>
                <li>Delete individual entries anytime within the app</li>
                <li>Delete your entire account: Profile → Settings → Danger Zone → Delete Account</li>
                <li>Alternative: Email support@emotionbuddy.ai with deletion request</li>
                <li>Data deletion is instant and permanent (90-day backup retention for disaster recovery)</li>
              </ul>
              <p>
                Learn more: <Link href="/data-deletion" className="text-violet-600 hover:underline font-medium">Data Deletion Instructions</Link>
              </p>
            </section>

            {/* Section 7: Account Deletion */}
            <section className="content-section" id="account-deletion">
              <h2><Trash2 className="w-6 h-6 text-violet-500" /> 7. Account Deletion</h2>

              <h3>7.1 How to Delete Your Account</h3>
              <p>
                You can permanently delete your Emotion Buddy account at any time using our in-app deletion feature.
              </p>

              <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 mb-4">
                <p className="font-semibold text-gray-800 mb-2">Steps to Delete Your Account:</p>
                <ol className="list-decimal pl-6 text-gray-700 space-y-1">
                  <li>Open the Emotion Buddy mobile app</li>
                  <li>Navigate to the <strong>Profile</strong> tab (bottom navigation)</li>
                  <li>Tap <strong>Settings</strong></li>
                  <li>Scroll down to the <strong>Danger Zone</strong> section</li>
                  <li>Tap <strong>Delete Account</strong></li>
                  <li>Follow the 3-step confirmation process</li>
                </ol>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-red-800 font-semibold">This action is permanent and irreversible.</p>
              </div>
            </section>

            {/* Section 8: Children's Privacy */}
            <section className="content-section">
              <h2>8. Children&apos;s Privacy</h2>
              <p>Emotion Buddy is intended for users aged 13 and older.</p>
              <ul>
                <li>We do not knowingly collect data from children under 13</li>
                <li>If we discover data from a child under 13, we will delete it immediately</li>
                <li>Parents/guardians can contact us to request deletion</li>
              </ul>
              <p className="font-semibold text-gray-800">
                For users aged 13-17: We recommend parental guidance when using mental health apps.
              </p>
            </section>

            {/* Section 9: International Data Transfers */}
            <section className="content-section">
              <h2><Globe className="w-6 h-6 text-violet-500" /> 9. International Data Transfers</h2>

              <h3>9.1 Data Location</h3>
              <ul>
                <li>Our servers are located in the United States</li>
                <li>Your data may be transferred to, stored, and processed in the US</li>
              </ul>

              <h3>9.2 For European Users (GDPR)</h3>
              <p>If you are in the European Economic Area (EEA):</p>
              <ul>
                <li>We comply with GDPR requirements</li>
                <li>Data transfers use Standard Contractual Clauses</li>
                <li>You have additional rights under GDPR</li>
              </ul>

              <h3>9.3 For California Users (CCPA)</h3>
              <p>If you are a California resident:</p>
              <ul>
                <li>You have rights under the California Consumer Privacy Act</li>
                <li>You can request disclosure of data collection practices</li>
                <li>You can opt-out of data &quot;sales&quot; (we don&apos;t sell data)</li>
              </ul>
            </section>

            {/* Section 10: Changes to This Privacy Policy */}
            <section className="content-section">
              <h2>10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be effective when posted.
              </p>
              <p className="font-semibold text-gray-800">We will notify you of significant changes via:</p>
              <ul>
                <li>Email notification</li>
                <li>In-app alert</li>
                <li>Updated &quot;Last Modified&quot; date</li>
              </ul>
            </section>

            {/* Contact Section */}
            <section className="content-section">
              <h2><Mail className="w-6 h-6 text-violet-500" /> 11. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-700"><strong>Email</strong>: support@emotionbuddy.ai</p>
                <p className="text-gray-700"><strong>Website</strong>: <Link href="/" className="text-violet-600 hover:underline">emotionbuddy.ai</Link></p>
              </div>
              <p>We will respond to your inquiry within 30 days.</p>
            </section>

            {/* Quick Summary */}
            <section className="bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-2xl p-6 border border-violet-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Summary</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>What we collect</strong>: Journal entries, mood data, photos/audio you upload</li>
                <li><strong>Why</strong>: To provide journaling, mood tracking, and AI insights</li>
                <li><strong>Who we share with</strong>: OpenAI (for AI analysis only), cloud storage providers</li>
                <li><strong>Your rights</strong>: Access, delete, export your data anytime</li>
                <li><strong>Security</strong>: Encrypted storage and transmission</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
