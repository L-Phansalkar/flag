import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllFlags} from '../store/flags'
var intro = ''
const makeUrl = second => {
  return intro + second
}

export class AllFlags extends React.Component {
  componentDidMount() {
    this.props.getFlags()
    if (window.location.href === 'http://localhost:8080/allflags') {
      intro = 'http://localhost:8080/'
    } else {
      intro = 'https://pr1deflags.herokuapp.com/'
    }
  }

  render() {
    const {flags} = this.props

    return (
      <div id="allflags">
        <h1 id="allflagstitle">ALL PRIDE FLAGS</h1>
        {flags.map(flag => (
          <div id="oneflag" key={flag.id}>
            <b>
              {flag.name} {flag.alt} {flag.year}
            </b>
            <br />
            <img id="flagmage" src={makeUrl(flag.imageurl)} alt={flag.id} />
          </div>
        ))}
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

export default connect(mapState, mapDispatch)(AllFlags)
