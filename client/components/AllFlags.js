import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllFlags} from '../store/flags'

export class AllFlags extends React.Component {
  componentDidMount() {
    this.props.getFlags()
  }

  render() {
    const {flags} = this.props
    console.log('isithere', flags)
    return (
      <div id="allflags">
        <h1 id="allflagstitle">ALL PRIDE FLAGS</h1>
        {flags.map(flag => (
          <div id="oneflag" key={flag.id}>
            <Link to={`/flags/${flag.id}`}>
              <b>
                {flag.name} {flag.year}
              </b>
            </Link>
            <br />
            <img id="flagmage" src={flag.imageurl} alt={flag.id} />
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
