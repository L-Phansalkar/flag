import React from 'react'
import {Link} from 'react-router-dom'

export const Home = () => {
  return (
    <div id="home">
      <h1 id="welcome">Welcome to the Pride Flag Database and API</h1>
      <img
        id="famtree"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Gay_man_flag_chart.jpg/800px-Gay_man_flag_chart.jpg"
        alt="Map"
      />
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
        <h1>
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
        <h1>
          http://pr1deflags.herokuapp.com/flags/{' '}
          <b>flag name (+ flag altname) + flag year</b>
        </h1>
        <h2>
          <u>EXAMPLE</u>
        </h2>
        <h3>Let's say you wanted to use the lesbian flag </h3>
        <h2>
          <u>USE-CASE EXAMPLE</u>
        </h2>
        <h1>
          <Link to="/game"> GAME </Link>
        </h1>
      </div>
    </div>
  )
}
export default Home
