import React from 'react'
import * as styles from './polaroid.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const Polaroid = ({ image, alt, children }) => {
  return (
    <div className={styles.polaroid}>
      <GatsbyImage image={image} alt={alt} className={styles.imageWrapper} imgClassName={styles.image}/>
      {children}
    </div>
  );
}

export default Polaroid;
