/**
 * This Layout component is used for things shared
 * throughout the site such as the header, footer,
 * and global styles.
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import * as styles from './layout.module.css'
import "normalize.css" // for broswer rendering consistency


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <div>Footer</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout