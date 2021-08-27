import React from 'react'
import * as styles from './polaroid.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Polaroid = ({ image }) => {
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
      <GatsbyImage image={image} alt={"testimage"} className={styles.imageWrapper}/>
    </div>
  );
}

export default Polaroid;
