import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div id="navbar">
    <h1 id="pfapi">PRIDE FLAG API</h1>
    <br />
    <nav id="navy">
      <div>
        <Link to="/api-info">API DOCS</Link>
        <br />
        <Link to="/"> TIMELINE </Link>
      </div>
    </nav>
  </div>
)

/**
 * CONTAINER
 */

export default Navbar

/**
 * PROP TYPES
 */
