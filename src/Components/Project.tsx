

import styles from "../Styles/Project.module.css"
import { ExternalLink, Calendar, Users, Award } from "lucide-react"
import Atree from "../Assets/Atree.png";
import wemustcollab from "../Assets/Wemustcollab.webp";
import curvdzn from "../Assets/CurvDzn.png";
import Intellispiders from "../Assets/intellispiders.png";
import Yesalgo from "../Assets/yesalgo.png";
import TTA from "../Assets/TTA.png";
export default function Projects() {
  const projects = [
    {
      title: "ATREE Project",
      description:
        "Plants of India is a rich biodiversity platform that showcases detailed information on Indian plant species to support research, education, and conservation.",
      image: Atree,
      technologies: ["React", "Tailwind CSS", "Chart.js", "Laravel"],
      liveUrl: "https://theindianplants.org/",
      category: "Web Application",
      year: "2024",
      featured: true,
    },
    {
      title: "Curv Dzn",
      description:
        "CurvDzn crafts visually striking and intuitive digital experiences, blending creativity with strategy to elevate brands online.",
      image: curvdzn,
      technologies: ["React", "CSS Modules", "REST API", "Local Storage"],
      liveUrl: "https://www.curvdzn.com/",
      category: "Agency Website",
      year: "2024",
      featured: true,
    },
    {
      title: "We Must Collab",
      description:
        "Must Collab connects creators and brands through a seamless, user-friendly platform for impactful collaborations and campaign growth.",
      image: wemustcollab,
      technologies: ["React", "CSS Modules", "TypeScript", "Responsive Design"],
      liveUrl: "https://join.wemustcollab.com/",
      category: "Platform",
      year: "2023",
      featured: true,
    },
    {
      title: "Intellispiders",
      description:
        "Intellispiders is a results-driven digital agency specializing in smart, scalable solutions for web development, marketing, and branding.",
      image:Intellispiders,
      technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
      liveUrl: "https://intellispiders.com/",
      category: "Corporate Website",
      year: "2023",
      featured: false,
    },
    {
      title: "Yesalgo",
      description:
        "Yesalgo is a sleek, custom WordPress theme tailored for Software IT companies, combining modern design with high performance and flexibility.",
      image: Yesalgo,
      technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
      liveUrl: "https://yesalgo.co/",
      category: "IT Solutions",
      year: "2023",
      featured: false,
    },
    {
      title: "Traders Training Academy",
      description:
        "Traders Training Academy is a platform dedicated to educating aspiring traders through practical strategies, live sessions, and market insights.",
      image:TTA,
      technologies: ["HTML", "CSS Modules", "JavaScript", "Local Storage"],
      liveUrl: "https://traderstrainingacademy.co.in/",
      category: "Educational Platform",
      year: "2022",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>04</span>
          <h2 className={styles.title}>Featured Projects</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>Showcasing my passion for creating exceptional digital experiences</p>
        </div>

        {/* Featured Projects */}
        <div className={styles.featuredSection}>
          <h3 className={styles.sectionTitle}>
            <Award className={styles.sectionIcon} />
            Spotlight Projects
          </h3>
          <div className={styles.featuredGrid}>
            {featuredProjects.map((project, index) => (
              <div key={index} className={`${styles.projectCard} ${styles.featuredCard}`}>
                <div className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</div>

                <div className={styles.imageContainer}>
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className={styles.projectImage} />
                  <div className={styles.imageOverlay}>
                    <div className={styles.projectLinks}>
                      <a
                        href={project.liveUrl}
                        className={styles.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                        <span>Live Site</span>
                      </a>
                    </div>
                  </div>
                  <div className={styles.categoryBadge}>{project.category}</div>
                </div>

                <div className={styles.projectContent}>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectYear}>
                      <Calendar size={14} />
                      {project.year}
                    </span>
                  </div>

                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>

                  <div className={styles.technologies}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.cardGlow}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className={styles.otherSection}>
          <h3 className={styles.sectionTitle}>
            <Users className={styles.sectionIcon} />
            More Projects
          </h3>
          <div className={styles.otherGrid}>
            {otherProjects.map((project, index) => (
              <div key={index} className={`${styles.projectCard} ${styles.compactCard}`}>
                <div className={styles.compactImageContainer}>
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className={styles.compactImage} />
                  <div className={styles.compactOverlay}>
                    <a href={project.liveUrl} className={styles.compactLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div className={styles.compactContent}>
                  <div className={styles.compactHeader}>
                    <h4 className={styles.compactTitle}>{project.title}</h4>
                    <span className={styles.compactYear}>{project.year}</span>
                  </div>

                  <p className={styles.compactDescription}>{project.description}</p>

                  <div className={styles.compactTechnologies}>
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className={styles.compactTech}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={styles.techMore}>+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>6+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>2.6+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

