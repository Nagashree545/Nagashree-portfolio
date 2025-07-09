"use client"
import { useEffect, useState } from "react"
import styles from "../Styles/BackgroundEffects.module.css"

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.gridPattern} />
      <div className={styles.gradientOrb1} />
      <div className={styles.gradientOrb2} />
      <div className={styles.gradientOrb3} />

      <div
        className={styles.mouseFollower}
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
        }}
      />

      {/* Animated geometric shapes */}
      <div className={styles.geometricShape1} />
      <div className={styles.geometricShape2} />
      <div className={styles.geometricShape3} />
    </div>
  )
}
