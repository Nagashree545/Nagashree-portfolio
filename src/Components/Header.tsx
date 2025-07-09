"use client"
import { useState, useEffect } from "react"
import styles from "../Styles/Header.module.css"
import { Menu, X, Zap } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Zap className={styles.logoIcon} />
          <span className={styles.logoText}>NAGASHREE</span>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <button onClick={() => scrollToSection("home")} className={styles.navLink}>
            <span className={styles.navNumber}>01</span>
            <span>Home</span>
          </button>
          <button onClick={() => scrollToSection("about")} className={styles.navLink}>
            <span className={styles.navNumber}>02</span>
            <span>About</span>
          </button>
          <button onClick={() => scrollToSection("skills")} className={styles.navLink}>
            <span className={styles.navNumber}>03</span>
            <span>Skills</span>
          </button>
          <button onClick={() => scrollToSection("projects")} className={styles.navLink}>
            <span className={styles.navNumber}>04</span>
            <span>Projects</span>
          </button>
          <button onClick={() => scrollToSection("contact")} className={styles.navLink}>
            <span className={styles.navNumber}>05</span>
            <span>Contact</span>
          </button>
        </nav>

        <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
