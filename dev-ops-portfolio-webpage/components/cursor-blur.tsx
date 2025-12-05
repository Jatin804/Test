"use client"

import { useEffect, useState } from "react"

export function CursorBlur() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <div
      className="fixed pointer-events-none z-0 transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Main blur gradient */}
      <div
        className="w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.03) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  )
}
