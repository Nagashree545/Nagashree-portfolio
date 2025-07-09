import styles from "../Styles/About.module.css"
import { Zap, Target, Heart, Award } from "lucide-react"

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>02</span>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.textSection}>
            <div className={styles.introCard}>
              <h3 className={styles.cardTitle}>My Journey</h3>
              <p className={styles.description}>
                I'm a passionate frontend developer with <span className={styles.highlight}>2.6 years</span> of
                experience crafting digital experiences that users love. My journey began with curiosity and has evolved
                into a deep passion for creating beautiful, functional web applications.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <h3 className={styles.cardTitle}>My Philosophy</h3>
              <p className={styles.description}>
                I believe in the power of <span className={styles.highlight}>clean code</span>,
                <span className={styles.highlight}> user-centered design</span>, and
                <span className={styles.highlight}> continuous learning</span>. Every project is an opportunity to push
                boundaries and create something extraordinary.
              </p>
            </div>

            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <Zap className={styles.valueIcon} />
                <h4>Innovation</h4>
                <p>Always exploring new technologies and approaches</p>
              </div>

              <div className={styles.valueCard}>
                <Target className={styles.valueIcon} />
                <h4>Precision</h4>
                <p>Attention to detail in every line of code</p>
              </div>

              <div className={styles.valueCard}>
                <Heart className={styles.valueIcon} />
                <h4>Passion</h4>
                <p>Love for creating meaningful user experiences</p>
              </div>

              <div className={styles.valueCard}>
                <Award className={styles.valueIcon} />
                <h4>Excellence</h4>
                <p>Committed to delivering high-quality solutions</p>
              </div>
            </div>
          </div>

          <div className={styles.visualSection}>
            <div className={styles.experienceCard}>
              <div className={styles.experienceNumber}>2.6</div>
              <div className={styles.experienceLabel}>Years of Experience</div>
              <div className={styles.experienceDescription}>
                Building modern web applications with cutting-edge technologies
              </div>
            </div>

            <div className={styles.techStack}>
              <h4 className={styles.techTitle}>Tech Arsenal</h4>
              <div className={styles.techGrid}>
                <div className={styles.techItem}>React</div>
                <div className={styles.techItem}>TypeScript</div>
                <div className={styles.techItem}>HTML5</div>
                <div className={styles.techItem}>CSS3</div>
                <div className={styles.techItem}>Tailwind</div>
                <div className={styles.techItem}>WordPress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
