import React from 'react'
import Layout from '../components/layout'
import Polaroid from '../components/polaroid'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Bluebirds from '../components/bluebirds'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div>This is the home page Gallery.</div>
      {data.allFile.nodes.map(node => {
        let image = getImage(node);
        let alt = node.childImageSharp.parent.name;
        return <Polaroid image={image} alt={alt} />
      })}
      <Bluebirds />
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
