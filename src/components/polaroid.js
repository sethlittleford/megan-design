import React from 'react'
import * as styles from './polaroid.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Polaroid = ({ image, alt, path, children }) => {
  return (
    <Link to={path}>
      <div className={styles.polaroid}>
        <GatsbyImage image={image} alt={alt} className={styles.imageWrapper} imgClassName={styles.image}/>
        {children}
      </div>
    </Link>
  );
}

export default Polaroid;
