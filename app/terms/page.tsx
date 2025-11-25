import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - Emotion Buddy',
  description: 'Terms of Service for Emotion Buddy - Learn about our terms and conditions for using the app.',
}

export default function TermsOfService() {
  const lastUpdated = 'January 6, 2025'

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-transparent py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">Terms of Service</h1>
            <p className="text-gray-400 mb-8">Last Updated: {lastUpdated}</p>

            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">Introduction</h2>
              <p className="text-gray-300 mb-4">
                Welcome to Emotion Buddy. These Terms of Service ("Terms") govern your access to and use of the Emotion Buddy mobile application ("App", "Service") provided by Emotion Buddy ("we", "us", "our").
              </p>
              <p className="text-gray-300 mb-4">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800">
                  <strong>Important</strong>: Please read these Terms carefully before using our Service.
                </p>
              </div>
            </section>

            {/* Section 1: Acceptance of Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-3">By using Emotion Buddy, you acknowledge that:</p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>You have read and understood these Terms</li>
                <li>You agree to be bound by these Terms and our Privacy Policy</li>
                <li>You are at least 13 years of age</li>
                <li>You have the legal capacity to enter into this agreement</li>
              </ul>
            </section>

            {/* Section 2: Description of Service */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">2. Description of Service</h2>
              <p className="text-gray-300 mb-3">Emotion Buddy provides:</p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>Digital journaling capabilities with multimedia support</li>
                <li>Mood tracking and emotional wellness monitoring</li>
                <li>AI-powered analysis and insights (optional)</li>
                <li>Analytics and pattern recognition tools</li>
                <li>Secure cloud storage for your data</li>
              </ul>
              <p className="text-gray-300">
                The Service is provided "as is" and we reserve the right to modify, suspend, or discontinue any aspect of the Service at any time.
              </p>
            </section>

            {/* Section 3: User Accounts */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">3. User Accounts</h2>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">3.1 Account Creation</h3>
              <p className="text-gray-300 mb-3">To use our Service, you must:</p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>Create an account with accurate information</li>
                <li>Provide a valid email address</li>
                <li>Choose a secure password</li>
                <li>Maintain the confidentiality of your account credentials</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">3.2 Account Responsibility</h3>
              <p className="text-gray-300 mb-3">You are responsible for:</p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>All activities that occur under your account</li>
                <li>Maintaining the security of your password</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring your account information remains accurate</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">3.3 Account Termination</h3>
              <p className="text-gray-300 mb-3">
                You may delete your account at any time through the in-app settings. We reserve the right to suspend or terminate accounts that violate these Terms.
              </p>
            </section>

            {/* Section 4: User Content */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">4. User Content</h2>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">4.1 Your Content</h3>
              <p className="text-gray-300 mb-3">
                You retain all rights to the content you create in Emotion Buddy, including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>Journal entries</li>
                <li>Mood data</li>
                <li>Photos, videos, and audio recordings</li>
                <li>All other user-generated content</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">4.2 License to Us</h3>
              <p className="text-gray-300 mb-4">
                By using our Service, you grant us a limited license to store, process, and display your content solely for the purpose of providing and improving the Service. This includes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>Storing your data on secure servers</li>
                <li>Processing content for AI analysis (if enabled)</li>
                <li>Backing up your data for security purposes</li>
                <li>Displaying your content to you within the app</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">4.3 Content Standards</h3>
              <p className="text-gray-300 mb-3">While your journal is private, you agree not to:</p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>Use the Service for illegal purposes</li>
                <li>Upload malicious code or viruses</li>
                <li>Attempt to harm or exploit the Service</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            {/* Section 5: AI Features and Third-Party Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">5. AI Features and Third-Party Services</h2>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">5.1 AI Analysis</h3>
              <p className="text-gray-300 mb-4">
                Our AI-powered features use OpenAI's API to analyze your journal entries and provide insights. By using these features, you understand that:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>Your journal text may be sent to OpenAI for processing</li>
                <li>AI analysis is optional and can be disabled</li>
                <li>AI insights are suggestions, not professional medical advice</li>
                <li>Data sent to OpenAI is not used to train their models</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">5.2 Limitations of AI</h3>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <p className="text-red-800 mb-2">
                  <strong>Important Disclaimer</strong>: AI-generated insights are not a substitute for professional mental health care. If you are experiencing a mental health crisis, please contact:
                </p>
                <ul className="text-red-800 space-y-1 pl-6 list-disc">
                  <li><strong>Emergency Services</strong>: 911 (US)</li>
                  <li><strong>Suicide Prevention Lifeline</strong>: 988 (US)</li>
                  <li><strong>Crisis Text Line</strong>: Text HOME to 741741</li>
                </ul>
              </div>
            </section>

            {/* Section 6: Not Medical Advice */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">6. Not Medical Advice</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-yellow-800 mb-3">
                  <strong>IMPORTANT</strong>: Emotion Buddy is a wellness and journaling tool, NOT a medical device or professional mental health service.
                </p>
                <ul className="text-yellow-800 space-y-2 pl-6 list-disc">
                  <li>The Service does not provide medical advice, diagnosis, or treatment</li>
                  <li>The Service is not a substitute for professional mental health care</li>
                  <li>Always seek the advice of qualified healthcare providers with questions about medical conditions</li>
                  <li>Never disregard professional medical advice because of something you read in the app</li>
                  <li>If you think you have a medical emergency, call 911 immediately</li>
                </ul>
              </div>
            </section>

            {/* Section 7: Privacy and Data Protection */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">7. Privacy and Data Protection</h2>
              <p className="text-gray-300 mb-3">
                Your privacy is important to us. Please review our{' '}
                <Link href="/privacy" className="text-primary-500 hover:underline">Privacy Policy</Link>
                {' '}to understand how we collect, use, and protect your data.
              </p>
              <p className="text-gray-300 mb-3">Key privacy commitments:</p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>We encrypt your data in transit and at rest</li>
                <li>We never sell your personal information</li>
                <li>You can delete your account and data at any time</li>
                <li>We comply with GDPR, CCPA, and other privacy laws</li>
              </ul>
            </section>

            {/* Section 8: Fees and Payments */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">8. Fees and Payments</h2>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">8.1 Free Service</h3>
              <p className="text-gray-300 mb-4">
                Emotion Buddy is currently free to use. We reserve the right to introduce paid features or subscriptions in the future with advance notice.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">8.2 Future Paid Features</h3>
              <p className="text-gray-300 mb-4">
                If we introduce paid features:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>Existing free features will remain free</li>
                <li>Users will be notified in advance</li>
                <li>Pricing will be clearly disclosed</li>
                <li>Refund policies will be provided</li>
              </ul>
            </section>

            {/* Section 9: Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">9. Intellectual Property</h2>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">9.1 Our Rights</h3>
              <p className="text-gray-300 mb-3">
                All rights, title, and interest in the Service (excluding user content) belong to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>App design and user interface</li>
                <li>Software code and algorithms</li>
                <li>Trademarks, logos, and branding</li>
                <li>Documentation and content created by us</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">9.2 Your Rights</h3>
              <p className="text-gray-300 mb-3">
                You retain full ownership of all content you create in Emotion Buddy.
              </p>
            </section>

            {/* Section 10: Disclaimer of Warranties */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">10. Disclaimer of Warranties</h2>
              <p className="text-gray-300 mb-4">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>Warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Uninterrupted or error-free operation</li>
                <li>Accuracy or reliability of results</li>
              </ul>
              <p className="text-gray-300">
                We do not warrant that the Service will meet your requirements or that defects will be corrected.
              </p>
            </section>

            {/* Section 11: Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">11. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL EMOTION BUDDY BE LIABLE FOR:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>Indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, data, use, or goodwill</li>
                <li>Service interruptions or data loss</li>
                <li>Any damages arising from your use or inability to use the Service</li>
              </ul>
              <p className="text-gray-300">
                Our total liability shall not exceed $100 USD or the amount you paid us in the past 12 months, whichever is greater.
              </p>
            </section>

            {/* Section 12: Indemnification */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">12. Indemnification</h2>
              <p className="text-gray-300 mb-4">
                You agree to indemnify and hold harmless Emotion Buddy from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Your user content</li>
              </ul>
            </section>

            {/* Section 13: Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-300 mb-3">
                We may modify these Terms at any time. When we do:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>We will update the "Last Updated" date</li>
                <li>We will notify you through the app or via email</li>
                <li>Continued use of the Service constitutes acceptance</li>
                <li>You can discontinue use if you disagree with changes</li>
              </ul>
            </section>

            {/* Section 14: Termination */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">14. Termination</h2>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">14.1 By You</h3>
              <p className="text-gray-300 mb-4">
                You may terminate your account at any time by using the account deletion feature in the app.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">14.2 By Us</h3>
              <p className="text-gray-300 mb-3">
                We may suspend or terminate your account if:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>You violate these Terms</li>
                <li>You engage in fraudulent or illegal activity</li>
                <li>Required by law</li>
                <li>We discontinue the Service</li>
              </ul>
            </section>

            {/* Section 15: Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">15. Governing Law</h2>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">15.1 Applicable Law</h3>
              <p className="text-gray-300 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">15.2 Dispute Resolution</h3>
              <p className="text-gray-300 mb-3">
                In the event of any dispute, claim, or controversy arising out of or relating to these Terms or the Service:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>We encourage you to first contact us at support@emotionbuddy.ai to resolve the issue informally</li>
                <li>If informal resolution is not successful, disputes may be resolved through binding arbitration or small claims court</li>
                <li>Arbitration shall be conducted by a neutral arbitrator in accordance with applicable arbitration rules</li>
                <li>Each party shall bear their own costs and fees unless otherwise awarded by the arbitrator</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">15.3 Company Information</h3>
              <p className="text-gray-300 mb-3">
                <strong>Legal Entity:</strong> Emotion Buddy
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Contact:</strong> support@emotionbuddy.ai
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">15.4 Waiver of Class Actions</h3>
              <p className="text-gray-300 mb-4">
                You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
              </p>
            </section>

            {/* Section 16: Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">16. Contact Us</h2>
              <p className="text-gray-300 mb-3">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="bg-transparent rounded-lg p-4">
                <p className="text-gray-300"><strong>Email</strong>: support@emotionbuddy.ai</p>
                <p className="text-gray-300"><strong>Website</strong>: <Link href="/" className="text-primary-500 hover:underline">https://emotionbuddy.ai</Link></p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="bg-primary-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-100 mb-3">Acknowledgment</h2>
              <p className="text-gray-300">
                By using Emotion Buddy, you acknowledge that you have read these Terms of Service, understand them, and agree to be bound by them.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
