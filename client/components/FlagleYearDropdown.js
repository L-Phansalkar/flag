import * as React from 'react'
import {useTheme} from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

const years = [
  '2000',
  '2001',
  '2002',
  '2003',
  '2004',
  '2005',
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015'
]

function getStyles(year, personYear, theme) {
  return {
    fontWeight:
      personYear.indexOf(year) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  }
}

var attempts = 1
export default function MultipleYSelect(props) {
  const theme = useTheme()
  const [personYear, setPersonYear] = React.useState([])

  const handleChange = event => {
    const {target: {value}} = event
    setPersonYear(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
    if (event.target.value === props.chosenYear) {
      console.log('u dit')
      return <div>one</div>
    } else if (attempts + props.attempts === 5) {
      console.log('FAIL')
      return <div>one</div>
    } else {
      attempts++
      var hint = props.chosenYear - event.target.value
      if (hint > 0) {
        console.log('hint', '+')
      } else if (hint < 0) {
        console.log('hint', '-')
      }
    }
    console.log(
      'clicked',
      event.target.value,
      'real',
      props.chosenYear,
      'attempts',
      attempts + props.attempts
    )
  }

  return (
    <div>
      <FormControl sx={{m: 1, width: 300}}>
        <InputLabel id="demo-multiple-name-label">Year</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personYear}
          onChange={handleChange}
          input={<OutlinedInput label="Year" />}
          MenuProps={MenuProps}
        >
          {years.map(year => (
            <MenuItem
              key={year}
              value={year}
              style={getStyles(year, personYear, theme)}
            >
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
