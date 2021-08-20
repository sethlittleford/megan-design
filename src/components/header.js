import React, { useState } from 'react'
import * as styles from './header.module.css'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Hamburger from './hamburger'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [touched, setTouched] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setTouched(true);
  }
  return (
    <header className={styles.header}>
      <nav className={styles.content}>
        <Link to="/">
          <StaticImage 
            src="../images/Megan_Littleford_Design_Logo.png" 
            alt="Megan Littleford Design" 
            placeholder="blurred"
            layout="fixed"
            height={62}
          />
        </Link>
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.openMenu : ''}`}>
          <Link to="/" activeClassName={styles.activeLink}>Gallery</Link>
          <Link to="/" activeClassName={styles.activeLink}>Collaborations</Link>
          <Link to="/" activeClassName={styles.activeLink}>About Me</Link>
          <Link to="/" activeClassName={styles.activeLink}>Contact</Link>
        </div>
        <button className={styles.hamburger} onClick={toggleMobileMenu}>
          <div className={styles.circle}>
            <Hamburger touched={touched} clicked={mobileMenuOpen}/>
          </div>
        </button>
      </nav>
    </header>
  )
}