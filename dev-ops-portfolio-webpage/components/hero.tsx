"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Cloud, Server, GitBranch, Github, Linkedin, Mail } from "lucide-react"

const roles = ["Cloud Architect", "DevOps Engineer", "Platform Engineer", "SRE Specialist"]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left content */}
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <div className="space-y-2">
            <p className="text-foreground font-mono text-sm tracking-wider">{">"} Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground">Alex Chen</h1>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              <span>{displayText}</span>
              <span className="w-0.5 h-6 sm:h-8 bg-foreground animate-terminal-blink" />
            </div>
          </div>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            I build and automate cloud infrastructure at scale. Specializing in AWS, Kubernetes, and CI/CD pipelines to
            deliver resilient, secure, and cost-effective solutions for modern applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto group relative px-6 py-3 bg-foreground text-background font-semibold rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10">Get in Touch</span>
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3 border border-foreground/30 text-foreground font-semibold rounded-lg hover:bg-foreground/5 transition-all text-center"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:alex@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right content - Animated graphic */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-80 h-80">
            {/* Central hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-foreground flex items-center justify-center shadow-2xl">
              <Cloud className="w-10 h-10 text-background" />
            </div>

            {/* Orbiting elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-float">
              <div className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg">
                <Server className="w-8 h-8 text-foreground" />
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-float-delayed">
              <div className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg">
                <GitBranch className="w-8 h-8 text-foreground" />
              </div>
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-float-slow">
              <div className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.522 0 10-4.477 10-10s-4.478-10-10-10zm0 2a8 8 0 110 16 8 8 0 010-16zm0 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" />
                </svg>
              </div>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 animate-float">
              <div className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 01-2.075-2.597l2.578-.437.489.611zm-.411-1.007l-.517-.644-2.57.436a5.15 5.15 0 01-.069-1.132h2.626l.53.663v.677zm-2.538-2.84H4.631a5.171 5.171 0 01.73-2.263l2.318 1.386-.424 2.877zm2.097-1.402l-.522-.652-2.322-1.39a5.168 5.168 0 011.836-1.459l1.508 2.844-.5.657zm1.386-.884l-.005-.012-1.502-2.833a5.159 5.159 0 012.372-.437v3.102l-.865.18zm1.722-.17V4.994c.82.075 1.588.371 2.249.82l-1.431 2.677-.818-.497zm1.694 1.012l.48.598 1.426-2.667a5.152 5.152 0 011.727 1.745l-2.616 1.54-.017-.216zm1.695 2.175l.027-.004 2.61-1.538c.287.651.421 1.375.397 2.105h-2.502l-.532-.563zm-.51 1.65l.52.652 2.477.42a5.162 5.162 0 01-1.14 2.226l-1.838-2.54-.019-.758z" />
                </svg>
              </div>
            </div>

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full">
              <line
                x1="50%"
                y1="30%"
                x2="50%"
                y2="42%"
                stroke="currentColor"
                className="text-border"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <line
                x1="50%"
                y1="58%"
                x2="50%"
                y2="70%"
                stroke="currentColor"
                className="text-border"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <line
                x1="30%"
                y1="50%"
                x2="42%"
                y2="50%"
                stroke="currentColor"
                className="text-border"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <line
                x1="58%"
                y1="50%"
                x2="70%"
                y2="50%"
                stroke="currentColor"
                className="text-border"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  )
}
