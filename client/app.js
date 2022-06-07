import React from 'react'
import {ToastContainer} from 'react-toastify'
import {injectStyle} from 'react-toastify/dist/inject-style'
import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  injectStyle()
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
