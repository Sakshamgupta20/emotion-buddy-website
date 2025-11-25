import Link from 'next/link'
import { Sparkles, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-slate-950/50 backdrop-blur-xl border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/50">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl blur-md opacity-50"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                Emotion Buddy
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Transform your emotional well-being with AI-powered insights. Track patterns, celebrate growth, and understand yourself better.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-fuchsia-400 fill-fuchsia-400 animate-pulse" />
              <span>for your mental health</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-200 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#features" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-4 transition-all duration-300 mr-2"></span>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#download" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-4 transition-all duration-300 mr-2"></span>
                  Download
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-200 mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/support" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-4 transition-all duration-300 mr-2"></span>
                  Help Center
                </Link>
              </li>
              <li>
                <a href="mailto:support@emotionbuddy.ai" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-4 transition-all duration-300 mr-2"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-200 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-4 transition-all duration-300 mr-2"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-4 transition-all duration-300 mr-2"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/data-deletion" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-4 transition-all duration-300 mr-2"></span>
                  Data Deletion
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Emotion Buddy. All rights reserved.
          </p>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm text-gray-400">AES-256 Encrypted</span>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
    </footer>
  )
}
