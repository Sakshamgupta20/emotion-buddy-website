import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { HelpCircle, Mail, User, Shield, Sparkles, CreditCard, Wrench, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Support - Emotion Buddy',
  description: 'Get help with Emotion Buddy. Contact support, browse FAQs, and find troubleshooting guides.',
}

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Support & FAQ</h1>
            <p className="text-gray-600 text-lg">
              We&apos;re here to help! Find answers to common questions or reach out to our support team.
            </p>
          </div>

          {/* Contact Card */}
          <div className="glass-card p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Us</h2>
                <p className="text-gray-600 mb-3">
                  <strong>Email Support:</strong>{' '}
                  <a href="mailto:support@emotionbuddy.ai" className="text-violet-600 hover:underline text-lg font-medium">
                    support@emotionbuddy.ai
                  </a>
                </p>
                <p className="text-gray-500 text-sm">
                  We typically respond within 24 hours. For urgent issues, please include &quot;URGENT&quot; in your subject line.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12">
            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

              {/* Account Management */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <User className="w-5 h-5 text-violet-500" />
                  Account Management
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-violet-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800 mb-2">How do I create an account?</h4>
                    <p className="text-gray-600 text-sm">
                      Download the Emotion Buddy app from the App Store or Google Play. Open the app and tap &quot;Sign Up&quot; to create your account with your email address. You&apos;ll receive a verification email to confirm your account.
                    </p>
                  </div>

                  <div className="border-l-4 border-violet-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800 mb-2">How do I reset my password?</h4>
                    <p className="text-gray-600 text-sm">
                      On the login screen, tap &quot;Forgot Password?&quot; Enter your email address, and we&apos;ll send you a password reset link. Click the link in the email to set a new password.
                    </p>
                  </div>

                  <div className="border-l-4 border-violet-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800 mb-2">How do I delete my account?</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Go to Profile → Settings → Danger Zone → Delete Account. Follow the confirmation steps to permanently delete your account and all data.
                    </p>
                    <Link href="/data-deletion" className="text-violet-600 hover:underline text-sm font-medium inline-flex items-center gap-1">
                      Learn more about data deletion <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="border-l-4 border-violet-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800 mb-2">Can I change my email address?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes! Go to Profile → Settings → Account Settings → Email Address. Enter your new email and verify it by clicking the confirmation link we send you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data & Privacy */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-cyan-500" />
                  Data & Privacy
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-cyan-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800 mb-2">Is my journal data encrypted?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes! All your data is encrypted in transit (using HTTPS/TLS) and at rest in our databases. Your journal entries, photos, and audio recordings are stored securely with industry-standard encryption.
                    </p>
                  </div>

                  <div className="border-l-4 border-cyan-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800 mb-2">Where is my data stored?</h4>
                    <p className="text-gray-600 text-sm">
                      Your data is stored on secure cloud servers located in the United States. We use reputable cloud infrastructure providers with strong security and privacy practices.
                    </p>
                  </div>

                  <div className="border-l-4 border-cyan-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800 mb-2">Can I export my data?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes! Go to Profile → Settings → Export My Data. You can export your journal entries, mood data, and insights in JSON or PDF format. We&apos;ll email you the export file within 24 hours.
                    </p>
                  </div>

                  <div className="border-l-4 border-cyan-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800 mb-2">What happens to my data if I delete my account?</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      All your data is immediately deleted from our production systems. Backup copies are automatically purged within 90 days. This deletion is permanent and irreversible.
                    </p>
                    <Link href="/privacy" className="text-cyan-600 hover:underline text-sm font-medium inline-flex items-center gap-1">
                      Read our Privacy Policy <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-fuchsia-500" />
                  Features & Usage
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-fuchsia-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800 mb-2">How does AI analysis work?</h4>
                    <p className="text-gray-600 text-sm">
                      Our AI analyzes your journal entries to identify emotional patterns, mood trends, and provide personalized insights. You can enable or disable AI analysis anytime in Settings. Your data is sent to OpenAI&apos;s API for processing but is not used to train their models.
                    </p>
                  </div>

                  <div className="border-l-4 border-fuchsia-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800 mb-2">Can I disable AI features?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes! Go to Profile → Settings → AI Settings → Toggle &quot;Enable AI Analysis&quot; off. Your existing insights will remain, but no new AI analysis will be performed on future entries.
                    </p>
                  </div>

                  <div className="border-l-4 border-fuchsia-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800 mb-2">How do I add photos/videos to my journal?</h4>
                    <p className="text-gray-600 text-sm">
                      When creating or editing a journal entry, tap the media button (camera icon) at the bottom of the screen. You can add photos, videos, or voice recordings to any entry.
                    </p>
                  </div>

                  <div className="border-l-4 border-fuchsia-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800 mb-2">Can I use Emotion Buddy offline?</h4>
                    <p className="text-gray-600 text-sm">
                      You can write journal entries offline, and they&apos;ll sync to the cloud when you&apos;re back online. However, AI analysis and some features require an internet connection.
                    </p>
                  </div>
                </div>
              </div>

              {/* Billing */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-emerald-500" />
                  Billing & Subscriptions
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800 mb-2">Is Emotion Buddy free?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes! Emotion Buddy is currently free to use with all features available. We may introduce premium features in the future, but core journaling functionality will always remain free.
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800 mb-2">Will there be paid features in the future?</h4>
                    <p className="text-gray-600 text-sm">
                      We&apos;re exploring optional premium features like advanced analytics, longer AI context, and additional storage. Current users will receive advance notice of any changes, and existing free features will remain free.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Troubleshooting */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-violet-500" />
                Troubleshooting Guide
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">App crashes or won&apos;t open</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm">
                    <li>Make sure you&apos;re running the latest version of the app (check App Store/Google Play for updates)</li>
                    <li>Try force-closing the app and reopening it</li>
                    <li>Restart your device</li>
                    <li>If the problem persists, uninstall and reinstall the app (your data is safely stored in the cloud)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Sync issues or missing entries</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm">
                    <li>Check your internet connection</li>
                    <li>Go to Settings → Sync Settings → Tap &quot;Force Sync&quot;</li>
                    <li>Make sure you&apos;re logged into the same account on all devices</li>
                    <li>Pull down on the Discover screen to manually refresh</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Can&apos;t log in or &quot;incorrect password&quot; error</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm">
                    <li>Double-check that you&apos;re using the correct email address</li>
                    <li>Use the &quot;Forgot Password?&quot; link to reset your password</li>
                    <li>Make sure Caps Lock is off when typing your password</li>
                    <li>Clear your app cache (Settings → Storage → Clear Cache)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">AI analysis not working</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm">
                    <li>Make sure AI analysis is enabled (Settings → AI Settings)</li>
                    <li>AI analysis requires an internet connection</li>
                    <li>Very short entries (less than 50 characters) may not generate insights</li>
                    <li>AI processing can take a few minutes - try refreshing the entry</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Quick Links */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/privacy"
                  className="bg-violet-50 hover:bg-violet-100 border border-violet-200 rounded-xl p-4 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">Privacy Policy</h3>
                  <p className="text-gray-600 text-sm">Learn how we protect your data</p>
                </Link>
                <Link
                  href="/terms"
                  className="bg-violet-50 hover:bg-violet-100 border border-violet-200 rounded-xl p-4 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">Terms of Service</h3>
                  <p className="text-gray-600 text-sm">Review our terms and conditions</p>
                </Link>
                <Link
                  href="/data-deletion"
                  className="bg-violet-50 hover:bg-violet-100 border border-violet-200 rounded-xl p-4 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">Data Deletion</h3>
                  <p className="text-gray-600 text-sm">How to delete your account</p>
                </Link>
                <a
                  href="/#download"
                  className="bg-violet-50 hover:bg-violet-100 border border-violet-200 rounded-xl p-4 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">Download App</h3>
                  <p className="text-gray-600 text-sm">Get Emotion Buddy for iOS or Android</p>
                </a>
              </div>
            </section>

            {/* Still Need Help */}
            <section className="bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-2xl p-6 border border-violet-200">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Still Need Help?</h2>
              <p className="text-gray-700 mb-4">
                Can&apos;t find the answer you&apos;re looking for? Our support team is here to help!
              </p>
              <div className="bg-white rounded-xl p-4">
                <p className="text-gray-700 mb-2">
                  <strong>Email us at:</strong>{' '}
                  <a href="mailto:support@emotionbuddy.ai" className="text-violet-600 hover:underline text-lg font-medium">
                    support@emotionbuddy.ai
                  </a>
                </p>
                <p className="text-gray-500 text-sm">
                  Please include as much detail as possible about your issue, including:
                </p>
                <ul className="list-disc pl-6 text-gray-500 text-sm space-y-1 mt-2">
                  <li>Your device type and operating system version</li>
                  <li>App version (found in Settings → About)</li>
                  <li>Steps to reproduce the issue</li>
                  <li>Screenshots if applicable</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
