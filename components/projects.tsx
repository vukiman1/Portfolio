"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ChevronDown, ChevronUp, Calendar, Users, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Job Seeking Platform",
    period: "10/2024 - 01/2025",
    client: "Graduation project",
    description: "A job-seeking and recruitment platform connecting employers with job seekers",
    link: "Vieclam365.top",
    github: "https://github.com/vukiman1/myob_api_nodejs",
    members: 2,
    position: "Backend",
    technologies: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "Redis",
      "Docker",
      "AWS (EC2, S3, RDS)",
      "JWT",
      "OAuth2",
      "Cookies",
      "Guards",
      "RESTful API",
      "WebSockets",
    ],
    functions: [
      "User Authentication: Sign up & login using Google, Facebook, JWT-based authentication, session management with cookies, email sms code.",
      "Cloud Storage: AWS for Storage PostgreSQL database, Cloudinary for storage image.",
      "Resume Upload & Parsing: Users can upload resumes (PDF, DOCX), extract key details for profile enhancement.",
      "Send email active account, Email Advertisement",
      "Payment Integration: MoMo & VNPAY integration for premium job postings and featured listings.",
      "Job Management: Employers can post jobs, edit listings, manage applications, and track hiring progress.",
      "Advanced Job Search & Filtering: Full-text search with PostgreSQL, filters based on skills, location, salary, and job type.",
      "Personalized Job Recommendation System: Suggest jobs based on users with similar profiles and application history.",
    ],
  },
  {
    title: "Trading Coin/Stock Platform",
    period: "08/2024 - 11/2024",
    client: "TinaSoft Viet Nam",
    description:
      "A financial trading platform providing real-time market data, supporting stock and cryptocurrency trading, and implementing betting mechanisms with automated payouts.",
    members: 6,
    position: "Backend",
    technologies: [
      "Node.js",
      "MySQL",
      "TypeORM",
      "WebSocket",
      "Socket.IO",
      "Puppeteer",
      "Cheerio",
      "Axios",
      "JWT Authentication",
      "RBAC",
    ],
    functions: [
      "Market Data Crawling & Processing: Developed a scalable crawler for stock and crypto data, structuring it for real-time access.",
      "Real-time Data Streaming: Implemented WebSocket broadcasting for 500+ assets, ensuring low-latency, accurate updates.",
      "Betting & Reward System: Built core logic for user bets and automated payouts per trading rules.",
      "Transaction & Wallet Management: Engineered secure transaction validation and wallet updates for reliable fund handling.",
      "Profit & Cost Analytics: Created backend services for profitability and cost calculations, providing detailed admin reports.",
    ],
  },
  {
    title: "CRM System",
    period: "05/2024 - 7/2024",
    client: "TinaSoft Viet Nam",
    description: "A CRM system to manage customer interactions, sales pipelines, and business processes.",
    members: 5,
    position: "Backend Intern",
    technologies: ["Node.js", "NestJS", "PostgreSQL", "JWT Authentication", "RBAC", "RESTful API"],
    functions: [
      "Activity Logging: Developed a logging system to track customer interactions. Used middleware in NestJS to log API requests for analytics.",
      "Email Notifications: Integrated nodemailer to send automated follow-up emails to leads.",
    ],
  },
  {
    title: "Tour Travel Booking",
    period: "10/2023-12/2023",
    client: "User",
    description: "Tour booking website",
    members: 2,
    position: "Backend",
    technologies: ["NodeJs", "ExpressJs", "Mongodb", "Vercel Deploy", "JWT Authentication"],
    functions: [
      "Login, Logout use JWT, Hash Password",
      "Store image in Cloudinary",
      "Search tour",
      "Review, feedback",
      "Manage tour, Analyst payment",
      "Booking, payment",
    ],
  },
]

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const toggleProject = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null)
    } else {
      setExpandedProject(index)
    }
  }

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
    <section id="projects" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col h-full">
              <Card className="glass-card h-full flex flex-col">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-white mb-1 flex items-center">
                      <span className="text-primary mr-2">#</span>
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{project.client}</p>
                  </div>

                  <div className="flex items-center mb-3 text-sm">
                    <Calendar className="h-3.5 w-3.5 text-primary mr-1.5" />
                    <span className="text-gray-300">{project.period}</span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 10).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {/* {project.technologies.length  && (
                      <Badge variant="outline" className="bg-transparent text-gray-400 border-gray-600 text-xs">
                        +{project.technologies.length - 5}
                      </Badge>
                    )} */}
                  </div>

                  <div className="flex flex-col gap-2 mb-4 mt-auto text-sm">
                    <div className="flex items-center">
                      <Users className="h-3.5 w-3.5 text-primary mr-1.5" />
                      <span className="text-gray-400">
                        Team: <span className="text-white">{project.members} members</span>
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-3.5 w-3.5 text-primary mr-1.5" />
                      <span className="text-gray-400">
                        Role: <span className="text-white">{project.position}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={`https://${project.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleProject(index)}
                      className="text-primary hover:text-primary hover:bg-primary/10 p-1 h-auto"
                    >
                      {expandedProject === index ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>
                  </div>

                  {expandedProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-800"
                    >
                      <h4 className="text-sm font-medium text-primary mb-3">Key Functions</h4>
                      <div className="space-y-2">
                        {project.functions.map((func, funcIndex) => (
                          <div
                            key={funcIndex}
                            className="p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                          >
                            <p className="text-gray-300 text-xs">{func}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

