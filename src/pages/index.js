import React from 'react'
import Layout from '../components/layout'
import Polaroid from '../components/polaroid'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div>This is the home page Gallery.</div>
      {data.allImageSharp.edges.map(edge => {
        let image = getImage(edge.node);
        // return <GatsbyImage image={seth} alt={"testimage"}/> 
        return <Polaroid image={image} />
      })}
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allImageSharp {
      edges {
        node {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`

export default IndexPage
