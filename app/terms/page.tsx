import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FileText, AlertTriangle, User, FileCheck, Brain, Heart, CreditCard, Copyright, Scale, Mail } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service - Emotion Buddy',
  description: 'Terms of Service for Emotion Buddy - Learn about our terms and conditions for using the app.',
}

export default function TermsOfService() {
  const lastUpdated = 'January 6, 2025'

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Terms of Service</h1>
            <p className="text-gray-500">Last Updated: {lastUpdated}</p>
          </div>

          <div className="glass-card p-8 md:p-12">
            {/* Introduction */}
            <section className="content-section">
              <h2>Introduction</h2>
              <p>
                Welcome to Emotion Buddy. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Emotion Buddy mobile application (&quot;App&quot;, &quot;Service&quot;) provided by Emotion Buddy (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
              </p>
              <p>
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-amber-800 font-semibold">
                  <AlertTriangle className="w-5 h-5 inline mr-2" />
                  Important: Please read these Terms carefully before using our Service.
                </p>
              </div>
            </section>

            {/* Section 1: Acceptance of Terms */}
            <section className="content-section">
              <h2><FileCheck className="w-6 h-6 text-violet-500" /> 1. Acceptance of Terms</h2>
              <p>By using Emotion Buddy, you acknowledge that:</p>
              <ul>
                <li>You have read and understood these Terms</li>
                <li>You agree to be bound by these Terms and our Privacy Policy</li>
                <li>You are at least 13 years of age</li>
                <li>You have the legal capacity to enter into this agreement</li>
              </ul>
            </section>

            {/* Section 2: Description of Service */}
            <section className="content-section">
              <h2>2. Description of Service</h2>
              <p>Emotion Buddy provides:</p>
              <ul>
                <li>Digital journaling capabilities with multimedia support</li>
                <li>Mood tracking and emotional wellness monitoring</li>
                <li>AI-powered analysis and insights (optional)</li>
                <li>Analytics and pattern recognition tools</li>
                <li>Secure cloud storage for your data</li>
              </ul>
              <p>
                The Service is provided &quot;as is&quot; and we reserve the right to modify, suspend, or discontinue any aspect of the Service at any time.
              </p>
            </section>

            {/* Section 3: User Accounts */}
            <section className="content-section">
              <h2><User className="w-6 h-6 text-violet-500" /> 3. User Accounts</h2>

              <h3>3.1 Account Creation</h3>
              <p>To use our Service, you must:</p>
              <ul>
                <li>Create an account with accurate information</li>
                <li>Provide a valid email address</li>
                <li>Choose a secure password</li>
                <li>Maintain the confidentiality of your account credentials</li>
              </ul>

              <h3>3.2 Account Responsibility</h3>
              <p>You are responsible for:</p>
              <ul>
                <li>All activities that occur under your account</li>
                <li>Maintaining the security of your password</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring your account information remains accurate</li>
              </ul>

              <h3>3.3 Account Termination</h3>
              <p>
                You may delete your account at any time through the in-app settings. We reserve the right to suspend or terminate accounts that violate these Terms.
              </p>
            </section>

            {/* Section 4: User Content */}
            <section className="content-section">
              <h2>4. User Content</h2>

              <h3>4.1 Your Content</h3>
              <p>You retain all rights to the content you create in Emotion Buddy, including:</p>
              <ul>
                <li>Journal entries</li>
                <li>Mood data</li>
                <li>Photos, videos, and audio recordings</li>
                <li>All other user-generated content</li>
              </ul>

              <h3>4.2 License to Us</h3>
              <p>
                By using our Service, you grant us a limited license to store, process, and display your content solely for the purpose of providing and improving the Service. This includes:
              </p>
              <ul>
                <li>Storing your data on secure servers</li>
                <li>Processing content for AI analysis (if enabled)</li>
                <li>Backing up your data for security purposes</li>
                <li>Displaying your content to you within the app</li>
              </ul>

              <h3>4.3 Content Standards</h3>
              <p>While your journal is private, you agree not to:</p>
              <ul>
                <li>Use the Service for illegal purposes</li>
                <li>Upload malicious code or viruses</li>
                <li>Attempt to harm or exploit the Service</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            {/* Section 5: AI Features and Third-Party Services */}
            <section className="content-section">
              <h2><Brain className="w-6 h-6 text-violet-500" /> 5. AI Features and Third-Party Services</h2>

              <h3>5.1 AI Analysis</h3>
              <p>
                Our AI-powered features use OpenAI&apos;s API to analyze your journal entries and provide insights. By using these features, you understand that:
              </p>
              <ul>
                <li>Your journal text may be sent to OpenAI for processing</li>
                <li>AI analysis is optional and can be disabled</li>
                <li>AI insights are suggestions, not professional medical advice</li>
                <li>Data sent to OpenAI is not used to train their models</li>
              </ul>

              <h3>5.2 Limitations of AI</h3>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-red-800 mb-2 font-semibold">
                  Important Disclaimer: AI-generated insights are not a substitute for professional mental health care.
                </p>
                <p className="text-red-700 text-sm">If you are experiencing a mental health crisis, please contact:</p>
                <ul className="text-red-700 text-sm mt-2">
                  <li><strong>Emergency Services</strong>: 911 (US)</li>
                  <li><strong>Suicide Prevention Lifeline</strong>: 988 (US)</li>
                  <li><strong>Crisis Text Line</strong>: Text HOME to 741741</li>
                </ul>
              </div>
            </section>

            {/* Section 6: Not Medical Advice */}
            <section className="content-section">
              <h2><Heart className="w-6 h-6 text-violet-500" /> 6. Not Medical Advice</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-amber-800 mb-3 font-semibold">
                  IMPORTANT: Emotion Buddy is a wellness and journaling tool, NOT a medical device or professional mental health service.
                </p>
                <ul className="text-amber-700 space-y-2">
                  <li>The Service does not provide medical advice, diagnosis, or treatment</li>
                  <li>The Service is not a substitute for professional mental health care</li>
                  <li>Always seek the advice of qualified healthcare providers with questions about medical conditions</li>
                  <li>Never disregard professional medical advice because of something you read in the app</li>
                  <li>If you think you have a medical emergency, call 911 immediately</li>
                </ul>
              </div>
            </section>

            {/* Section 7: Privacy and Data Protection */}
            <section className="content-section">
              <h2>7. Privacy and Data Protection</h2>
              <p>
                Your privacy is important to us. Please review our{' '}
                <Link href="/privacy" className="text-violet-600 hover:underline font-medium">Privacy Policy</Link>
                {' '}to understand how we collect, use, and protect your data.
              </p>
              <p className="font-semibold text-gray-800">Key privacy commitments:</p>
              <ul>
                <li>We encrypt your data in transit and at rest</li>
                <li>We never sell your personal information</li>
                <li>You can delete your account and data at any time</li>
                <li>We comply with GDPR, CCPA, and other privacy laws</li>
              </ul>
            </section>

            {/* Section 8: Fees and Payments */}
            <section className="content-section">
              <h2><CreditCard className="w-6 h-6 text-violet-500" /> 8. Fees and Payments</h2>

              <h3>8.1 Free Service</h3>
              <p>
                Emotion Buddy is currently free to use. We reserve the right to introduce paid features or subscriptions in the future with advance notice.
              </p>

              <h3>8.2 Future Paid Features</h3>
              <p>If we introduce paid features:</p>
              <ul>
                <li>Existing free features will remain free</li>
                <li>Users will be notified in advance</li>
                <li>Pricing will be clearly disclosed</li>
                <li>Refund policies will be provided</li>
              </ul>
            </section>

            {/* Section 9: Intellectual Property */}
            <section className="content-section">
              <h2><Copyright className="w-6 h-6 text-violet-500" /> 9. Intellectual Property</h2>

              <h3>9.1 Our Rights</h3>
              <p>All rights, title, and interest in the Service (excluding user content) belong to us, including:</p>
              <ul>
                <li>App design and user interface</li>
                <li>Software code and algorithms</li>
                <li>Trademarks, logos, and branding</li>
                <li>Documentation and content created by us</li>
              </ul>

              <h3>9.2 Your Rights</h3>
              <p>You retain full ownership of all content you create in Emotion Buddy.</p>
            </section>

            {/* Section 10: Disclaimer of Warranties */}
            <section className="content-section">
              <h2>10. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul>
                <li>Warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Uninterrupted or error-free operation</li>
                <li>Accuracy or reliability of results</li>
              </ul>
              <p>
                We do not warrant that the Service will meet your requirements or that defects will be corrected.
              </p>
            </section>

            {/* Section 11: Limitation of Liability */}
            <section className="content-section">
              <h2>11. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL EMOTION BUDDY BE LIABLE FOR:
              </p>
              <ul>
                <li>Indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, data, use, or goodwill</li>
                <li>Service interruptions or data loss</li>
                <li>Any damages arising from your use or inability to use the Service</li>
              </ul>
              <p>
                Our total liability shall not exceed $100 USD or the amount you paid us in the past 12 months, whichever is greater.
              </p>
            </section>

            {/* Section 12-15 simplified */}
            <section className="content-section">
              <h2>12. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Emotion Buddy from any claims, damages, losses, liabilities, and expenses arising from your use of the Service, your violation of these Terms, or your violation of any rights of another party.
              </p>
            </section>

            <section className="content-section">
              <h2>13. Changes to Terms</h2>
              <p>We may modify these Terms at any time. When we do:</p>
              <ul>
                <li>We will update the &quot;Last Updated&quot; date</li>
                <li>We will notify you through the app or via email</li>
                <li>Continued use of the Service constitutes acceptance</li>
                <li>You can discontinue use if you disagree with changes</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>14. Termination</h2>
              <p>
                You may terminate your account at any time by using the account deletion feature in the app. We may suspend or terminate your account if you violate these Terms, engage in fraudulent or illegal activity, or as required by law.
              </p>
            </section>

            <section className="content-section">
              <h2><Scale className="w-6 h-6 text-violet-500" /> 15. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States. In the event of any dispute, we encourage you to first contact us at support@emotionbuddy.ai to resolve the issue informally.
              </p>
            </section>

            {/* Section 16: Contact Information */}
            <section className="content-section">
              <h2><Mail className="w-6 h-6 text-violet-500" /> 16. Contact Us</h2>
              <p>If you have questions about these Terms, please contact us:</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-700"><strong>Email</strong>: support@emotionbuddy.ai</p>
                <p className="text-gray-700"><strong>Website</strong>: <Link href="/" className="text-violet-600 hover:underline">emotionbuddy.ai</Link></p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-2xl p-6 border border-violet-200">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Acknowledgment</h2>
              <p className="text-gray-700">
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
