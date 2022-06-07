import React from 'react'
import {Link} from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <h3>Welcome to the Pride Flag Database and API</h3>
      <h4>some things u can do:</h4>
      <h4>browse all flags by clicking the flags button</h4>
      <Link to="/allflags"> FLAGS </Link>
      <br />
      <h4>
        dont know much about pride flags? Play Pride-le (yes, kind of like
        Wordle) to learn about a new flag everyday{' '}
      </h4>
      <h4>just here to hook into the API?</h4>
    </div>
  )
}
export default Home
