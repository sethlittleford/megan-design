import React from 'react'
import * as styles from './polaroid.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Polaroid = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allImageSharp {
  //       edges {
  //         node {
  //           gatsbyImageData(width: 293, height: 293, placeholder: BLURRED)
  //         }
  //       }
  //     }
  //   }
  // `)
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: {eq: "Megan_Littleford_Design_Logo.png"}) {
  //       childImageSharp {
  //         gatsbyImageData(width: 293, height: 293, placeholder: BLURRED)
  //       }
  //     }
  //   }
  // `)
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bluebirds.png" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage);
  return (
    <div className={styles.polaroid}>
      <div className={styles.imageShadow}>
        <GatsbyImage image={image} alt={"testimage"} className={styles.findMe}/>
      </div>
    </div>
  );
}

export default Polaroid;
