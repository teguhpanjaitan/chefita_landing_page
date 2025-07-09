"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-orange-100/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">👩‍🍳</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                Chefita
              </h1>
              <p className="text-xs text-gray-500 font-medium">AI Kitchen Assistant</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Fitur
            </a>
            <a
              href="#demo"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Demo
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Testimoni
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Harga
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              FAQ
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              className="border-2 border-orange-300 text-orange-600 hover:bg-orange-50 rounded-xl font-semibold transition-all duration-300 bg-transparent"
            >
              🎥 Demo
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              📲 Coba Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors duration-300"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? "rotate-45" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 pb-6" : "max-h-0"}`}
        >
          <nav className="flex flex-col gap-4 pt-4 border-t border-orange-100">
            <a
              href="#features"
              className="text-gray-700 hover:text-orange-600 font-medium py-2 px-4 rounded-xl hover:bg-orange-50 transition-all duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
                setTimeout(() => {
                  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
                }, 300)
              }}
            >
              🚀 Fitur Chefita
            </a>
            <a
              href="#demo"
              className="text-gray-700 hover:text-orange-600 font-medium py-2 px-4 rounded-xl hover:bg-orange-50 transition-all duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
                setTimeout(() => {
                  document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })
                }, 300)
              }}
            >
              🎥 Lihat Demo
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-orange-600 font-medium py-2 px-4 rounded-xl hover:bg-orange-50 transition-all duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
                setTimeout(() => {
                  document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })
                }, 300)
              }}
            >
              💬 Testimoni
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-orange-600 font-medium py-2 px-4 rounded-xl hover:bg-orange-50 transition-all duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
                setTimeout(() => {
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                }, 300)
              }}
            >
              💎 Harga
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-orange-600 font-medium py-2 px-4 rounded-xl hover:bg-orange-50 transition-all duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
                setTimeout(() => {
                  document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })
                }, 300)
              }}
            >
              ❓ FAQ
            </a>

            <div className="flex flex-col gap-3 pt-4 border-t border-orange-100">
              <Button
                variant="outline"
                className="border-2 border-orange-300 text-orange-600 hover:bg-orange-50 rounded-xl font-semibold bg-transparent"
                onClick={() => setIsMenuOpen(false)}
              >
                🎥 Lihat Demo
              </Button>
              <Button
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl font-semibold shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                📲 Coba Gratis Sekarang
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
