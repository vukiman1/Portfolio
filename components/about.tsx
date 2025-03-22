"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Calendar } from "lucide-react"
import Image from "next/image"

export default function About() {
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
    <section id="about" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} className="md:col-span-1 order-2 md:order-1">
            <Card className="glass-card h-full overflow-hidden">
              <div className="relative w-full aspect-square bg-gradient-to-b from-primary/5 to-transparent">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border-2 border-primary/20 flex items-center justify-center">
                    <div className="w-56 h-56 rounded-full border-2 border-primary/30 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border-2 border-primary/30">
                        {profileImageUrl && (
                          <Image
                            src={profileImageUrl || "/placeholder.svg"}
                            alt="Vũ Kim An"
                            width={180}
                            height={180}
                            className="rounded-full object-cover"
                            priority
                            unoptimized
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="contact-info-item">
                    <Calendar className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="text-sm text-gray-400">Birth</p>
                      <p className="text-gray-200 font-medium">01/02/2002</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <Phone className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-gray-200 font-medium">0385849615</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-gray-200 font-medium">anvu734@gmail.com</p>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 order-1 md:order-2">
            <Card className="glass-card h-full">
              <CardContent className="pt-6">
                <h1 className="text-2xl font-bold mb-6 gradient-text">Backend Developer</h1>
                <p className="text-gray-300/90 mb-4 leading-relaxed">
                  A highly motivated and friendly software developer, always eager to learn and grow in a professional
                  working environment. I thrive on challenges and constantly seek opportunities to develop my skills and
                  expand my knowledge.
                </p>
                <p className="text-gray-300/90 mb-6 leading-relaxed">
                  With a positive mindset and strong teamwork abilities, I adapt quickly to new technologies and
                  environments.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10 hover:border-primary/30"
                  >
                    <h4 className="text-lg font-medium mb-2 text-primary">Experience</h4>
                    <p className="text-gray-300/80">
                      Nearly one year of professional experience in software development
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10 hover:border-primary/30"
                  >
                    <h4 className="text-lg font-medium mb-2 text-primary">Expertise</h4>
                    <p className="text-gray-300/80">Proficient in NestJs, NodeJs and related technologies</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10 hover:border-primary/30"
                  >
                    <h4 className="text-lg font-medium mb-2 text-primary">Learning</h4>
                    <p className="text-gray-300/80">
                      Demonstrated ability to rapidly learn and implement new technologies
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10 hover:border-primary/30"
                  >
                    <h4 className="text-lg font-medium mb-2 text-primary">Availability</h4>
                    <p className="text-gray-300/80">Available for full-time work in Hà Nội, Việt Nam</p>
                  </motion.div>
                </div>
                <div className="mt-6 w-full">
             
            </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

