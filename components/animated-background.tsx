"use client"

import { useEffect, useRef } from "react"

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    // Define geometric shapes first before referencing them
    const geometricShapes = [
      { x: width * 0.2, y: height * 0.3, size: Math.min(300, width * 0.3) },
      { x: width * 0.8, y: height * 0.7, size: Math.min(250, width * 0.25) },
      { x: width * 0.5, y: height * 0.1, size: Math.min(200, width * 0.2) },
    ]

    // Set canvas dimensions to match viewport
    const setCanvasDimensions = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height

      // Update geometric shapes positions when resizing
      geometricShapes[0] = { x: width * 0.2, y: height * 0.3, size: Math.min(300, width * 0.3) }
      geometricShapes[1] = { x: width * 0.8, y: height * 0.7, size: Math.min(250, width * 0.25) }
      geometricShapes[2] = { x: width * 0.5, y: height * 0.1, size: Math.min(200, width * 0.2) }
    }

    // Initialize canvas dimensions
    canvas.width = width
    canvas.height = height

    const particles: Particle[] = []
    const particleCount = 100
    let mouseX = width / 2
    let mouseY = height / 2

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = Math.random() * 0.3 - 0.15
        this.speedY = Math.random() * 0.3 - 0.15
        this.opacity = Math.random() * 0.2 + 0.1
        this.color = `rgba(59, 130, 246, ${this.opacity})`
      }

      update() {
        // Add mouse interaction
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 120) {
          const angle = Math.atan2(dy, dx)
          const force = (120 - distance) / 1500
          this.speedX -= Math.cos(angle) * force
          this.speedY -= Math.sin(angle) * force
        }

        this.x += this.speedX
        this.y += this.speedY

        // Boundary check
        if (this.x < 0 || this.x > width) this.speedX *= -1
        if (this.y < 0 || this.y > height) this.speedY *= -1
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Connect particles with lines
    function connectParticles() {
      if (!ctx) return
      const maxDistance = 180

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.15})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    function drawGeometricShapes() {
      if (!ctx) return

      geometricShapes.forEach((shape) => {
        const gradient = ctx.createRadialGradient(shape.x, shape.y, 0, shape.x, shape.y, shape.size)

        gradient.addColorStop(0, "rgba(59, 130, 246, 0.05)")
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      drawGeometricShapes()

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      connectParticles()
      requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    function handleResize() {
      setCanvasDimensions()
    }

    // Handle mouse movement
    function handleMouseMove(e: MouseEvent) {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="animated-bg" />
}

export default AnimatedBackground

