import React from "react";
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'


const PolaroidDetail = (props) => {
  const imageName = props.params.parent__name
  return <GatsbyImage image={props.data.imageSharp.gatsbyImageData} alt={imageName} />
}

export const query = graphql`
  query($id: String) {
    imageSharp(id: { eq: $id }) {
        id
        gatsbyImageData
    }
  }
`

export default PolaroidDetail
