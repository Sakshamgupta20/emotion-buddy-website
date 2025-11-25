import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - Emotion Buddy',
  description: 'Privacy Policy for Emotion Buddy - Learn how we protect and handle your personal data.',
}

export default function PrivacyPolicy() {
  const lastUpdated = 'January 6, 2025'

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last Updated: {lastUpdated}</p>

            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to Emotion Buddy. We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy explains how we collect, use, store, and protect your information when you use our mobile application.
              </p>
              <p className="text-gray-700">
                <strong>By using Emotion Buddy, you agree to the collection and use of information in accordance with this policy.</strong>
              </p>
            </section>

            {/* Section 1: Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">1.1 Account Information</h3>
              <p className="text-gray-700 mb-3">When you create an account, we collect:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Email address</li>
                <li>Name (optional)</li>
                <li>Password (encrypted)</li>
                <li>Profile preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">1.2 Journal Data</h3>
              <p className="text-gray-700 mb-3">As part of our core service, we collect and store:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Journal entry text content</li>
                <li>Mood ratings and emotional data</li>
                <li>Timestamps of entries</li>
                <li>Uploaded photos and videos</li>
                <li>Voice recordings (audio notes)</li>
                <li>Entry metadata</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">1.3 Usage Data</h3>
              <p className="text-gray-700 mb-3">We automatically collect:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>App interactions and feature usage</li>
                <li>Device information (type, OS version)</li>
                <li>Crash reports and error logs</li>
                <li>Performance metrics</li>
                <li>Analytics data (anonymized)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">1.4 Information We Do NOT Collect</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Location data</li>
                <li>Contact lists</li>
                <li>Device identifiers for advertising</li>
                <li>Sensitive device sensors without permission</li>
              </ul>
            </section>

            {/* Section 2: How We Use Your Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 To Provide Our Services</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Store and sync your journal entries across devices</li>
                <li>Generate mood analytics and emotional insights</li>
                <li>Process AI analysis of your journal entries</li>
                <li>Display your personal wellness dashboard</li>
                <li>Provide mood tracking and pattern recognition</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 To Improve Our App</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Analyze usage patterns (anonymized)</li>
                <li>Fix bugs and crashes</li>
                <li>Develop new features</li>
                <li>Enhance user experience</li>
                <li>Improve AI analysis accuracy</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 To Communicate With You</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Send important account notifications</li>
                <li>Provide customer support</li>
                <li>Notify about app updates</li>
                <li>Respond to your inquiries</li>
              </ul>
            </section>

            {/* Section 3: How We Share Your Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Share Your Information</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Third-Party Services</h3>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">OpenAI API</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Purpose: AI analysis of journal entries</li>
                  <li>Data shared: Journal text content only</li>
                  <li>Privacy: Data is not used to train AI models</li>
                  <li>Policy: <a href="https://openai.com/privacy" className="text-primary-500 hover:underline">https://openai.com/privacy</a></li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Cloud Storage</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Purpose: Secure storage of media files</li>
                  <li>Data shared: Photos, videos, audio recordings</li>
                  <li>Encryption: All data encrypted at rest and in transit</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 What We Never Share</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>❌ We do NOT sell your data to anyone</li>
                <li>❌ We do NOT share with advertisers</li>
                <li>❌ We do NOT share with data brokers</li>
                <li>❌ We do NOT share with social media platforms</li>
                <li>❌ We do NOT share your journal content except for AI analysis (which you can disable)</li>
              </ul>
            </section>

            {/* Section 4: Data Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Security Measures</h3>
              <p className="text-gray-700 mb-3">We implement industry-standard security practices:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li><strong>Encryption in Transit</strong>: All data transmitted using HTTPS/TLS</li>
                <li><strong>Encryption at Rest</strong>: Data encrypted in our databases</li>
                <li><strong>Secure Authentication</strong>: Password hashing with bcrypt</li>
                <li><strong>Access Controls</strong>: Limited employee access to user data</li>
                <li><strong>Regular Audits</strong>: Security assessments and penetration testing</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Your Responsibility</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Choose a strong, unique password</li>
                <li>Keep your login credentials confidential</li>
                <li>Enable device security (PIN, biometric)</li>
                <li>Log out from shared devices</li>
                <li>Report suspicious activity immediately</li>
              </ul>
            </section>

            {/* Section 5: Data Retention */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Active Accounts</h3>
              <p className="text-gray-700 mb-3">
                We retain your data for as long as your account is active and you continue to use our Service.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Journal entries and mood data are stored indefinitely while your account is active</li>
                <li>Media files (photos, videos, audio) remain accessible as long as you maintain your account</li>
                <li>You can delete individual entries or media files at any time</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Deleted Accounts</h3>
              <p className="text-gray-700 mb-3">When you delete your account:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li><strong>Immediate deletion:</strong> All data is instantly removed from production databases</li>
                <li><strong>90-day backup retention:</strong> Encrypted backups are maintained for disaster recovery and automatically purged after 90 days</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Legal and Regulatory Requirements</h3>
              <p className="text-gray-700 mb-4">
                In some cases, we may be required to retain certain data for longer periods to comply with legal obligations, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Tax and accounting records (typically 7 years)</li>
                <li>Records subject to legal holds or ongoing litigation</li>
                <li>Records required by law enforcement or regulatory authorities</li>
              </ul>
              <p className="text-gray-700">
                Such retention is limited to the minimum necessary data and duration required by law.
              </p>
            </section>

            {/* Section 6: Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have complete control over your data. We respect your privacy rights and make it easy to exercise them.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Right to Access</h3>
              <p className="text-gray-700 mb-3">
                You can access all your data at any time through the app.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>View all journal entries, mood data, and insights anytime</li>
                <li>Access your profile information in Settings</li>
                <li>Request a copy of all data we have about you by emailing support@emotionbuddy.ai</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Right to Download (Data Portability)</h3>
              <p className="text-gray-700 mb-3">
                Export your data in a machine-readable format for use elsewhere.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Go to Profile → Settings → Export My Data</li>
                <li>Choose JSON or PDF format</li>
                <li>Receive download link via email within 24 hours</li>
                <li>Includes all journal entries, mood ratings, and metadata</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Right to Delete</h3>
              <p className="text-gray-700 mb-3">
                Permanently delete your account and all associated data.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Delete individual entries anytime within the app</li>
                <li>Delete your entire account: Profile → Settings → Danger Zone → Delete Account</li>
                <li>Alternative: Email support@emotionbuddy.ai with deletion request</li>
                <li>Data deletion is instant and permanent (90-day backup retention for disaster recovery)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Learn more: <Link href="/data-deletion" className="text-primary-500 hover:underline">Data Deletion Instructions</Link>
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.4 Right to Opt-Out</h3>
              <p className="text-gray-700 mb-3">
                Control how your data is used.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li><strong>Disable AI Analysis:</strong> Settings → AI Settings → Toggle off "Enable AI Analysis"</li>
                <li><strong>Opt out of analytics:</strong> Settings → Privacy → Disable "Share Anonymous Usage Data"</li>
                <li><strong>Opt out of emails:</strong> Unsubscribe link in any email we send</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.5 How to Exercise Your Rights</h3>
              <p className="text-gray-700 mb-3">
                To exercise any of these rights:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Most rights can be exercised directly in the app (Settings menu)</li>
                <li>For requests requiring support: Email support@emotionbuddy.ai</li>
                <li>We will respond within 30 days</li>
                <li>No fee is charged for exercising your rights</li>
                <li>We may verify your identity before processing sensitive requests</li>
              </ul>
            </section>

            {/* Section 6.5: Data Breach Notification */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6.5 Data Breach Notification</h2>
              <p className="text-gray-700 mb-4">
                While we implement strong security measures to protect your data, no system is completely invulnerable. In the unlikely event of a data breach:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Commitment</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li><strong>72-hour notification:</strong> We will notify affected users within 72 hours of discovering a breach</li>
                <li><strong>Transparent communication:</strong> We will provide clear information about what happened</li>
                <li><strong>Immediate action:</strong> We will take steps to contain and remediate the breach</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">How We'll Notify You</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Email to your registered email address</li>
                <li>In-app notification banner</li>
                <li>Public disclosure on our website (for significant breaches)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">What We'll Tell You</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Date and nature of the breach</li>
                <li>Types of data potentially affected</li>
                <li>Steps we've taken to address the breach</li>
                <li>Recommended actions you should take</li>
                <li>Contact information for questions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Steps You Should Take</h3>
              <p className="text-gray-700 mb-3">
                If you receive a breach notification:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Change your Emotion Buddy password immediately</li>
                <li>If you use the same password elsewhere, change those passwords too</li>
                <li>Enable two-factor authentication if available</li>
                <li>Monitor your account for suspicious activity</li>
                <li>Contact us if you have concerns: support@emotionbuddy.ai</li>
              </ul>
            </section>

            {/* Section 6.6: Cookies and Tracking */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6.6 Cookies and Tracking</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">This Website</h3>
              <p className="text-gray-700 mb-3">
                This marketing website (emotionbuddy.ai) may use cookies and similar technologies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>No advertising cookies:</strong> We do not use cookies for advertising purposes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">The Mobile App</h3>
              <p className="text-gray-700 mb-4">
                The Emotion Buddy mobile app does not use traditional web cookies. However, we may collect:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li><strong>Anonymous usage analytics:</strong> App interactions, feature usage, crash reports</li>
                <li><strong>Device information:</strong> OS version, device type, app version</li>
                <li><strong>Performance metrics:</strong> Load times, error rates</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You can opt out of analytics: Settings → Privacy → Disable "Share Anonymous Usage Data"
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Third-Party Analytics</h3>
              <p className="text-gray-700 mb-3">
                We may use third-party analytics services to help improve our Service:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Data is anonymized and aggregated</li>
                <li>Cannot be used to personally identify you</li>
                <li>Helps us understand usage patterns and improve features</li>
              </ul>
              <p className="text-gray-700 mb-4">
                If we use specific analytics providers, we will disclose them here and link to their privacy policies.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Your Control</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Disable cookies in your web browser settings</li>
                <li>Opt out of analytics in the mobile app settings</li>
                <li>Use "Do Not Track" browser settings (we respect these signals)</li>
              </ul>
            </section>

            {/* Section 8: Account Deletion (renumbered from 7) */}
            <section className="mb-8" id="account-deletion">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Account Deletion</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 How to Delete Your Account</h3>
              <p className="text-gray-700 mb-3">
                You can permanently delete your Emotion Buddy account at any time using our in-app deletion feature.
              </p>

              <p className="text-gray-700 mb-2"><strong>Steps to Delete Your Account:</strong></p>
              <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-1">
                <li>Open the Emotion Buddy mobile app</li>
                <li>Navigate to the <strong>Profile</strong> tab (bottom navigation)</li>
                <li>Tap <strong>Settings</strong></li>
                <li>Scroll down to the <strong>Danger Zone</strong> section</li>
                <li>Tap <strong>Delete Account</strong></li>
                <li>Follow the 3-step confirmation process</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 What Gets Deleted</h3>
              <p className="text-gray-700 mb-3">When you delete your account, the following data is permanently removed:</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Personal Data:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Your name and email address</li>
                  <li>Profile picture and bio</li>
                  <li>Account credentials</li>
                  <li>All settings and preferences</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Journal Content:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>All journal entries (text content)</li>
                  <li>All mood ratings and emotional data</li>
                  <li>All AI-generated insights and analysis</li>
                  <li>All entry timestamps and metadata</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Media Files:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>All uploaded photos</li>
                  <li>All uploaded videos</li>
                  <li>All audio recordings (voice notes)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.3 Deletion Timeline</h3>
              <p className="text-gray-700 mb-2"><strong>Immediate Actions:</strong></p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Account access is revoked immediately</li>
                <li>You are logged out of all devices</li>
                <li>All data is instantly deleted from production databases</li>
                <li>Media files removed from cloud storage</li>
              </ul>

              <p className="text-gray-700 mb-2"><strong>Within 90 Days:</strong></p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Data automatically purged from all backup systems</li>
                <li>Complete and permanent data removal</li>
              </ul>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <p className="text-red-800 font-semibold">This action is permanent and irreversible.</p>
              </div>
            </section>

            {/* Section 8: Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-700 mb-3">
                Emotion Buddy is intended for users aged 13 and older.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>We do not knowingly collect data from children under 13</li>
                <li>If we discover data from a child under 13, we will delete it immediately</li>
                <li>Parents/guardians can contact us to request deletion</li>
              </ul>
              <p className="text-gray-700">
                <strong>For users aged 13-17</strong>: We recommend parental guidance when using mental health apps.
              </p>
            </section>

            {/* Section 9: International Data Transfers */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 Data Location</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Our servers are located in the United States</li>
                <li>Your data may be transferred to, stored, and processed in the US</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2 For European Users (GDPR)</h3>
              <p className="text-gray-700 mb-3">If you are in the European Economic Area (EEA):</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>We comply with GDPR requirements</li>
                <li>Data transfers use Standard Contractual Clauses</li>
                <li>You have additional rights under GDPR</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">9.3 For California Users (CCPA)</h3>
              <p className="text-gray-700 mb-3">If you are a California resident:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>You have rights under the California Consumer Privacy Act</li>
                <li>You can request disclosure of data collection practices</li>
                <li>You can opt-out of data "sales" (we don't sell data)</li>
              </ul>
            </section>

            {/* Section 10: Changes to This Privacy Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-3">
                We may update this Privacy Policy from time to time. Changes will be effective when posted.
              </p>
              <p className="text-gray-700 mb-2"><strong>We will notify you of significant changes via:</strong></p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Email notification</li>
                <li>In-app alert</li>
                <li>Updated "Last Modified" date</li>
              </ul>
            </section>

            {/* Contact Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 mb-3">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700"><strong>Email</strong>: support@emotionbuddy.ai</p>
                <p className="text-gray-700"><strong>Website</strong>: <Link href="/" className="text-primary-500 hover:underline">https://emotionbuddy.ai</Link></p>
              </div>
              <p className="text-gray-700 mt-3">
                We will respond to your inquiry within 30 days.
              </p>
            </section>

            {/* Quick Summary */}
            <section className="bg-primary-50 rounded-lg p-6">
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
