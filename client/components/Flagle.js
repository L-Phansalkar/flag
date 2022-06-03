import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllFlags} from '../store/flags'

export class Flagle extends React.Component {
  componentDidMount() {
    this.props.getFlags()
  }

  render() {
    const {flags} = this.props
    var chosenFlag = flags[Math.floor(Math.random() * flags.length)]
    console.log('chosenFlag', chosenFlag)
    return (
      <div>
        {chosenFlag ? (
          <div>
            <img id="flagmage" src={chosenFlag.imageurl} alt={chosenFlag.id} />
            {/* // want to use chosenFlag.image as the background image that is covered up//
    //want to have two dropdowns - one that corresponds to all of the flag.names and one that corresponds to all of the flag.years//
    //will return correct for name + year individually//
    //stats box - import from somewhere?// */}
          </div>
        ) : (
          <div>L O A D I N G</div>
        )}
      </div>
    )
  }
}
const mapState = state => {
  return {
    flags: state.flags
  }
}

const mapDispatch = dispatch => {
  return {
    getFlags: () => dispatch(getAllFlags())
  }
}

export default connect(mapState, mapDispatch)(Flagle)
