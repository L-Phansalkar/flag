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
        <img
          src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/302680329_1067481880673208_1265823754870680587_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=f7BHKzoJLmgQ7kNvgHsA9Av&_nc_ht=scontent-lga3-1.xx&oh=00_AYD5fbNhsj0vDAyhXweuG_fguhshG86QBy35LatUGrgiBQ&oe=66C48BB8"
          alt="Italian Trulli"
        />
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
