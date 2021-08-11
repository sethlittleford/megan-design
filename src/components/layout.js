import * as React from "react"
import PropTypes from "prop-types"


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