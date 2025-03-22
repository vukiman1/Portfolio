"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Code, Server, Terminal, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
    images: ["/assets/javaScript.png", "/assets/typeScript.png", "/assets/html.png", "/assets/css.png"],
  },
  {
    title: "Frameworks",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: ["Node.js", "Express.js", "NestJS", "React.js"],
    images: ["/assets/nodejs.png", "/assets/express.png", "/assets/nestjs.png", "/assets/react.png"],

  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
    images: ["/assets/mysql.png", "/assets/postgresql.png", "/assets/mongo-db.png"],

  },
  {
    title: "DevOps & Deployment",
    icon: <Terminal className="h-6 w-6 text-primary" />,
    skills: ["Docker", "GitHub"],
    images: ["/assets/docker.png", "/assets/github.png"],

  },
  {
    title: "Other",
    icon: <Globe className="h-6 w-6 text-primary" />,
    skills: ["AWS (EC2, RDS, S3)", "Linux", "Working in group"],
    images: ["/assets/aws.png", "/assets/linux.png", "/assets/working-group.png"],

  },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glass-card h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 mr-3">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                          <img src={category.images[skillIndex]}></img>
                          <div className="w-5 h-5 rounded-full bg-primary/30"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
        >
          {["JavaScript", "TypeScript", "Node.js", "NestJS", "Express.js", "PostgreSQL", "MongoDB", "React.js"].map(
            (tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="skill-circle mx-auto"
              >
                <span className="text-xs font-medium text-primary">{tech}</span>
              </motion.div>
            ),
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}

