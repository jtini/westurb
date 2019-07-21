import React from "react"
import PropTypes from "prop-types"
import './layout.scss'

const Layout = ({ children }) => (
  <>
    <main className="main">{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
