import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllFlags} from '../store/flags'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import {styled} from '@mui/material/styles'

const Item = styled(Card)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

export class Flagle extends React.Component {
  componentDidMount() {
    this.props.getFlags()
  }

  render() {
    const {flags} = this.props
    var chosenFlag = flags[Math.floor(Math.random() * flags.length)]
    console.log('chosenFlag', chosenFlag)
    return (
      <div id="flaglegamle">
        {chosenFlag ? (
          <div id="loaded">
            {/* // want to use chosenFlag.image as the background image that is covered up//
    //want to have two dropdowns - one that corresponds to all of the flag.names and one that corresponds to all of the flag.years//
    //will return correct for name + year individually//
    //stats box - import from somewhere?// */}

            <Box
              sx={{flexGrow: 1}}
              style={{backgroundImage: `url(${chosenFlag.imageurl})`}}
              id="imabox"
            >
              <Grid container spacing={0}>
                <Grid item xs={4}>
                  <Item className="card" />
                </Grid>
                <Grid item xs={4}>
                  <Item className="card" />
                </Grid>
                <Grid item xs={4}>
                  <Item className="card" />
                </Grid>
                <Grid item xs={4}>
                  <Item className="card" />
                </Grid>
                <Grid item xs={4}>
                  <Item className="card" />
                </Grid>
                <Grid item xs={4}>
                  <Item className="card" />
                </Grid>
              </Grid>
            </Box>
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
