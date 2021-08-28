import React from 'react'
import * as styles from './polaroid.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const Polaroid = ({ image, alt, children }) => {
  // const { placeholderImage } = useStaticQuery(
  //   graphql`
  //     query {
  //       placeholderImage: file(relativePath: { eq: "bluebirds.png" }) {
  //         childImageSharp {
  //           gatsbyImageData(
  //             placeholder: BLURRED
  //             formats: [AUTO, WEBP, AVIF]
  //           )
  //         }
  //       }
  //     }
  //   `
  // )
  // const image = getImage(placeholderImage);
  return (
    <div className={styles.polaroid}>
      <GatsbyImage image={image} alt={alt} className={styles.imageWrapper} imgClassName={styles.image}/>
      {children}
    </div>
  );
}

export default Polaroid;
