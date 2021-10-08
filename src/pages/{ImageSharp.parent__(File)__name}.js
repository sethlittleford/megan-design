import React from "react";
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import * as styles from './PolaroidDetail.module.css'
import { mapImageToSVG } from '../components/handwritten-svgs/map-image-to-svg'

const PolaroidDetail = (props) => {
  const imageName = props.params.parent__name
  let SVGComponent = mapImageToSVG.get(props.data.imageSharp.parent.name)
  return(
    <Layout>
      <div className={styles.container}>
        <GatsbyImage image={props.data.imageSharp.gatsbyImageData} alt={imageName} className={styles.image}/>
        <div className={styles.svgContainer}>{SVGComponent}</div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($id: String) {
    imageSharp(id: { eq: $id }) {
      id
      gatsbyImageData
      parent {
        ... on File {
          name
        }
      }
    }
  }
`

export default PolaroidDetail
