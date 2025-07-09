import styles from "../Styles/Footer.module.css"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.name}>Nagashree</h3>
            <p className={styles.tagline}>Frontend Developer</p>
          </div>

          <div className={styles.socialLinks}>
            <a href="mailto:nagashrees545@gmail.com" className={styles.socialLink}>
              <Mail size={20} />
            </a>
            <a href="https://github.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2024 Nagashree. All rights reserved.</p>
          <p className={styles.madeWith}>
            Made with <Heart size={16} className={styles.heart} /> using React & CSS Modules
          </p>
        </div>
      </div>
    </footer>
  )
}
