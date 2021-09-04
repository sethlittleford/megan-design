import React from 'react'
import Layout from '../components/layout'
import Polaroid from '../components/polaroid'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { mapImageToSVG } from '../components/handwritten-svgs/map-image-to-svg'
import * as styles from './index.module.css'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1 className={styles.h1}>Gallery</h1>
      <div className={styles.grid}>
        {data.allFile.nodes.map(node => {
          let image = getImage(node);
          let alt = node.childImageSharp.parent.name;
          let SVGComponent = mapImageToSVG.get(alt);
          return <Polaroid image={image} alt={alt}>{SVGComponent}</Polaroid>
        })}
      </div>
    </Layout>
  );
}

export const textilePatternImageQuery = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "textile-patterns"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  }
`

export default IndexPage
