import React, {Component} from 'react'

import { Route} from 'react-router-dom'

import {ApInfo, AllFlags} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={AllFlags} />
        <Route exact path="/api-info" component={ApInfo} />
  
      </div>
    )
  }
}



// /**
//  * CONTAINER
//  */

// // The `withRouter` wrapper makes sure that updates are not blocked
// // when the url changes
// export default Routes

// /**
//  * PROP TYPES
//  */
