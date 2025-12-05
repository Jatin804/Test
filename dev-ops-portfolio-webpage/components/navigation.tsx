"use client"

import { useState, useEffect } from "react"
import { Menu, X, Terminal } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "py-6"}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-foreground font-mono text-lg group">
          <Terminal className="w-5 h-5 transition-transform group-hover:rotate-12" />
          <span className="font-semibold">alex.chen</span>
          <span className="animate-terminal-blink">_</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm uppercase tracking-wider"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border border-border mt-4 mx-4 sm:mx-6 rounded-xl p-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm uppercase tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
