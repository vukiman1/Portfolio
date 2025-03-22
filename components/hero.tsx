"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowDown, Github, Linkedin, Mail, Code, Terminal, Facebook } from "lucide-react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { GradientButton } from "@/components/ui/gradient-button"

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={heroRef} className="hero-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="geometric-shape w-96 h-96 top-1/4 left-1/4"></div>
        <div className="geometric-shape w-96 h-96 bottom-1/4 right-1/4"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
            <Code className="w-4 h-4 mr-2" />
            Backend Developer
            <Terminal className="w-4 h-4 ml-2" />
          </span>
        </motion.div>

        <h1 className="hero-title">
          <span className="text-white">Vũ Kim An</span>
        </h1>

        <div className="h-12 mb-10">
          <TypeAnimation
            sequence={[
              "Backend Developer",
              2000,
              "NestJS Expert",
              2000,
              "Node.js Developer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            className="hero-subtitle"
            repeat={Number.POSITIVE_INFINITY}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="hero-description"
        >
          A highly motivated and friendly software developer, always eager to learn and grow in a professional working
          environment. I thrive on challenges and constantly seek opportunities to develop my skills and expand my
          knowledge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hero-cta flex justify-center gap-6 w-full"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/vukiman1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
          >
            <Github className="h-5 w-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/an-v%C5%A9-18181b307/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
          >
            <Linkedin className="h-5 w-5" />
          </motion.a> 
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:anvu734@gmail.com"
            className="btn-icon"
          >
            <Mail className="h-5 w-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            href="https://www.facebook.com/vukiman1/"
            className="btn-icon"
          >
            <Facebook  className="h-5 w-5" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <GradientButton
            text="Explore"
            icon={<ArrowDown className="h-5 w-5" />}
            variant="blue"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="hero-scroll-indicator"
      >
        <motion.div className="flex flex-col items-center gap-2" whileHover={{ scale: 1.1 }}>
          <span className="text-xs text-primary/80 font-medium tracking-wider">SCROLL</span>
          <div className="w-8 h-14 border-2 border-primary/40 rounded-full flex justify-center backdrop-blur-sm bg-primary/5 shadow-lg shadow-primary/20">
            <motion.div
              animate={{
                y: [0, 18, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
              className="w-3 h-3 bg-primary rounded-full mt-2 shadow-md shadow-primary/50"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

