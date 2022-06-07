import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import {toast} from 'react-toastify'

import {DateTime} from 'luxon'
//random tile func//
var tileSet = [1, 2, 3, 4, 5, 6]
const revealRandomTile = array => {
  const random = Math.floor(Math.random() * array.length)
  const randomTileNum = array.splice(random, 1)[0]

  const tile = document.getElementById(`num${randomTileNum}`)
  tile.classList.add('hidden')
  return randomTileNum
}

//number of guesses//
var attempts = 0

//NAME correct, incorrect//
const onNCorrect = guessName => {
  console.log('corrrect', guessName)
}

const onNIncorrect = guessName => {
  console.log('nahhh', guessName)
  toast('🦄 Wow so easy!', {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
}

//YEAR correct, incorrect//
const onYCorrect = guessYear => {
  console.log('corrrect', guessYear)

  const dropYear = document.getElementById('yearChoice')
  dropYear.classList.add('hidden')
}

const onYIncorrect = guessYear => {
  console.log('nahhh', guessYear)
}

//date n time//
const getDayString = () => {
  const date = DateTime.now().toFormat('yyyy-MM-dd')
  return `${date}-${DateTime.now().weekday}`
}

//each guess//
const guesses = []
const addGuess = (Name = 'please select', Year = 'n/a', Hint = 'n/a') => {
  attempts++
  const newGuess = {
    num: attempts,
    name: Name,
    year: Year,
    hint: Hint
  }
  guesses.push(newGuess)
  const guessBox = document.getElementById('flgs')
  var elem = document.createElement('div')
  elem.innerHTML = `${newGuess.num} ||${newGuess.name} || ${newGuess.year} || ${
    newGuess.hint
  }`
  guessBox.appendChild(elem)
  return guesses
}

//disable yr//
var currentNameGuess = ''

const onNGuess = guessName => {
  const dayString = getDayString()
  // revealRandomTile(tileSet)
  // addGuess(guessName)
  currentNameGuess = guessName
  return currentNameGuess
}
const onYGuess = (guessYear, props) => {
  const dayString = getDayString()
  revealRandomTile(tileSet)
  var hilo = ''
  if (props.chosenFlag.year - guessYear > 0) {
    hilo = '+'
  } else {
    hilo = '-'
  }
  if (currentNameGuess) {
    addGuess(currentNameGuess, guessYear, hilo)
  } else {
    console.log('u cannnoooooottt')
  }
}

//the actual exported function//
const FlagleNameDropdown = ({...props}) => {
  const handleNSubmit = guess => {
    guess.target.value === props.chosenFlag.name
      ? onNCorrect(guess.target.value)
      : onNIncorrect(guess.target.value)
    onNGuess(guess.target.value, props)
  }
  return (
    <Box id="namebox">
      <FormControl required fullWidth>
        <InputLabel id="demo-simple-select-label">NAME</InputLabel>
        <Select
          id="nameChoice"
          onChange={handleNSubmit}
          placeholder="Guess the flag NAME!"
        >
          <MenuItem value="Lesbian">Lesbian</MenuItem>
          <MenuItem value="Gay">Gay</MenuItem>
          <MenuItem value="Bisexual">Bisexual</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

const FlagleYearDropdown = ({...props}) => {
  const handleYSubmit = guess => {
    guess.value === props.chosenFlag.year
      ? onYCorrect(guess.target.value)
      : onYIncorrect(guess.target.value)
    onYGuess(guess.target.value, props)
  }

  return (
    <Box id="yearbox">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">YEAR</InputLabel>
        <Select id="yearChoice" onChange={handleYSubmit}>
          <MenuItem value="1990">1990</MenuItem>
          <MenuItem value="1992">1991</MenuItem>
          <MenuItem value="1993">1993</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

const FlagGuess = () => {
  return (
    <div id="flgs">
      <h1 />
    </div>
  )
}

export {FlagleNameDropdown, FlagleYearDropdown, FlagGuess}
