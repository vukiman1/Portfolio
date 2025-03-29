"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ChevronDown, Calendar, Users, Briefcase, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Image } from 'antd';

interface ProjectModalProps {
  project: {
    title: string;
    period: string;
    client: string;
    description: string;
    link?: string;
    github?: string;
    members: number;
    position: string;
    images?: string[];
    technologies: string[];
    functions: string[];
  };
  isOpen: boolean;
  onClose: () => void;
  t: (key: string) => string;
}

function ProjectModal({ project, isOpen, onClose, t }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#0A1128] border border-primary/20 text-white max-w-4xl max-h-[90vh] overflow-y-auto w-[calc(100vw-2rem)] mx-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-white flex items-center">
              <span className="text-primary mr-2">#</span>
              {project.title}
            </DialogTitle>
            <button onClick={onClose} className="p-1 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
              <X className="h-5 w-5 text-primary" />
            </button>
          </div>
          <DialogDescription className="text-gray-400">
            {project.client} • {project.period}
          </DialogDescription>
        </DialogHeader>

        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden border border-primary/20 w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent flex items-center justify-center">
                <div className="w-full h-full bg-[#050A18]/50 flex items-center justify-center">
                  <Image
                    src={image}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
              </div>

              </div>
            ))}
          </div>
        )}

        {/* Project Description */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-primary mb-2">Description</h3>
          <p className="text-gray-300">{project.description}</p>
        </div>

        {/* Project Details */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium text-primary mb-2">Team & Role</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Users className="h-4 w-4 text-primary mr-2" />
                <span className="text-gray-300">
                  {t("projects.team")}:{" "}
                  <span className="text-white">
                    {project.members} {t("projects.members")}
                  </span>
                </span>
              </div>
              <div className="flex items-center">
                <Briefcase className="h-4 w-4 text-primary mr-2" />
                <span className="text-gray-300">
                  {t("projects.role")}: <span className="text-white">{project.position}</span>
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-primary mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="secondary"
                  className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Project Functions */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-primary mb-2">{t("projects.keyFunctions")}</h3>
          <div className="space-y-2">
            {project.functions.map((func, funcIndex) => (
              <div
                key={funcIndex}
                className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300"
              >
                <p className="text-gray-300">{func}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="mt-6 flex justify-end gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          )}
          {project.link && (
            <a
              href={`https://${project.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
            >
              <ExternalLink className="h-5 w-5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Job Seeking Platform",
      period: "10/2024 - 01/2025",
      client: "Graduation project",
      description: "A job-seeking and recruitment platform connecting employers with job seekers",
      link: "Vieclam365.top",
      github: "https://github.com/vukiman1/myob_api_nodejs",
      members: 2,
      position: "Backend Developer",
      images: ["/assets/project_picture/job1.png", "/assets/project_picture/job11.png"],
      technologies: [
        "Node.js",
        "NestJS",
        "PostgreSQL",
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
      images: ["/assets/project_picture/job2.png", "/assets/project_picture/job22.png"],
      technologies: [
        "Node.js",
        "NestJS",
        "PostgreSQL",
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
      images: ["/assets/project_picture/job3.png", "/assets/project_picture/job33.png"],
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
      images: ["/assets/project_picture/job4.png", "/assets/project_picture/job44.png"],
      technologies: ["NodeJs", "ExpressJs", "Mongodb", "Vercel Deploy"],
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

  const toggleProject = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null)
    } else {
      setExpandedProject(index)
    }
  }

  const openProjectModal = (index: number) => {
    setSelectedProject(index)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
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
    <section id="projects" className="py-16 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          {t("projects.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col h-full">
              <Card className="glass-card h-full flex flex-col">
                <CardContent className="pt-5 px-4 flex flex-col h-full">
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
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="bg-transparent text-gray-400 border-gray-600 text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 mb-4 mt-auto text-sm">
                    <div className="flex items-center">
                      <Users className="h-3.5 w-3.5 text-primary mr-1.5" />
                      <span className="text-gray-400">
                        {t("projects.team")}:{" "}
                        <span className="text-white">
                          {project.members} {t("projects.members")}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-3.5 w-3.5 text-primary mr-1.5" />
                      <span className="text-gray-400">
                        {t("projects.role")}: <span className="text-white">{project.position}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-auto pt-3 border-t border-gray-800/30 gap-3 w-full">
                    <div className="flex gap-3 w-full sm:w-auto justify-center sm:justify-start">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-105"
                          aria-label="GitHub Repository"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={`https://${project.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-105"
                          aria-label="Live Project"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>

                    <Button
                      variant="ghost"
                      onClick={() => openProjectModal(index)}
                      className="text-primary hover:text-white hover:bg-primary/20 h-10 px-4 rounded-lg flex items-center gap-2 w-full sm:w-auto justify-center"
                      aria-label="View project details"
                    >
                      <span className="text-sm">{t("projects.details")}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {isModalOpen && selectedProject !== null && (
        <ProjectModal project={projects[selectedProject]} isOpen={isModalOpen} onClose={closeProjectModal} t={t} />
      )}
    </section>
  )
}

