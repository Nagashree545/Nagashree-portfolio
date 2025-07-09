"use client"
import { useEffect, useState } from "react"
import styles from "../Styles/Hero.module.css"
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Palette } from "lucide-react"
import nagashree from "../Assets/profilephoto.jpeg"
export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Software Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        index = 0
      }
    }, 150)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <Sparkles size={16} />
            <span>Available for work</span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.greeting}>Hello, I'm</span>
            <span className={styles.name}>NAGASHREE</span>
            <span className={styles.role}>
              {text}
              <span className={styles.cursor}>|</span>
            </span>
          </h1>

          <p className={styles.description}>
            I craft <span className={styles.highlight}>beautiful</span> and{" "}
            <span className={styles.highlight}>functional</span> web experiences with 2.6 years of passion-driven
            development using cutting-edge technologies.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <Code className={styles.statIcon} />
              <div>
                <span className={styles.statNumber}>2.6+</span>
                <span className={styles.statLabel}>Years</span>
              </div>
            </div>
            <div className={styles.stat}>
              <Palette className={styles.statIcon} />
              <div>
                <span className={styles.statNumber}>6+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
            </div>
          </div>

          <div className={styles.cta}>
            <button
              className={styles.primaryBtn}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span>Let's Work Together</span>
              <div className={styles.btnGlow}></div>
            </button>

            <div className={styles.socialLinks}>
              <a href="mailto:nagashrees545@gmail.com" className={styles.socialLink}>
                <Mail size={20} />
              </a>
              {/* <a href="https://github.com/Nagashree545" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a> */}
              <a href="https://www.linkedin.com/in/nagashree-s-0282231a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.visualSection}>
          <div className={styles.profileContainer}>
            <div className={styles.profileImage}>
              <img
                src={nagashree}
                alt="Nagashree - Frontend Developer"
                className={styles.image}
              />
              <div className={styles.profileGlow}></div>
            </div>

            <div className={styles.floatingElements}>
              <div className={styles.floatingElement1}>React</div>
              <div className={styles.floatingElement2}>TypeScript</div>
              <div className={styles.floatingElement3}>CSS</div>
              <div className={styles.floatingElement4}>HTML</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <ArrowDown size={24} />
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
