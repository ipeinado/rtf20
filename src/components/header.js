import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../assets/logo.svg"
import UIOptions from "./uioptions"

export default function Header({ siteTitle }) {

  return (
    <header
      style={{
        background: `#fff`,
        marginBottom: `1.45rem`,
        borderBottom: `1px solid #ccc`,
      }}
    >
      <UIOptions />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
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
                width: `280px`,
              }}
              alt={siteTitle}
            />
          </Link>
        </h1>
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
