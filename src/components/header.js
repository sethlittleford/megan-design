import React from 'react'
import * as styles from './header.module.css'
import { StaticImage } from "gatsby-plugin-image"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <StaticImage 
          src="../images/Megan_Littleford_Design_Logo.png" 
          alt="Megan Littleford Design" 
          placeholder="blurred"
          layout="fixed"
          height={62}
        />
      </div>
    </header>
  )
}