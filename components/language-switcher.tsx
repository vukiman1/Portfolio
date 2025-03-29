"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { motion, AnimatePresence } from "framer-motion"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleLanguage = (lang: "en" | "vi") => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
      >
        <Globe className="h-5 w-5" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-[#0A1128] border border-primary/20 overflow-hidden z-50"
          >
            <div className="py-1">
              <button
                onClick={() => toggleLanguage("en")}
                className={`flex items-center px-4 py-2 text-sm w-full text-left ${
                  language === "en" ? "bg-primary/20 text-white" : "text-gray-300 hover:bg-primary/10"
                }`}
              >
                <span className="ml-2">English</span>
              </button>
              <button
                onClick={() => toggleLanguage("vi")}
                className={`flex items-center px-4 py-2 text-sm w-full text-left ${
                  language === "vi" ? "bg-primary/20 text-white" : "text-gray-300 hover:bg-primary/10"
                }`}
              >
                <span className="ml-2">Tiếng Việt</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

