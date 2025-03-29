"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Calendar } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"

export default function About() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // Define the image URL as a constant to ensure it's never empty
  const profileImageUrl =
    "https://res.cloudinary.com/myjob/image/upload/v1742626500/myjob/Avatar/cpcdanqqignmrcjs6lgu.png"

  return (
    <section id="about" className="py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          {t("about.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <motion.div variants={itemVariants} className="md:col-span-1 order-2 md:order-1">
            <Card className="glass-card h-full overflow-hidden">
              <div className="relative w-full h-64 md:h-auto bg-gradient-to-b from-primary/5 to-transparent flex items-center justify-center pt-6 md:pt-8">
                {/* Sound wave animations */}
                <div className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full border border-primary/10 animate-sound-wave-1"></div>
                <div className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full border border-primary/20 animate-sound-wave-2"></div>
                <div className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full border border-primary/30 animate-sound-wave-3"></div>

                {/* Avatar container */}
                <div className="w-44 h-44 md:w-48 md:h-48 rounded-full border-2 border-primary/20 flex items-center justify-center relative z-10">
                  <div className="w-40 h-40 md:w-44 md:h-44 rounded-full border-2 border-primary/30 flex items-center justify-center">
                    <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border-2 border-primary/30">
                      {profileImageUrl && (
                        <Image
                          src={profileImageUrl || "/placeholder.svg"}
                          alt="Vũ Kim An"
                          width={150}
                          height={150}
                          className="rounded-full object-cover"
                          priority
                          unoptimized
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="pt-3 px-3">
                <div className="space-y-2.5">
                  <div className="contact-info-item py-1.5">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <div>
                      <p className="text-xs text-gray-400">{t("about.birth")}</p>
                      <p className="text-gray-200 text-sm font-medium">01/02/2002</p>
                    </div>
                  </div>

                  <div className="contact-info-item py-1.5">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <div>
                      <p className="text-xs text-gray-400">{t("about.phone")}</p>
                      <p className="text-gray-200 text-sm font-medium">0385849615</p>
                    </div>
                  </div>

                  <div className="contact-info-item py-1.5">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <div>
                      <p className="text-xs text-gray-400">{t("about.email")}</p>
                      <p className="text-gray-200 text-sm font-medium">anvu734@gmail.com</p>
                    </div>
                  </div>

                  <div className="contact-info-item py-1.5">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <div>
                      <p className="text-xs text-gray-400">{t("about.location")}</p>
                      <p className="text-gray-200 text-sm font-medium">Hà Nội, Việt Nam</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 order-1 md:order-2">
            <Card className="glass-card h-full">
              <CardContent className="pt-4 px-5">
                <h3 className="text-2xl font-bold mb-4 gradient-text">{t("about.role")}</h3>
                <p className="text-gray-300/90 mb-3 leading-relaxed">{t("about.description1")}</p>
                <p className="text-gray-300/90 mb-4 leading-relaxed">{t("about.description2")}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10 hover:border-primary/30"
                  >
                    <h4 className="text-lg font-medium mb-2 text-primary">{t("about.experience")}</h4>
                    <p className="text-gray-300/80">{t("about.experienceDesc")}</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10 hover:border-primary/30"
                  >
                    <h4 className="text-lg font-medium mb-2 text-primary">{t("about.expertise")}</h4>
                    <p className="text-gray-300/80">{t("about.expertiseDesc")}</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10 hover:border-primary/30"
                  >
                    <h4 className="text-lg font-medium mb-2 text-primary">{t("about.learning")}</h4>
                    <p className="text-gray-300/80">{t("about.learningDesc")}</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10 hover:border-primary/30"
                  >
                    <h4 className="text-lg font-medium mb-2 text-primary">{t("about.availability")}</h4>
                    <p className="text-gray-300/80">{t("about.availabilityDesc")}</p>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 mt-3">
                <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10 hover:border-primary/30"
                  >
                    <h4 className="text-lg font-medium mb-2 text-primary">{t("about.target")}</h4>
                    <p className="text-gray-300/80">{t("about.targetDesc")}</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

