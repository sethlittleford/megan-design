import React from 'react'
import * as styles from './header.module.css'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Hamburger from '../svg/hamburger.svg';

export default function Header() {
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
        <div className={styles.mobileMenu}>
          <Link to="/" activeClassName={styles.activeLink}>Gallery</Link>
          <Link to="/" activeClassName={styles.activeLink}>Collaborations</Link>
          <Link to="/" activeClassName={styles.activeLink}>About Me</Link>
          <Link to="/" activeClassName={styles.activeLink}>Contact</Link>
        </div>
        <button className={styles.hamburger}>
          <Hamburger />
        </button>
      </nav>
    </header>
  )
}