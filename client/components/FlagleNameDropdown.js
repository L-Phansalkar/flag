import * as React from 'react'
import {useTheme} from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import FlagleYearDropdown from './FlagleYearDropdown'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

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
  console.log('rtn', randomTileNum)
  return randomTileNum
}
var attempts = 0
var solve = false

function createData(name, year, hint) {
  return {name, year, hint}
}
const rows = [
  createData('Frozen yoghurt', 159, '+'),
  createData('Ice cream sandwich', 237, '-'),
  createData('Eclair', 262, '-'),
  createData('Cupcake', 305, '+'),
  createData('Gingerbread', 356, '-')
]

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
    } else if (attempts === 5) {
      const tile = document.getElementById(`num${randomTileFunc(tileSet)}`)
      tile.classList.add('hidden')
      console.log('mannnyyy')
      return <div>one</div>
    } else {
      const tile = document.getElementById(`num${randomTileFunc(tileSet)}`)
      tile.classList.add('hidden')
      attempts++
      console.log('u NO dit', attempts)
    }

    console.log('clicked', event.target.value, 'real', props.chosenName)
  }

  return (
    <div id="thebiggamebox">
      {solve ? (
        <FlagleYearDropdown chosenYear={props.chosenYear} attempts={attempts} />
      ) : (
        <FormControl sx={{m: 1, width: 200}} id="formcontrol">
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
      )}
      {attempts ? (
        <TableContainer sx={{maxWidth: 400}} id="tabe">
          <Table sx={{maxWidth: 400}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Year</TableCell>
                <TableCell align="right">Higher or Lower?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}  */}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div />
      )}
    </div>
  )
}
