import React from 'react'
import * as styles from './polaroid.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Polaroid = ({ image, alt, children }) => {
  return (
    <Link to={`${alt}`}>
      <div className={styles.polaroid}>
        <GatsbyImage image={image} alt={alt} className={styles.imageWrapper} imgClassName={styles.image}/>
        {children}
      </div>
    </Link>
  );
}

// export const gatsbyPathQuery = graphql`
//   query {
//     allFile(filter: {relativeDirectory: {eq: "textile-patterns"}}) {
//       nodes {
//         childImageSharp {
//           gatsbyImageData(
//             placeholder: BLURRED
//           )
//           parent {
//             ... on File {
//               name
//             }
//           }
//         }
//       }
//     }
//   }
// `


export default Polaroid;
