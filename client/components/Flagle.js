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
var tileSet = [1, 2, 3, 4, 5, 6]

var chooseRandom = (flagobj, dayString) => {
  if (flagobj.length > 0) {
    if (!localStorage.getItem(`${dayString}`)) {
      localStorage.removeItem('flipped')
      var chosenFlag = flagobj[Math.floor(Math.random() * flagobj.length)]
      localStorage.setItem(`${dayString}`, JSON.stringify(chosenFlag))
    }
    var retrieveChosen = localStorage.getItem(`${dayString}`)
    return JSON.parse(retrieveChosen)
  }
}

export class Flagle extends React.Component {
  componentDidMount() {
    this.props.getFlags()
    var attemtps = 0
    toast(
      <div>
        <p>GAME INSTRUCTIONS</p>
        <p>
          you will have 6 chances to guess what pride flag is hidden behind the
          tiles
        </p>
        <p>
          please select a NAME and then a YEAR from the respective dropdowns to
          make a guess
        </p>
        <p>after each guess, a tile will be removed</p>
        <p>you can see your p </p>
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
        progress: undefined,
        width: '500'
      }
    )
  }
  componentDidUpdate() {
    var alreadyFlipped = localStorage.getItem(`flipped`)
    var alreadyFlippedArr = JSON.parse(alreadyFlipped)
    if (alreadyFlippedArr) {
      alreadyFlippedArr.map(eachnum => {
        const tile = document.getElementById(`num${eachnum}`)
        tile.classList.toggle('hidden')
      })
    }
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
            <FlagleNameDropdown chosenFlag={chosenFlag} tileSet={tileSet} />
            <FlagleYearDropdown chosenFlag={chosenFlag} tileSet={tileSet} />
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
