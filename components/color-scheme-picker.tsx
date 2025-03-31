"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Palette, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme, type ColorScheme } from "@/hooks/use-theme"
import { useLanguage } from "@/hooks/use-language"

interface ColorOption {
  id: ColorScheme
  name: string
  color: string
  textColor: string
  borderColor: string
}

export default function ColorSchemePicker() {
  const { t } = useLanguage()
  const { colorScheme, setColorScheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Color scheme options with display properties
  const colorOptions: ColorOption[] = [
    { id: "blue", name: t("theme.blue") || "Blue", color: "#3b82f6", textColor: "white", borderColor: "#60a5fa" },
    { id: "purple", name: t("theme.purple") || "Purple", color: "#a855f7", textColor: "white", borderColor: "#c084fc" },
    { id: "green", name: t("theme.green") || "Green", color: "#10b981", textColor: "white", borderColor: "#34d399" },
    { id: "orange", name: t("theme.orange") || "Orange", color: "#f97316", textColor: "white", borderColor: "#fb923c" },
    { id: "pink", name: t("theme.pink") || "Pink", color: "#ec4899", textColor: "white", borderColor: "#f472b6" },
    {
      id: "monochrome",
      name: t("theme.monochrome") || "Monochrome",
      color: "#a1a1aa",
      textColor: "white",
      borderColor: "#d4d4d8",
    },
    {
      id: "dark-contrast",
      name: t("theme.darkContrast") || "High Contrast Dark",
      color: "#000000",
      textColor: "#ffff00",
      borderColor: "#ffff00",
    },
    {
      id: "light-contrast",
      name: t("theme.lightContrast") || "High Contrast Light",
      color: "#ffffff",
      textColor: "#0000ff",
      borderColor: "#0000ff",
    },
  ]

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      <Button
        variant="ghost"
        size="icon"
        className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change color scheme"
      >
        <Palette className="h-5 w-5" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0A1128] border border-primary/20 overflow-hidden z-50"
          >
            <div className="p-2 space-y-1">
              <div className="px-2 py-1.5 text-xs font-medium text-gray-400 uppercase tracking-wider">
                {t("theme.selectTheme") || "Select Theme"}
              </div>

              {colorOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setColorScheme(option.id)
                    setIsOpen(false)
                  }}
                  className={`flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors ${
                    colorScheme === option.id ? "bg-primary/20 text-white" : "text-gray-300 hover:bg-primary/10"
                  }`}
                >
                  <div
                    className="w-5 h-5 rounded-full mr-3 flex-shrink-0 flex items-center justify-center"
                    style={{
                      backgroundColor: option.color,
                      border: `1px solid ${option.borderColor}`,
                    }}
                  >
                    {colorScheme === option.id && <Check className="h-3 w-3" style={{ color: option.textColor }} />}
                  </div>
                  <span>{option.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

