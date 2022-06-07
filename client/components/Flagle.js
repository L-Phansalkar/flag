import * as React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllFlags} from '../store/flags'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
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
  return `${date}-${DateTime.now().weekday}`
}

export class Flagle extends React.Component {
  componentDidMount() {
    this.props.getFlags()
  }

  render() {
    const {flags} = this.props
    var chosenFlag = flags[Math.floor(Math.random() * flags.length)]

    const day = getDayString()

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
