'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-300 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">Emotion Buddy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-600 hover:text-primary-500 transition-colors">
              Features
            </Link>
            <Link href="/#download" className="text-gray-600 hover:text-primary-500 transition-colors">
              Download
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-primary-500 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-primary-500 transition-colors">
              Terms
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/#features" className="text-gray-600 hover:text-primary-500" onClick={() => setMobileMenuOpen(false)}>
                Features
              </Link>
              <Link href="/#download" className="text-gray-600 hover:text-primary-500" onClick={() => setMobileMenuOpen(false)}>
                Download
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-primary-500" onClick={() => setMobileMenuOpen(false)}>
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-primary-500" onClick={() => setMobileMenuOpen(false)}>
                Terms
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
