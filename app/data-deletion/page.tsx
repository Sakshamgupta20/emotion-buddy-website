import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Data Deletion - Emotion Buddy',
  description: 'Learn how to delete your Emotion Buddy account and all associated data.',
}

export default function DataDeletion() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Account & Data Deletion</h1>
            <p className="text-gray-600 mb-8">
              You have complete control over your data. This page explains how to permanently delete your account and all associated data.
            </p>

            {/* In-App Deletion */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Delete Your Account In-App</h2>
              <p className="text-gray-700 mb-4">
                The easiest way to delete your account is directly through the Emotion Buddy mobile app.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Step-by-Step Instructions:</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                  <li>Open the <strong>Emotion Buddy</strong> mobile app on your device</li>
                  <li>Navigate to the <strong>Profile</strong> tab (bottom navigation bar)</li>
                  <li>Tap on <strong>Settings</strong> (gear icon in the top right)</li>
                  <li>Scroll down to the <strong>Danger Zone</strong> section</li>
                  <li>Tap <strong>Delete Account</strong></li>
                  <li>Read the warning and follow the 3-step confirmation process</li>
                  <li>Your account will be deleted immediately</li>
                </ol>
              </div>

              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Visual Guide:</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Location:</strong> Profile → Settings → Danger Zone → Delete Account
                </p>
                <p className="text-gray-600 text-sm italic">
                  Look for the red "Delete Account" button at the bottom of the Settings screen in the "Danger Zone" section.
                </p>
              </div>
            </section>

            {/* Alternative Method */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Alternative: Email Request</h2>
              <p className="text-gray-700 mb-4">
                If you're unable to access the app or prefer to delete your account via email, you can contact our support team:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:support@emotionbuddy.ai" className="text-primary-500 hover:underline">
                    support@emotionbuddy.ai
                  </a>
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Subject:</strong> Account Deletion Request
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Include:</strong> The email address associated with your account
                </p>
              </div>
              <p className="text-gray-600 text-sm">
                We'll process your deletion request within 48 hours and send you a confirmation email.
              </p>
            </section>

            {/* What Gets Deleted */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Gets Deleted</h2>
              <p className="text-gray-700 mb-4">
                When you delete your account, <strong>all</strong> of your personal data is permanently removed:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Name and email address</li>
                    <li>Profile picture and bio</li>
                    <li>Account credentials</li>
                    <li>All settings and preferences</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Journal Content</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>All journal entries (text)</li>
                    <li>All mood ratings and emotional data</li>
                    <li>All AI-generated insights</li>
                    <li>Entry timestamps and metadata</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Media Files</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>All uploaded photos</li>
                    <li>All uploaded videos</li>
                    <li>All audio recordings (voice notes)</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Usage Data</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>App usage history</li>
                    <li>Analytics data</li>
                    <li>Interaction logs</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Deletion Timeline */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Deletion Timeline</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-32 pt-1">
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      Immediate
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">Instant Actions</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Account access is revoked immediately</li>
                      <li>You are logged out of all devices</li>
                      <li>All data is deleted from production databases</li>
                      <li>Media files removed from cloud storage</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-32 pt-1">
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                      Within 90 Days
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">Backup Removal</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Data automatically purged from all backup systems</li>
                      <li>Complete and permanent data removal</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <p className="text-blue-800 text-sm">
                  <strong>Why 90 days for backups?</strong> We maintain encrypted backups for disaster recovery purposes. These backups are automatically purged after 90 days to ensure complete data deletion.
                </p>
              </div>
            </section>

            {/* Warning */}
            <section className="mb-8">
              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                <h2 className="text-xl font-bold text-red-900 mb-3">⚠️ Warning: This Action is Permanent</h2>
                <p className="text-red-800 mb-3">
                  Once you delete your account, <strong>there is no way to recover your data</strong>. This includes:
                </p>
                <ul className="list-disc pl-6 text-red-800 space-y-1 mb-3">
                  <li>All journal entries and emotional insights</li>
                  <li>All photos, videos, and audio recordings</li>
                  <li>All mood tracking history and analytics</li>
                  <li>Your entire emotional journey timeline</li>
                </ul>
                <p className="text-red-800 font-semibold">
                  Please make sure you've exported or backed up any data you wish to keep before deleting your account.
                </p>
              </div>
            </section>

            {/* Data Export */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Export Your Data First</h2>
              <p className="text-gray-700 mb-4">
                Before deleting your account, you may want to export your data:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 mb-2">
                  <strong>To export your data:</strong>
                </p>
                <ol className="list-decimal pl-6 text-gray-700 space-y-1">
                  <li>Open the Emotion Buddy app</li>
                  <li>Go to Profile → Settings</li>
                  <li>Tap "Export My Data"</li>
                  <li>Choose your export format (JSON or PDF)</li>
                  <li>Your data will be emailed to you within 24 hours</li>
                </ol>
              </div>
            </section>

            {/* More Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">More Information</h2>
              <p className="text-gray-700 mb-4">
                For more details about how we handle your data, please review:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/privacy"
                  className="flex-1 bg-primary-50 hover:bg-primary-100 border border-primary-200 rounded-lg p-4 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">Privacy Policy</h3>
                  <p className="text-gray-600 text-sm">Learn how we protect and handle your data</p>
                </Link>
                <Link
                  href="/support"
                  className="flex-1 bg-primary-50 hover:bg-primary-100 border border-primary-200 rounded-lg p-4 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">Support Center</h3>
                  <p className="text-gray-600 text-sm">Get help with your account</p>
                </Link>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Need Help?</h2>
              <p className="text-gray-700 mb-2">
                If you have questions about account deletion, please contact us:
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong>{' '}
                <a href="mailto:support@emotionbuddy.ai" className="text-primary-500 hover:underline">
                  support@emotionbuddy.ai
                </a>
              </p>
              <p className="text-gray-600 text-sm mt-2">
                We typically respond within 24 hours.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
