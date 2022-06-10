import React from 'react'
import {Link} from 'react-router-dom'

export const Home = () => {
  return (
    <div id="home">
      <h1 id="welcome">Welcome to the Pride Flag Database and API</h1>
      <div id="words">
        <h2>
          <u>INTRODUCTION</u>
        </h2>
        <h3>This site is intended for both developers and users alike!</h3>
        <h3>
          Currently, this site contains the images of 40 pride flag variations
          (and counting!)
        </h3>
        <h3> You can browse all flags by clicking the flags button below:</h3>
        <h1 id="allofem">
          <Link to="/allflags"> FLAGS </Link>
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
          http://pr1deflags.herokuapp.com/flags/{' '}
          <b>flag name (+ flag altname) + flag year + .png</b>
        </h1>
        <h2>
          <u>EXAMPLE</u>
        </h2>
        <img id="lesample" src="/lestest.png" width="150" heigth="150" />
        <b>
          <h2 id="leswords">
            http://pr1deflags.herokuapp.com/flags/lesbian2011.png
          </h2>
        </b>
        <br />
        <img id="altnametest" src="/altnametest.png" width="350" heigth="250" />
        <h2 id="agwords1">
          LEFT: http://pr1deflags.herokuapp.com/flags/agender2021.png
        </h2>
        <h2 id="agwords2">
          RIGHT: http://pr1deflags.herokuapp.com/flags/agendercitrus2021.png
        </h2>
        <h2>
          <u>USE-CASE EXAMPLE</u>
        </h2>
        <h1 id="gm">
          <Link to="/game"> GAME </Link>
        </h1>
      </div>
      <footer id="foot">
        <p>
          <a href="https://forms.gle/Q8YzHxzgjuN4g1xD9">Feedback Form</a>
        </p>
      </footer>
    </div>
  )
}
export default Home
