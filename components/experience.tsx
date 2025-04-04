"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function Experience() {
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
    <section id="experience" className="py-16 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          {t("experience.title")}
        </motion.h2>

        <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
          <Card className="glass-card overflow-hidden">
            <CardContent className="pt-6 px-4 md:px-6">
              <div className="timeline-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 mr-3">
                      <img
                      src="assets/tinasoft.png"
                      alt="Tinasoft Logo"
                      className="h-full w-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{t("experience.position")}</h3>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar className="h-4 w-4 text-primary mr-2" />
                    <Badge variant="outline" className="text-gray-300 border-primary/30 bg-primary/5">
                      05/2024 - 01/2025
                    </Badge>
                  </div>
                </div>
                <p className="text-primary mb-6 ml-12 md:ml-0"><a href="https://tinasoft.io/vi/" target="_blank">{t("experience.company")}</a></p>

                <div className="space-y-3 ml-12 md:ml-0">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                  >
                    <p className="text-gray-300">• {t("experience.desc1")}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                  >
                    <p className="text-gray-300">• {t("experience.desc2")}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                  >
                    <p className="text-gray-300">
                      • {t("experience.desc3")}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                  >
                    <p className="text-gray-300">• {t("experience.desc4")}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                  >
                    <p className="text-gray-300">
                      • {t("experience.desc5")}
                    </p>
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

