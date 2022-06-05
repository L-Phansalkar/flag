import * as React from 'react'
import Select from 'react-select'
import styled from 'styled-components'

//random tile func//
var tileSet = [1, 2, 3, 4, 5, 6]
const revealRandomTile = array => {
  const random = Math.floor(Math.random() * array.length)
  const randomTileNum = array.splice(random, 1)[0]
  console.log('rtn', randomTileNum)
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
}

//YEAR correct, incorrect//
const onYCorrect = guessYear => {
  console.log('corrrect', guessYear)
}

const onYIncorrect = guessYear => {
  console.log('nahhh', guessYear)
}

//each guess//
const onGuess = (guessName, props) => {
  console.log('guess', guessName, 'answer', props.chosenFlag.name)
  revealRandomTile(tileSet)
  attempts++
  addGuess({
    name: guess,
    distance: getDistance(guessGeo, answerGeo),
    direction: getCompassDirection(guessGeo, answerGeo),
    tile: tileNum
  })
}

//style//
const StyledSelect = styled(Select)`
  font-family: Courier, monospace;
  width: 200px;
  text-align: center;
  align-items: center;
  margin: auto;
  color: #000;
  :hover {
    border-color: #123456;
  }
`

//the actual exported function//
const FlagleNameDropdown = ({disabled, ...props}) => {
  const handleNSubmit = guess => {
    guess.value === props.chosenFlag.name
      ? onNCorrect(guess.value)
      : onNIncorrect(guess.value)
    onGuess(guess.value, props)
  }

  const namesList = [
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
  ].map(val => ({label: val, value: val}))
  return (
    <StyledSelect
      options={namesList}
      onChange={handleNSubmit}
      placeholder="Guess the flag NAME!"
      isOptionDisabled={() => disabled}
    />
  )
}
const FlagleYearDropdown = ({disabled, ...props}) => {
  const handleYSubmit = guess => {
    guess.value === props.chosenFlag.year
      ? onYCorrect(guess.value)
      : onYIncorrect(guess.value)
    onGuess(guess.value, props)
  }

  const yearList = [
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010'
  ].map(val => ({label: val, value: val}))
  return (
    <StyledSelect
      options={yearList}
      onChange={handleYSubmit}
      placeholder="Guess the flag YEAR!"
      isOptionDisabled={() => disabled}
    />
  )
}

export {FlagleNameDropdown, FlagleYearDropdown}
