"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Languages, Calendar } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function Education() {
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

  return (
    <section id="education" className="py-16 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          {t("education.title")}
        </motion.h2>

        <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
          <Card className="glass-card">
            <CardContent className="pt-6 px-4 md:px-6">
              <div className="timeline-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex items-center">
                    <div className="h-7 w-7 mr-3">
                      <img 
                      src="assets/tlu.png" 
                      alt="University Logo" 
                      className="h-full w-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white"><a href="https://thanglong.edu.vn/" target="_blank">{t("education.university")}</a></h3>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar className="h-4 w-4 text-primary mr-2" />
                    <Badge variant="outline" className="text-gray-300 border-primary/30 bg-primary/5">
                      2020/10 – 2025/09
                    </Badge>
                  </div>
                </div>

                <p className="text-primary mb-5 ml-12 md:ml-0">{t("education.majorName")}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-12 md:ml-0">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <GraduationCap className="h-5 w-5 mr-3 text-primary mt-1" />
                      <div>
                        <p className="text-sm text-gray-400">{t("education.major")}</p>
                        <p className="text-gray-200">{t("education.majorName")}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <Languages className="h-5 w-5 mr-3 text-primary mt-1" />
                      <div>
                        <p className="text-sm text-gray-400">{t("education.language")}</p>
                        <div className="flex items-center">
                          <p className="text-gray-200 mr-2">TOEIC</p>
                          <Badge className="bg-primary/80 text-white">450+</Badge>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}

