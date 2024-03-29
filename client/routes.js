import React, {Component} from 'react'

import {withRouter, Route} from 'react-router-dom'

import {ApInfo, AllFlags, Flagle} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={AllFlags} />
        <Route exact path="/api-info" component={ApInfo} />
        <Route path="/game" component={Flagle} />
      </div>
    )
  }
}

/**
 * CONTAINER
 */

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)

/**
 * PROP TYPES
 */
