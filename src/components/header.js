import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../assets/logo.svg"
import UIOptions from "./uioptions"
import Navbar from "./navbar"

export default function Header({ siteTitle }) {

  return (
    <header
      style={{
        background: `#fff`,
        borderBottom: `1px solid #ccc`,
      }}
    >
      <UIOptions />
      <div
        style={{
          padding: `2.90rem 1.0875rem 1.45rem`,
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `#000`,
              textDecoration: `none`,
            }}
          >
            <Logo
              style={{
                width: `260px`,
              }}
              alt={siteTitle}
            />
          </Link>
        </h1>
        <Navbar />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
