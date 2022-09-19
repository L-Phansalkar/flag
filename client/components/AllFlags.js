import React from 'react'
import {connect} from 'react-redux'
import {getAllFlags, fetchGroupFlag} from '../store/flags'
import Select from 'react-select'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'

const aquaticCreatures = [
  {label: 'Lesbian'},
  {label: 'Gay'},
  {label: 'Bisexual'},
  {label: 'Bigender'},
  {label: 'Transgender'},
  {label: 'Intersex'},
  {label: 'All'},
  {label: 'Abrosexual'},
  {label: 'Agender'},
  {label: 'Aromantic'},
  {label: 'Asexual'},
  {label: 'Nonbinary'},
  {label: 'Polysexual'},
  {label: 'Pansexual'},
  {label: 'Pride'}
]

var intro = ''
const makeUrl = second => {
  return intro + second
}

export class AllFlags extends React.Component {
  constructor() {
    super()
    this.state = {
      class: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  handleChange(event) {
    this.setState({
      class: event.label
    })
    if (event.label === 'All') {
      this.props.getFlags()
    } else {
      this.props.filterFlag(event.label)
    }
    const {newFlag} = this.props
    console.log(newFlag)
  }

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
    console.log('statre', this.state, 'props', this.props)
    return (
      <div id="allflags">
        <h1 id="allflagstitle">PRIDE FLAGS TIMELINE</h1>
        <div id="dropdown">
          <Select
            options={aquaticCreatures}
            defaultLabel="All"
            onChange={opt => {
              console.log(opt.label, opt.value)
              this.handleChange(opt)
            }}
          />
        </div>
        <div className="timeline">
          <div className="outer">
            {flags.map(flag => (
              <div className="card" key={flag.id}>
                <div className="info">
                  <h2 className="title">{flag.year}</h2>
                  {/* <h1 className="year">{flag.year}</h1> */}
                  <div className="insidecontainer">
                    <h2 className="flagtiti">
                      {flag.name} {flag.altname}
                    </h2>
                    <img
                      id="flagmage"
                      src={makeUrl(flag.imageurl)}
                      alt={flag.id}
                    />
                    <h6 id="cretor">{flag.creator}</h6>
                    <h6 id="contr">{flag.controversial}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
    getFlags: () => dispatch(getAllFlags()),
    filterFlag: name => dispatch(fetchGroupFlag(name))
  }
}

export default connect(mapState, mapDispatch)(AllFlags)
