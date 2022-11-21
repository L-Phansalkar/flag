import React from 'react'
import {Link} from 'react-router-dom'

export const ApInfo = () => {
  return (
    <div id="home">
      <div id="words">
        <h2>
          <u>INTRODUCTION</u>
        </h2>
        <h3>This site is intended for both developers and users alike!</h3>
        <h3>
          Currently, this site contains the images of 59 pride flag variations
          (and counting!), as well as their names, years, creators, and
          controversial status
        </h3>
        <h3> You can browse all flags by clicking the flags button below:</h3>
        <h1 id="allofem">
          <Link to="/"> FLAGS </Link>
        </h1>
        <h3>
          this API allows developers to easily access and use the most specific,
          widely accepted, and/or current flag for thier needs
        </h3>
        <h2>
          <u>HOW-TO</u>
        </h2>
        <h3>
          {' '}
          to hook into the API, find the flag name, year, and alternate name
          (altname) if it has one. Alternate names are used to differentiate
          flags of the same type created in the same year
        </h3>
        <h3>the API name is all lowercase and the structure is as follows: </h3>
        <h1 id="thestructure">
          https://pride-flags.onrender.com/flags/{' '}
          <b>flag name (+ flag altname) + flag year + .png</b>
        </h1>
        <h2>
          <u>EXAMPLE</u>
        </h2>
        <img id="lesample" src="/lestest.png" width="150" heigth="150" />
        <b>
          <h3 id="leswords">
            <b>https://pride-flags.onrender.com/flags/lesbian2011.png</b>
          </h3>
        </b>
        <br />
        <img id="altnametest" src="/altnametest.png" width="350" heigth="250" />
        <h3 id="agwords1">
          <b>LEFT: https://pride-flags.onrender.com/flags/agender2021.png</b>
        </h3>
        <h3 id="agwords2">
          <b>
            RIGHT: https://pride-flags.onrender.com/flags/agendercitrus2021.png
          </b>
        </h3>
      </div>
    </div>
  )
}
export default ApInfo
