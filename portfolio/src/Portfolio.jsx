import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown, Code, Briefcase, User, Phone } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Phone },
  ]

  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "Node.js",
    "Python",
    "CSS",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Git",
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "JavaScript", "Prisma", "Socket.io"],
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      tech: ["React", "API Integration", "Chart.js", "CSS"],
      github: "#",
      live: "#",
    },
  ]

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Led development of responsive web applications using React and Next.js. Collaborated with cross-functional teams to deliver high-quality user experiences.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client websites and web applications. Worked with various technologies including React, Node.js, and databases.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description:
        "Started career building responsive websites and learning modern web development practices. Gained experience in frontend and backend technologies.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5"
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mb-4 p-4 animate-in slide-in-from-top-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 w-full px-3 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5"
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                John Doe
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              Passionate about creating beautiful, functional, and user-centered digital experiences. I bring ideas to
              life through code and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="mx-auto text-gray-400" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 4 years of experience creating digital solutions that
                make a difference. My journey in web development started with a curiosity about how things work on the
                internet.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in React, Next.js, and modern web technologies. I love turning complex problems into
                simple, beautiful, and intuitive solutions. When I'm not coding, you'll find me exploring new
                technologies or contributing to open-source projects.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 bg-transparent"
                >
                  <Github className="mr-2" size={16} />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 bg-transparent"
                >
                  <Linkedin className="mr-2" size={16} />
                  LinkedIn
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-slate-800 to-slate-700 rounded-full flex items-center justify-center">
                  <User size={120} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div key={skill} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                <Badge
                  variant="secondary"
                  className="w-full py-3 px-4 text-center bg-gradient-to-r from-slate-700 to-slate-600 text-gray-200 hover:from-cyan-500/20 hover:to-purple-500/20 hover:text-cyan-300 transition-all duration-300 transform hover:scale-105 cursor-default"
                >
                  {skill}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-purple-400/50 text-purple-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 bg-transparent"
                    >
                      <Github className="mr-2" size={14} />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 bg-transparent"
                    >
                      <ExternalLink className="mr-2" size={14} />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="relative pl-8 border-l-2 border-cyan-400/30 hover:border-cyan-400 transition-colors duration-300"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full"></div>
                <div className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <p className="text-cyan-400 font-medium">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              <Mail className="mr-2" size={20} />
              Send Email
            </Button>
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <Phone className="mr-2" size={20} />
              Schedule Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 John Doe. Built with React</p>
        </div>
      </footer>
    </div>
  )
}
