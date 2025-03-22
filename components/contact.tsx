"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const mailtoLink = `mailto:example@gmail.com
      ?subject=${encodeURIComponent(formData.subject)}
      &body=${encodeURIComponent(`Tên: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`)}`;
  
    window.location.href = mailtoLink; // Mở ứng dụng email mặc định
  
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
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
    <section id="contact" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="glass-card h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6 text-white">Get In Touch</h3>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                  >
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Email</h4>
                      <p className="text-gray-300">anvu734@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                  >
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Phone</h4>
                      <p className="text-gray-300">0385849615</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                  >
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Location</h4>
                      <p className="text-gray-300">Hà Nội, Việt Nam</p>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="glass-card h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6 text-white">Send Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#1E293B]/50 border-primary/20 text-white focus:border-primary/50 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#1E293B]/50 border-primary/20 text-white focus:border-primary/50 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-[#1E293B]/50 border-primary/20 text-white focus:border-primary/50 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-[#1E293B]/50 border-primary/20 text-white focus:border-primary/50 focus:ring-primary/10"
                      rows={5}
                    />
                  </div>

                  <GradientButton
                    text="Send Message"
                    icon={<Send className="h-5 w-5" />}
                    variant="pink"
                    className="w-full"
                  />
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

