/**
 * This Layout component is used for things shared
 * throughout the site such as the header, footer,
 * and global styles.
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import "normalize.css" // for broswer rendering consistency


const Layout = ({ children }) => {
  return (
    <>
      <div>Header</div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <div>Footer</div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout