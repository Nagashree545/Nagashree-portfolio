import styles from "../Styles/Skills.module.css"
import { Code, Palette, Zap } from "lucide-react"

export default function Skills() {
  const skills = [
    { name: "React", level: 90, icon: "⚛️", color: "#61dafb" },
    { name: "TypeScript", level: 85, icon: "📘", color: "#3178c6" },
    { name: "HTML/CSS", level: 95, icon: "🎨", color: "#e34f26" },
    { name: "Tailwind CSS", level: 88, icon: "💨", color: "#06b6d4" },
    { name: "JavaScript", level: 90, icon: "⚡", color: "#f7df1e" },
    { name: "WordPress", level: 80, icon: "📝", color: "#21759b" },
  ]

  const categories = [
    {
      title: "Frontend Development",
      icon: <Code />,
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
      color: "#ff0096",
    },
    {
      title: "Styling & Design",
      icon: <Palette />,
      skills: ["Tailwind CSS", "CSS Modules", "Responsive Design", "Animations"],
      color: "#00ffff",
    },
    {
      title: "Tools & Workflow",
      icon: <Zap />,
      skills: ["Git", "Webpack", "NPM", "Figma", "VS Code"],
      color: "#ffff00",
    },
  ]

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>03</span>
          <h2 className={styles.title}>Skills & Expertise</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>Technologies I master to bring ideas to life</p>
        </div>

        <div className={styles.skillsContainer}>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={skill.name} className={styles.skillCard}>
                <div className={styles.skillHeader}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <div className={styles.skillInfo}>
                    <h3 className={styles.skillName}>{skill.name}</h3>
                    <span className={styles.skillPercentage}>{skill.level}%</span>
                  </div>
                </div>

                <div className={styles.skillBar}>
                  <div
                    className={styles.skillProgress}
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                      animationDelay: `${index * 0.2}s`,
                    }}
                  />
                </div>

                <div className={styles.skillGlow} style={{ backgroundColor: skill.color }}></div>
              </div>
            ))}
          </div>

          <div className={styles.categoriesSection}>
            <h3 className={styles.categoriesTitle}>Skill Categories</h3>
            <div className={styles.categoriesGrid}>
              {categories.map((category, index) => (
                <div key={category.title} className={styles.categoryCard}>
                  <div className={styles.categoryHeader}>
                    <div className={styles.categoryIcon} style={{ color: category.color }}>
                      {category.icon}
                    </div>
                    <h4 className={styles.categoryTitle}>{category.title}</h4>
                  </div>

                  <div className={styles.categorySkills}>
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={styles.categorySkill}
                        style={{
                          borderColor: category.color,
                          animationDelay: `${skillIndex * 0.1}s`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
