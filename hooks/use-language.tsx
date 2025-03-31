"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Language = "en" | "vi"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation dictionaries
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.downloadCV": "Download CV",
    "nav.more": "More",
    "nav.top": "Top",
    "nav.swipe": "Swipe to navigate",

    // Hero section
    "hero.role": "Backend Developer",
    "hero.description":
      "A highly motivated and friendly software developer, always eager to learn and grow in a professional working environment. I thrive on challenges and constantly seek opportunities to develop my skills and expand my knowledge.",
    "hero.explore": "Explore",
    "hero.scroll": "SCROLL",

    // About section
    "about.title": "About Me",
    "about.birth": "Birth",
    "about.phone": "Phone",
    "about.email": "Email",
    "about.location": "Location",
    "about.role": "Backend Developer",
    "about.description1":
      "A highly motivated and friendly software developer, always eager to learn and grow in a professional working environment. I thrive on challenges and constantly seek opportunities to develop my skills and expand my knowledge.",
    "about.description2":
      "With a positive mindset and strong teamwork abilities, I adapt quickly to new technologies and environments.",
    "about.experience": "Experience",
    "about.experienceDesc": "Nearly one year of professional experience in software development",
    "about.expertise": "Expertise",
    "about.expertiseDesc": "Proficient in NestJs, NodeJs and related technologies",
    "about.learning": "Learning",
    "about.learningDesc": "Demonstrated ability to rapidly learn and implement new technologies",
    "about.availability": "Availability",
    "about.availabilityDesc": "Available for full-time work in Hà Nội, Việt Nam",
    "about.targetDesc": "A Short-term goal: Improve backend skills (Node.js, NestJS, PostgreSQL), deepen understanding of system architecture, and optimize APIs. Long-term goal: Become a highly skilled backend developer, master DevOps and microservices, and aim for a Backend Lead or Software Architect role.",
    "about.target": "Career Goals",

    // Skills section
    "skills.title": "My Skills",
    "skills.languages": "Programming Languages",
    "skills.frameworks": "Frameworks",
    "skills.databases": "Databases",
    "skills.devops": "DevOps & Deployment",
    "skills.other": "Other",

    // Experience section
    "experience.title": "Work Experience",
    "experience.position": "Intern Backend Developer",
    "experience.company": "Tinasoft Vietnam",
    "experience.desc1": "Design and optimize PostgreSQL databases",
    "experience.desc2": "Develop and deploy RESTful APIs using NestJS",
    "experience.desc3": "Research and implement security mechanisms such as JWT, Guards, and OAuth2 (Google, Facebook)",
    "experience.desc4": "Integrate Google and Facebook login",
    "experience.desc5": "Implement cloud-based data storage solutions (AWS S3, Firebase Storage)",

    // Projects section
    "projects.title": "Projects",
    "projects.client": "Client",
    "projects.period": "Period",
    "projects.desc1":"A job-seeking and recruitment platform connecting employers with job seekers",
    "projects.desc2":"A financial trading platform providing real-time market data, supporting stock and cryptocurrency trading, and implementing betting mechanisms with automated payouts.",
    "projects.desc3":"A CRM system to manage customer interactions, sales pipelines, and business processes.",
    "projects.desc4":"Tour booking website",
    "projects.team": "Team",
    "projects.members": "members",
    "projects.role": "Role",
    "projects.technologies": "Technologies",
    "projects.details": "Details",
    "projects.collapse": "Collapse",
    "projects.keyFunctions": "Key Functions",
    "projects.pr1":"Job Seeking Platform",
    "projects.pr2":"Trading Coin/Stock Platform",
    "projects.pr3":"CRM System",
    "projects.pr4":"Tour Travel Booking",
    "projects.functions1": [
      "User Authentication: Sign up & login using Google, Facebook, JWT-based authentication, session management with cookies, email sms code.",
      "Cloud Storage: AWS for Storage PostgreSQL database, Cloudinary for storage image.",
      "Resume Upload & Parsing: Users can upload resumes (PDF, DOCX), extract key details for profile enhancement.",
      "Send email active account, Email Advertisement",
      "Payment Integration: MoMo & VNPAY integration for premium job postings and featured listings.",
      "Job Management: Employers can post jobs, edit listings, manage applications, and track hiring progress.",
      "Advanced Job Search & Filtering: Full-text search with PostgreSQL, filters based on skills, location, salary, and job type.",
      "Personalized Job Recommendation System: Suggest jobs based on users with similar profiles and application history.",
    
    ],

    // Education section
    "education.title": "Education",
    "education.university": "Thang Long University",
    "education.major": "Major",
    "education.majorName": "Information & Technology",
    "education.language": "Language",

    // Contact section
    "contact.title": "Contact Me",
    "contact.getInTouch": "Get In Touch",
    "contact.send": "Send Message",
    "contact.yourName": "Your Name",
    "contact.yourEmail": "Your Email",
    "contact.subject": "Subject",
    "contact.message": "Your Message",

    // Theme selection
    "theme.selectTheme": "Select Theme",
    "theme.blue": "Blue",
    "theme.purple": "Purple",
    "theme.green": "Green",
    "theme.orange": "Orange",
    "theme.pink": "Pink",
    "theme.monochrome": "Monochrome",
    "theme.darkContrast": "High Contrast Dark",
    "theme.lightContrast": "High Contrast Light",
  },
  vi: {
    // Navigation
    "nav.home": "Trang chủ",
    "nav.about": "Giới thiệu",
    "nav.skills": "Kỹ năng",
    "nav.experience": "Kinh nghiệm",
    "nav.projects": "Dự án",
    "nav.education": "Học vấn",
    "nav.contact": "Liên hệ",
    "nav.downloadCV": "Tải CV",
    "nav.more": "Thêm",
    "nav.top": "Đầu trang",
    "nav.swipe": "Vuốt để điều hướng",

    // Hero section
    "hero.role": "Lập trình viên Backend",
    "hero.description":
      "Là một lập trình viên đầy nhiệt huyết và tham vọng, tôi luôn khao khát học hỏi và không ngừng phát triển trong môi trường chuyên nghiệp. Đối mặt với thách thức là cơ hội để tôi rèn luyện kỹ năng, mở rộng kiến thức và tạo ra những giải pháp đột phá.",
    "hero.explore": "Khám phá",
    "hero.scroll": "CUỘN",

    // About section
    "about.title": "Giới thiệu",
    "about.birth": "Ngày sinh",
    "about.phone": "Điện thoại",
    "about.email": "Email",
    "about.location": "Địa chỉ",
    "about.role": "Lập trình viên Backend",
    "about.description1":
      "Là một lập trình viên đầy nhiệt huyết và tham vọng, tôi luôn khao khát học hỏi và không ngừng phát triển trong môi trường chuyên nghiệp. Đối mặt với thách thức là cơ hội để tôi rèn luyện kỹ năng, mở rộng kiến thức và tạo ra những giải pháp đột phá.",
    "about.description2":
      "Với tư duy tích cực và khả năng làm việc nhóm tốt, tôi thích nghi nhanh chóng với các công nghệ và môi trường mới.",
    "about.experience": "Kinh nghiệm",
    "about.experienceDesc": "Gần một năm kinh nghiệm chuyên môn trong phát triển phần mềm phía backend",
    "about.expertise": "Chuyên môn",
    "about.expertiseDesc": "Thành thạo NestJs, NodeJs và các công nghệ liên quan",
    "about.learning": "Học hỏi",
    "about.learningDesc": "Sẵn sàng học hỏi và áp dụng công nghệ mới",
    "about.availability": "Tình trạng",
    "about.availabilityDesc": "Sẵn sàng làm việc toàn thời gian tại Hà Nội, Việt Nam",
    "about.target": "Mục tiêu",
    "about.targetDesc": "Mục tiêu ngắn hạn: Nâng cao kỹ năng backend (Node.js, NestJS, PostgreSQL), hiểu sâu về kiến trúc hệ thống và tối ưu API. Mục tiêu dài hạn: Trở thành backend developer chuyên sâu, nắm vững DevOps, microservices và hướng tới vị trí Backend Lead hoặc Software Architect.",
    // Skills section
    "skills.title": "Kỹ năng của tôi",
    "skills.languages": "Ngôn ngữ lập trình",
    "skills.frameworks": "Thư viện",
    "skills.databases": "Cơ sở dữ liệu",
    "skills.devops": "DevOps & Triển khai",
    "skills.other": "Khác",

    // Experience section
    "experience.title": "Kinh nghiệm làm việc",
    "experience.position": "Thực tập sinh Backend",
    "experience.company": "Tinasoft Vietnam",
    "experience.desc1": "Thiết kế và tối ưu hóa cơ sở dữ liệu PostgreSQL",
    "experience.desc2": "Phát triển và triển khai API RESTful bằng NestJS",
    "experience.desc3": "Nghiên cứu và triển khai các cơ chế bảo mật như JWT, Guards, OAuth2 (Google, Facebook)",
    "experience.desc4": "Tích hợp đăng nhập Google và Facebook",
    "experience.desc5": "Triển khai các giải pháp lưu trữ dữ liệu dựa trên đám mây (AWS S3, Firebase Storage)",

    // Projects section
    "projects.title": "Dự án",
    "projects.client": "Khách hàng",
    "projects.period": "Thời gian",
    "projects.team": "Nhóm",
    "projects.members": "thành viên",
    "projects.role": "Vai trò",
    "projects.technologies": "Công nghệ",
    "projects.details": "Chi tiết",
    "projects.desc1": "Nền tảng tìm kiếm việc làm và tuyển dụng kết nối nhà tuyển dụng với người tìm việc",
    "projects.desc2": "Nền tảng giao dịch tài chính cung cấp dữ liệu thị trường theo thời gian thực, hỗ trợ giao dịch chứng khoán và tiền điện tử, đồng thời triển khai cơ chế cá cược với các khoản thanh toán tự động.",
    "projects.desc3": "Hệ thống quản lý khách hàng giúp doanh nghiệp theo dõi và quản lý thông tin khách hàng, tương tác và giao dịch với họ.",
    "projects.desc4": "Nền tảng đặt tour du lịch trực tuyến, cho phép người dùng tìm kiếm và đặt tour một cách dễ dàng.",
    "projects.collapse": "Thu gọn",
    "projects.keyFunctions": "Chức năng chính",
    "projects.pr1":"Trang web tìm kiếm việc làm",
    "projects.pr2":"Trang giao dịch chứng khoán, blockchain",
    "projects.pr3":"Hệ thống CRM",
    "projects.pr4":"Trang web đặt tour du lịch",

    "project.function1": [
      "a",
      "b",
      "cddd",
    ],
    // Education section
    "education.title": "Học vấn",
    "education.university": "Đại học Thăng Long",
    "education.major": "Chuyên ngành",
    "education.majorName": "Công nghệ thông tin",
    "education.language": "Ngoại ngữ",

    // Contact section
    "contact.title": "Liên hệ",
    "contact.getInTouch": "Thông tin liên hệ",
    "contact.send": "Gửi tin nhắn",
    "contact.yourName": "Tên của bạn",
    "contact.yourEmail": "Email của bạn",
    "contact.subject": "Tiêu đề",
    "contact.message": "Nội dung tin nhắn",

    // Theme selection
    "theme.selectTheme": "Chọn Giao diện",
    "theme.blue": "Xanh dương",
    "theme.purple": "Tím",
    "theme.green": "Xanh lá",
    "theme.orange": "Cam",
    "theme.pink": "Hồng",
    "theme.monochrome": "Đen trắng",
    "theme.darkContrast": "Tương phản cao (Tối)",
    "theme.lightContrast": "Tương phản cao (Sáng)",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "vi")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when changed
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

