"use client"
import { useEffect, useState } from "react"
import styles from "../Styles/FloatingElements.module.css"

export default function FloatingElements() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className={styles.floatingContainer}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={styles.particle}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      <div className={styles.shape1} />
      <div className={styles.shape2} />
      <div className={styles.shape3} />
    </div>
  )
}
