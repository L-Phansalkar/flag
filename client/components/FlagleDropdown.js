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
var updown = ''
var hilo = ''
const checkAttempts = props => {
  if (attempts === 6) {
    const namedrop = document.getElementById('namebox')
    const yeardrop = document.getElementById('yearbox')
    namedrop.classList.add('hidden')
    yeardrop.classList.add('hidden')
    toast(
      `BETTER LUCK NEXT TIME ${props.chosenFlag.name} ${props.chosenFlag.year}`,
      {
        position: 'top-center',
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      }
    )
  }
}

//to check for each other//
var currentNameGuess = ''
var currentYearGuess = ''

//NAME correct, incorrect//
const onNCorrect = guessName => {
  currentNameGuess = guessName
  toast(`CONGRATS YOU GUESSED IT: THE NAME IS ${guessName}`, {
    position: 'top-center',
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
}

const onNIncorrect = guessName => {
  console.log('nahhh', guessName)
}

//YEAR correct, incorrect//
const onYCorrect = guessYear => {
  toast(`CONGRATS YOU GUESSED IT: THE YEAR IS ${guessYear}`, {
    position: 'top-center',
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
  currentYearGuess = guessYear
  console.log('corrrect', guessYear)
}

const onYIncorrect = guessYear => {
  currentYearGuess = guessYear
  return currentYearGuess
}

//date n time//
const getDayString = () => {
  const date = DateTime.now().toFormat('yyyy-MM-dd')
  return `${date}-${DateTime.now().weekday}`
}

//each guess//
const guesses = []
const addGuess = (Name = '', Year = 'n/a', Hint = '✅', Letter = '✅') => {
  attempts++
  const newGuess = {
    num: attempts,
    name: Name,
    letter: Letter,
    year: Year,
    hint: Hint
  }
  guesses.push(newGuess)
  const guessBox = document.getElementById('flgs')
  var elem = document.createElement('div')
  elem.innerHTML = `${newGuess.num} ||${newGuess.name} || ${
    newGuess.letter
  } || ${newGuess.year} || ${newGuess.hint}`
  guessBox.appendChild(elem)
  checkAttempts()
  return guesses
}

const onNGuess = (guessName, props) => {
  if (guessName < props.chosenFlag.name) {
    updown = `⬆️`
  } else {
    updown = `⬇️`
  }
  if (currentYearGuess) {
    revealRandomTile(tileSet)
    addGuess(currentNameGuess, currentYearGuess, hilo, updown)
  } else {
    toast('🦄 Please Pick a Name First!', {
      position: 'top-center',
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }
  return currentNameGuess
}
const onYGuess = (guessYear, props) => {
  if (props.chosenFlag.year - guessYear > 0) {
    hilo = '➕'
  } else {
    hilo = '➖'
  }
  if (currentNameGuess) {
    revealRandomTile(tileSet)
    addGuess(currentNameGuess, guessYear, hilo, updown)
  } else {
    toast('🦄 Please Pick a Name First!', {
      position: 'top-center',
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
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
    guess.target.value = ''
  }

  return (
    <Box id="yearbox">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">YEAR</InputLabel>
        <Select id="yearChoice" onChange={handleYSubmit}>
          <MenuItem value="1990">1990</MenuItem>
          <MenuItem value="1991">1991</MenuItem>
          <MenuItem value="1992">1993</MenuItem>
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
