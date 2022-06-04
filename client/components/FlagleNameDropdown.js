import * as React from 'react'
import {useTheme} from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import FlagleYearDropdown from './FlagleYearDropdown'

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

const names = [
  'Lesbian',
  'Gay',
  'Bisexual',
  'Transgender',
  'Queer',
  'Intersex',
  'Aromantic',
  'Asexual',
  'NonBinary',
  'LGBTQIA+ Pride'
]
var tileSet = [1, 2, 3, 4, 5, 6]
const randomTileFunc = array => {
  const random = Math.floor(Math.random() * array.length)
  const randomTileNum = array.splice(random, 1)[0]
  console.log(randomTileNum)
  return randomTileNum
}
var attempts = 1
var solve = false
export default function MultipleNSelect(props) {
  const [personName, setPersonName] = React.useState([])
  const handleChange = event => {
    const {target: {value}} = event
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
    if (event.target.value === props.chosenName) {
      const tile = document.getElementById(`num${randomTileFunc(tileSet)}`)
      tile.classList.add('hidden')
      solve = true
      attempts++
      console.log('u dit', attempts)
      return <div>one</div>
    } else if (attempts === 6) {
      console.log('mannnyyy')
      return <div>one</div>
    } else {
      const tile = document.getElementById(`num${attempts}`)
      tile.classList.add('hidden')
      attempts++
      // const tile = document.getElementById(`num${attempts}`);
      // tile.classList.add("hidden")
      console.log('u NO dit', attempts)
    }

    console.log('clicked', event.target.value, 'real', props.chosenName)
  }

  return (
    <div>
      <FormControl sx={{m: 1, width: 300}}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {solve ? (
        <FlagleYearDropdown chosenYear={props.chosenYear} attempts={attempts} />
      ) : (
        <div />
      )}
    </div>
  )
}
