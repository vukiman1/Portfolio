"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"
import LanguageSwitcher from "@/components/language-switcher"
import ColorSchemePicker from "@/components/color-scheme-picker"
import { useLanguage } from "@/hooks/use-language"

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.education"), href: "#education" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [mobileMenuOpen])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white">
          <span className="text-primary">V</span>KA
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-link ${activeSection === item.href.substring(1) ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              {item.name}
            </a>
          ))}

          <div className="ml-2 flex items-center gap-3">
            <ColorSchemePicker />
            <LanguageSwitcher />
            <a 
              href="assets/myCV/CV_Vu_Kim_AN_Backend_Developer.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >            
            <GradientButton text={t("nav.downloadCV")} icon={<Download className="h-5 w-5" />} variant="gradient" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ColorSchemePicker />
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" className="text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          ref={mobileMenuRef}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#050A18]/95 backdrop-blur-md border-t border-[#1E293B]/50"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${activeSection === item.href.substring(1) ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  })
                  setMobileMenuOpen(false)
                }}
              >
                {item.name}
              </a>
            ))}

            <GradientButton
              text={t("nav.downloadCV")}
              icon={<Download className="h-5 w-5" />}
              variant="gradient"
              className="w-full mt-2"
            />
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

