"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Code, Briefcase, GraduationCap, Mail, ChevronUp, FolderOpen } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function MobileNavigation() {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState("home")
  const [isExpanded, setIsExpanded] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const [clickedItem, setClickedItem] = useState<string | null>(null)

  const navItems = [
    { id: "home", name: t("nav.home"), icon: <Home className="h-5 w-5" />, href: "#" },
    { id: "about", name: t("nav.about"), icon: <User className="h-5 w-5" />, href: "#about" },
    { id: "skills", name: t("nav.skills"), icon: <Code className="h-5 w-5" />, href: "#skills" },
    { id: "experience", name: t("nav.experience"), icon: <Briefcase className="h-5 w-5" />, href: "#experience" },
    { id: "projects", name: t("nav.projects"), icon: <FolderOpen className="h-5 w-5" />, href: "#projects" },
    { id: "education", name: t("nav.education"), icon: <GraduationCap className="h-5 w-5" />, href: "#education" },
    { id: "contact", name: t("nav.contact"), icon: <Mail className="h-5 w-5" />, href: "#contact" },
  ]

  // Determine active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      // Special case for home section - if near the top of the page
      if (scrollPosition < 100) {
        setActiveSection("home")
        return
      }

      // Check other sections
      for (const item of navItems) {
        if (item.id === "home") continue // Skip home in this loop

        const element = document.getElementById(item.id)
        if (element) {
          const offsetTop = element.offsetTop - 100 // Account for header
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check on mount
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle swipe gestures for navigation
  const handleSwipe = (direction: "left" | "right") => {
    const currentIndex = navItems.findIndex((item) => item.id === activeSection)

    if (direction === "left" && currentIndex < navItems.length - 1) {
      // Navigate to next section
      const nextSection = navItems[currentIndex + 1]
      document.querySelector(nextSection.href)?.scrollIntoView({ behavior: "smooth" })
    } else if (direction === "right" && currentIndex > 0) {
      // Navigate to previous section
      const prevSection = navItems[currentIndex - 1]
      document.querySelector(prevSection.href)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Add touch event handlers for swipe detection
  useEffect(() => {
    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].clientX
      handleSwipeGesture()
    }

    const handleSwipeGesture = () => {
      const swipeThreshold = 50 // Minimum distance for a swipe

      if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left
        handleSwipe("left")
      } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right
        handleSwipe("right")
      }
    }

    document.addEventListener("touchstart", handleTouchStart, false)
    document.addEventListener("touchend", handleTouchEnd, false)

    return () => {
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [activeSection])

  // Handle click outside to collapse expanded navigation
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isExpanded) {
        setIsExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isExpanded])

  // Update the handleNavClick function to include haptic feedback
  const handleNavClick = (e: React.MouseEvent, itemId: string, href: string) => {
    e.preventDefault()

    // Set the clicked item to trigger animation
    setClickedItem(itemId)

    // Reset the animation after it completes
    setTimeout(() => {
      setClickedItem(null)
    }, 300)

    // Add haptic feedback class to the target element
    const target = e.currentTarget as HTMLElement
    target.classList.add("nav-haptic-feedback")
    setTimeout(() => {
      target.classList.remove("nav-haptic-feedback")
    }, 600)

    // Handle home section specially
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.querySelector(href)
      if (element) {
        // Calculate position accounting for the fixed header
        const headerHeight = 60 // Approximate header height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }

    setIsExpanded(false)
  }

  // Add a media query check for landscape mode
  useEffect(() => {
    const checkOrientation = () => {
      const isLandscape = window.matchMedia("(orientation: landscape) and (max-height: 500px)").matches
      document.documentElement.classList.toggle("landscape-mobile", isLandscape)
    }

    window.addEventListener("resize", checkOrientation)
    window.addEventListener("orientationchange", checkOrientation)

    // Initial check
    checkOrientation()

    return () => {
      window.removeEventListener("resize", checkOrientation)
      window.removeEventListener("orientationchange", checkOrientation)
    }
  }, [])

  return (
    <>
      {/* Bottom navigation bar for mobile */}
      <div
        ref={navRef}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#050A18]/95 backdrop-blur-md border-t border-primary/20 transition-all duration-300 mobile-nav-bottom"
        style={{
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        {/* Main navigation bar */}
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.slice(0, 5).map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              className={`mobile-nav-item relative flex flex-col items-center justify-center p-2 rounded-lg transition-colors duration-300 ${
                activeSection === item.id ? "text-primary active" : "text-gray-400 hover:text-gray-200"
              } ${clickedItem === item.id ? "nav-item-pulse" : ""}`}
              onClick={(e) => handleNavClick(e, item.id, item.href)}
              animate={
                clickedItem === item.id
                  ? {
                      scale: [1, 1.15, 1],
                      transition: { duration: 0.3 },
                    }
                  : {}
              }
            >
              <div className={`p-1.5 rounded-full ${activeSection === item.id ? "bg-primary/10" : ""}`}>
                {item.icon}
              </div>
              <span className="text-xs mt-1">{item.name}</span>
            </motion.a>
          ))}

          {/* More button that expands to show additional items */}
          <motion.button
            className={`mobile-nav-item relative flex flex-col items-center justify-center p-2 rounded-lg transition-colors duration-300 ${
              isExpanded ? "text-primary active" : "text-gray-400 hover:text-gray-200"
            } ${clickedItem === "more" ? "nav-item-pulse" : ""}`}
            onClick={(e) => {
              setIsExpanded(!isExpanded)
              setClickedItem("more")
              setTimeout(() => setClickedItem(null), 300)

              // Add haptic feedback
              const target = e.currentTarget as HTMLElement
              target.classList.add("nav-haptic-feedback")
              setTimeout(() => {
                target.classList.remove("nav-haptic-feedback")
              }, 600)
            }}
            animate={
              clickedItem === "more"
                ? {
                    scale: [1, 1.15, 1],
                    transition: { duration: 0.3 },
                  }
                : {}
            }
          >
            <div className={`p-1.5 rounded-full ${isExpanded ? "bg-primary/10" : ""}`}>
              <ChevronUp className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
            </div>
            <span className="text-xs mt-1">{t("nav.more")}</span>
          </motion.button>
        </div>

        {/* Expanded navigation panel */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#050A18]/95 border-t border-primary/10 px-4 py-3"
            >
              <div className="grid grid-cols-3 gap-4">
                {navItems.slice(5).map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className={`mobile-nav-item relative flex flex-col items-center justify-center p-3 rounded-lg transition-colors duration-300 ${
                      activeSection === item.id
                        ? "bg-primary/10 text-primary active"
                        : "text-gray-400 hover:text-gray-200 hover:bg-primary/5"
                    } ${clickedItem === item.id ? "nav-item-pulse" : ""}`}
                    onClick={(e) => handleNavClick(e, item.id, item.href)}
                    animate={
                      clickedItem === item.id
                        ? {
                            scale: [1, 1.15, 1],
                            transition: { duration: 0.3 },
                          }
                        : {}
                    }
                  >
                    {item.icon}
                    <span className="text-xs mt-2">{item.name}</span>
                  </motion.a>
                ))}

                {/* Additional quick actions can be added here */}
                <motion.a
                  href="#"
                  className={`mobile-nav-item relative flex flex-col items-center justify-center p-3 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-primary/5 transition-colors duration-300 ${clickedItem === "top" ? "nav-item-pulse" : ""}`}
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    setIsExpanded(false)
                    setClickedItem("top")

                    // Add haptic feedback
                    const target = e.currentTarget as HTMLElement
                    target.classList.add("nav-haptic-feedback")
                    setTimeout(() => {
                      target.classList.remove("nav-haptic-feedback")
                    }, 600)

                    setTimeout(() => setClickedItem(null), 300)
                  }}
                  animate={
                    clickedItem === "top"
                      ? {
                          scale: [1, 1.15, 1],
                          transition: { duration: 0.3 },
                        }
                      : {}
                  }
                >
                  <ChevronUp className="h-5 w-5" />
                  <span className="text-xs mt-2">{t("nav.top")}</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Swipe indicator (subtle visual cue for users) */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 md:hidden pointer-events-none">
        <AnimatePresence>
          {activeSection !== "home" && activeSection !== "contact" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/20"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
              <div className="text-xs text-primary/70">{t("nav.swipe")}</div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

