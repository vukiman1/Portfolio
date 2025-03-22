import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import AnimatedBackground from "@/components/animated-background"
import { ScrollToTop } from "@/components/scroll-to-top"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      <AnimatedBackground />
      <Navbar />
      <div className="container mx-auto px-4 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
      <ScrollToTop />
    </div>
  )
}

