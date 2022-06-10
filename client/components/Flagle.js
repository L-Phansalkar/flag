import * as React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllFlags} from '../store/flags'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import {toast} from 'react-toastify'
import {styled} from '@mui/material/styles'
import {
  FlagleNameDropdown,
  FlagleYearDropdown,
  FlagGuess
} from './FlagleDropdown'
import {DateTime} from 'luxon'

const Item = styled(Card)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  width: 200,
  height: 172.5,
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

//date n time//
const getDayString = () => {
  const date = DateTime.now().toFormat('yyyy-MM-dd')
  console.log(`${date}-${DateTime.now().weekday}`)
  return `${date}-${DateTime.now().weekday}`
}
//random//
var chooseRandom = (flagobj, dayString) => {
  if (flagobj.length > 0) {
    if (!localStorage.getItem(`${dayString}`)) {
      console.log('flagobj', flagobj)
      var chosenFlag = flagobj[Math.floor(Math.random() * flagobj.length)]
      console.log('here?', chosenFlag)
      localStorage.setItem(`${dayString}`, JSON.stringify(chosenFlag))
    }
    var retrieveChosen = localStorage.getItem(`${dayString}`)
    return JSON.parse(retrieveChosen)
  }
}

export class Flagle extends React.Component {
  componentDidMount() {
    this.props.getFlags()
    toast(
      <div>
        <p>GAME INSTRUCTIONS</p>
        <p>
          you will have six chances to guess what pride flag is hidden below the
          black power tiles
        </p>
        <p>
          please select a NAME and then a YEAR from the respective dropdowns
        </p>
        <p>
          you must select the name first, and then the year in order to submit
          your guess
        </p>
        <p>each guess will show up below the hidden image box </p>
        <p>you will also receive two hints: </p>
        <p>
          1) up if the real name is later in the alphabet, or down if its
          earlier{' '}
        </p>
        <p>
          2) + if the real year is later/more current, or - if the real year is
          earlier/further in the past{' '}
        </p>
        <p>
          the hidden flag is randomized from the pride flag database, and
          changes every 24 hours
        </p>
        <p>good luck and have fun!</p>
      </div>,
      {
        position: 'top-center',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      }
    )
  }

  render() {
    const {flags} = this.props
    console.log('flaglist', flags)
    const currDay = getDayString()
    var chosenFlag = chooseRandom(flags, currDay)
    console.log('chosen', chosenFlag)
    return (
      <div id="flaglegamle">
        {chosenFlag ? (
          <div id="loaded">
            {/* // want to use chosenFlag.image as the background image that is covered up//
    //want to have two dropdowns - one that corresponds to all of the flag.names and one that corresponds to all of the flag.years//
    //will return correct for name + year individually//
    //stats box - import from somewhere?// */}

            <Grid
              container
              spacing={0}
              sx={{
                flexGrow: 1,
                width: 600,
                height: 345,
                backgroundImage: `url(${chosenFlag.imageurl})`
              }}
              id="gridcontainer"
            >
              <Grid item xs={4}>
                <Item className="card" id="num1" />
              </Grid>
              <Grid item xs={4}>
                <Item className="card" id="num2" />
              </Grid>
              <Grid item xs={4}>
                <Item className="card" id="num3" />
              </Grid>
              <Grid item xs={4}>
                <Item className="card" id="num4" />
              </Grid>
              <Grid item xs={4}>
                <Item className="card" id="num5" />
              </Grid>
              <Grid item xs={4}>
                <Item className="card" id="num6" />
              </Grid>
            </Grid>
            <FlagleNameDropdown chosenFlag={chosenFlag} />
            <FlagleYearDropdown chosenFlag={chosenFlag} />
            <FlagGuess />
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
