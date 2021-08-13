import React from 'react'
import * as styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        Image Gallery Collaborations About Me Contact
      </div>
    </header>
  )
}