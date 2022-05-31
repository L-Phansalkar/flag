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
    return <div>i am flagle here he ror</div>
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
