import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div id="navbar">
    <h3>PRIDE FLAG INFORSHEIN </h3>
    <br />
    <nav id="navy">
      <div>
        <Link to="/api-info">API PLOOL</Link>
        <br />
        <Link to="/"> TIMELINE </Link>
      </div>
    </nav>
  </div>
)

export default Navbar

