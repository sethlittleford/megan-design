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
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "Megan_Littleford_Design_Logo.png"}) {
        childImageSharp {
          gatsbyImageData(width: 293, height: 293, placeholder: BLURRED)
        }
      }
    }
  `)
  console.log(data);
  const image = getImage(data.file);
  return (
    <div className={styles.polaroid}>
      <GatsbyImage image={image} alt="some alt description" />
    </div>
  );
}

export default Polaroid;
