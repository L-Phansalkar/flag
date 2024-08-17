import React from 'react'
import {ToastContainer} from 'react-toastify'
import {injectStyle} from 'react-toastify/dist/inject-style'
import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  injectStyle()
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
