import { useState, useEffect } from "react";
import { Button } from "../ui/Button/Button";
import { Card, CardContent } from "../ui/Card/Card";
import { Badge } from "../ui/Badge/Badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Code,
  Briefcase,
  User,
  Phone,
} from "lucide-react";
import ShopkarImage from "../../assets/Shopkar.png";
import HealthazonImage from "../../assets/Healthazon.png";
import ProfileImage from "../../assets/Nabhi.jpg";
import "./Portfolio.css";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "achievements",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "achievements", label: "Achievements", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Phone },
  ];

  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "HTML5",
    "CSS",
    "C++",
    "MongoDB",
    "SQL",
    "Git",
    "GitHub",
    "REST APIs",
  ];

  const projects = [
    {
      title: "ShopKar",
      description:
        "A full-stack e-commerce solution with React, Node.js, Express.js, MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Javascript"],
      github: "https://github.com/Karandevgan452/E_COM.git",
      live: "https://ecomshopkar.netlify.app",
      image: ShopkarImage,
    },
    {
      title: "Healthazon",
      description:
        "A full-stack e-health application with React, Node.js, Express.js, MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Javascript"],
      github: "https://github.com/Karandevgan452/Healthazon.git",
      live: "https://healthazon.netlify.app",
      image: HealthazonImage,
    },
    {
      title: "TicTacToe with AI",
      description:
        "Created a TicTacToe game with Minimax AI Algorithm using Java swing and OOPS",
      tech: ["Java", "JavaSwing", "OOPS"],
      github: "https://github.com/Karandevgan452/Tic-Tac-Toe-Minimax-AI-Algorithm-.git",
      image : ""
    },
  ];

  const achievements = [
    {
      title: "ShopKar E-commerce Platform",
      category: "Full-Stack Project",
      description:
        "Built a complete e-commerce solution with user authentication, payment integration, and admin dashboard. Deployed successfully with 100+ users.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      link: "https://ecomshopkar.netlify.app",
    },
    {
      title: "Data Structures & Algorithms",
      category: "Problem Solving",
      description:
        "Solved 200+ coding problems across various platforms. Strong foundation in algorithms, time complexity analysis, and optimization techniques.",
      tech: ["C++", "Java", "Problem Solving"],
      link: "https://leetcode.com/u/karandevgan12",
    },
    {
      title: "Healthazon Health Platform",
      category: "Healthcare Tech",
      description:
        "Developed a comprehensive health management system with appointment booking, patient records, and telemedicine features.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      link: "https://healthazon.netlify.app",
    },
    {
      title: "Modern Web Development",
      category: "Technical Skills",
      description:
        "Mastered modern web development stack including React ecosystem, responsive design, API integration, and deployment strategies.",
      tech: ["React", "CSS", "REST APIs", "Deployment"],
      link: "https://github.com/Karandevgan452",
    },
   
  ];

  return (
    <div className="portfolio">
      
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__content">
            <div className="nav__desktop">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav__item ${
                    activeSection === item.id ? "nav__item--active" : ""
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero__content">
          <div className="animate-fade-in">
            <h1>Karan Devgan</h1>
            <h2 className="hero__subtitle animate-fade-in-delay-200">
              Full Stack Developer & AI Enthusiast
            </h2>
            <p className="hero__description animate-fade-in-delay-400">
              Passionate about creating beautiful, functional, and user-centered
              digital experiences using latest web-technologies and A.I. I bring
              ideas to life through code and design.
            </p>
            <div className="hero__buttons animate-fade-in-delay-600">
              <Button onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="hero__chevron animate-bounce">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      
      <section id="about" className="section">
        <div className="section__container">
          <h2 className="section__title">About Me</h2>
          <div className="about__grid">
            <div className="about__image">
              <img src={ProfileImage} alt="Karan Devgan" className="about__profile-img" />
            </div>
            <div className="about__text">
              <p className="about__paragraph">
                I'm a passionate full-stack developer with over 1 year of
                experience creating digital solutions that make a difference. My
                journey in web development started with a curiosity about how
                things work on the internet.
              </p>
              <p className="about__paragraph">
                I specialize in React, JavaScript, and modern web technologies.
                I also use Git and Github for version control. I also have
                strong knowledge of DSA and I love to solve complex problems. I
                love turning complex problems into simple, beautiful, and
                intuitive solutions. When I'm not coding, you'll find me
                exploring new technologies.
              </p>
              <div className="about__buttons">
                <Button variant="outline" size="sm">
                  <Github className="mr-2" size={16} />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="mr-2" size={16} />
                  LinkedIn
                </Button>
              </div>
            </div>
        
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section--alt">
        <div className="section__container">
          <h2 className="section__title">Skills & Technologies</h2>
          <div className="skills__grid">
            {skills.map((skill, index) => (
              <div key={skill} style={{ animationDelay: `${index * 100}ms` }}>
                <Badge variant="secondary">{skill}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section__container">
          <h2 className="section__title">Featured Projects</h2>
          <div className="projects__grid">
            {projects.map((project) => (
              <Card key={project.title} className="project__card">
                <div className="project__image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project__image"
                  />
                  <div className="project__overlay">
                    <div className="project__overlay-buttons">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="project__overlay-btn"
                        >
                          <Github size={16} />
                          Code
                        </Button>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="project__overlay-btn"
                        >
                          <ExternalLink size={16} />
                          Live
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
                <CardContent className="project__content">
                  <h3 className="project__title">{project.title}</h3>
                  <p className="project__description">{project.description}</p>
                  <div className="project__tech">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section section--alt">
        <div className="section__container">
          <h2 className="section__title">Achievements & Projects</h2>
          <div className="achievements__grid">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="achievement__card">
                <div className="achievement__header">
                  <div className="achievement__title-section">
                    <h3 className="achievement__title">{achievement.title}</h3>
                    <p className="achievement__category">
                      {achievement.category}
                    </p>
                  </div>
                </div>
                <p className="achievement__description">
                  {achievement.description}
                </p>
                <div className="achievement__tech">
                  {achievement.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {achievement.link !== "#" && (
                  <a
                    href={achievement.link}
                    className="achievement__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section__container section__container--narrow">
          <div className="contact__content">
            <h2 className="section__title">Let's Work Together</h2>
            <p className="contact__description">
              I'm always interested in new opportunities and exciting projects.
              Let's collaborate and bring your ideas to life.
            </p>
            <div className="contact__buttons">
              <Button>
                <Mail size={20} />
                Send Email
              </Button>
              <Button variant="outline">
                <Phone size={20} />
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__content">
          <p className="footer__text">© 2025 Karan Devgan. Built with React</p>
        </div>
      </footer>
    </div>
  );
}
