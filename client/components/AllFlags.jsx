import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getAllFlags, fetchGroupFlag} from '../store/flags'
import {Header} from './index'
import Select from 'react-select';




const flagGroups = [
  {label: 'Lesbian'},
  {label: 'Gay'},
  {label: 'Bisexual'},
  {label: 'Transgender'},
  {label: 'Intersex'},
  {label: 'All'},
  {label: 'Agender'},
  {label: 'Aromantic'},
  {label: 'Nonbinary'},
  {label: 'Pride'}
]



// var intro = ''
// const makeUrl = second => {
//   return 'localhost:8080/' + second
// }

  // if flag.controversial = true, make the opacity less + display "controversial"


function isCont(value) { 
  console.log("vvial",value)
 if (value){
  return <div>CONTROVERSIAL</div>
 }
} 

class AllFlags extends Component {
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
    // if (window.location.href === 'localhost:8080') {
    //   intro = 'localhost:8080/'
    // } else {
    //   intro = 'localhost:8080/'
    // }
  }








  
  render() {
  
    const {flags} = this.props
    
    console.log('statre', this.state, 'props', flags, 'url')
    return (
      <div id="allflags">
        <div>
        <Header />
        </div>
        <div className="thisHoldsAllCards">
               <div id="dropdown">
              <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={flagGroups[6]}
              options={flagGroups}
              backgroundColor="blue"
              defaultLabel="All"
              onChange={opt => {
              this.handleChange(opt)
            }}
          />
          <div
        style={{
          color: 'hsl(0, 0%, 40%)',
          display: 'inline-block',
          fontSize: 12,
          fontStyle: 'italic',
          marginTop: '1em',
        }}
      ></div>
        </div>

          {flags.map(flag => (
          
            <div className="IndivFlagCard" key={flag.id}>
              <div className="TitleCard">
                <h1 className="yr">{flag.year}</h1>
                <h1 className="crtr">{flag.creator}</h1>
              </div>
              <div className="img__wrap">
                  <a href={flag.imageurl}>
                    <img id="flagmage" src={flag.imageurl} alt={flag.id} />
                    <p className="img_cont">{isCont(flag.controversial)}</p>
                    <p className="img__description">{flag.description}</p>
                  </a>
                  </div>
              </div>
           
          ))}

        </div> 

    
        {/* <div id="dropdown">
          <Select
            options={aquaticCreatures}
            defaultLabel="All"
            onChange={opt => {
              this.handleChange(opt)
            }}
          />
        </div> */}
        {/* <div className="outer">
          {flags.map(flag => (
            <div className="card" key={flag.id}>
              <div className="info">
                <h1 className="year">{flag.year}</h1>
                <h2 className="flagtiti">
                  {flag.name} {flag.altname}
                </h2>
                <div className="img__wrap">
                  <a href={flag.imageurl}>
                    <img id="flagmage" src={flag.imageurl} alt={flag.id} />
                    <p className="img__description">{flag.description}</p>
                  </a>
                  <h6 id="cretor">{flag.creator}</h6>
                  <h6>hello here is a change</h6>
                  <h6 id="contr">{flag.controversial}</h6>
                </div>
              </div>
            </div>
          ))}
        </div> */}
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
