import * as React from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import {DateTime} from 'luxon'

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
  const dropdown = document.getElementById('nameChoice')
  dropdown.classList.add('hidden')
  const dropYear = document.getElementById('yearChoice')
  dropYear.classList.remove('hidden')
}

const onNIncorrect = guessName => {
  console.log('nahhh', guessName)
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
const addGuess = (Name, Year = 'null') => {
  attempts++
  const newGuess = {
    num: attempts,
    name: Name,
    year: Year
  }
  guesses.push(newGuess)

  return guesses
}
//add to table//

const onNGuess = (guessName, props) => {
  const dayString = getDayString()
  console.log('guess', guessName, 'answer', props.chosenFlag.name)
  revealRandomTile(tileSet)
  attempts++
  addGuess(guessName)
  saveGuesses(dayString, guesses)
  console.log('guessArr', guesses)
}
const onYGuess = (guessYear, props) => {
  const dayString = getDayString()
  console.log('answer', props.chosenFlag.name)
  revealRandomTile(tileSet)
  attempts++
  addGuess(props.chosenFlag.name, guessYear)
  console.log('guessArr', guesses)
  saveGuesses(dayString, guesses)
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
  var namesList = [
    {val: 'Lesbian', disabled: true},
    {val: 'Gay', disabled: true},
    {val: 'Bisexual', disabled: true},
    {val: 'Transgender', disabled: true},
    {val: 'Queer', disabled: true},
    {val: 'Intersex', disabled: true},
    {val: 'Aromantic', disabled: true},
    {val: 'Asexual', disabled: true},
    {val: 'Nonbinary', disabled: true},
    {val: 'LGBTQIA+ Pride', disabled: true}
  ]
  const handleNSubmit = guess => {
    guess.value === props.chosenFlag.name
      ? onNCorrect(guess.value)
      : onNIncorrect(guess.value)
    onNGuess(guess.value, props)
  }
  return (
    <StyledSelect
      id="nameChoice"
      options={namesList.map(value => ({
        label: value.val,
        value: value.val
      }))}
      onChange={handleNSubmit}
      placeholder="Guess the flag NAME!"
    />
  )
}

const FlagleYearDropdown = ({disabled, ...props}) => {
  const handleYSubmit = guess => {
    guess.value === props.chosenFlag.year
      ? onYCorrect(guess.value)
      : onYIncorrect(guess.value)
    onYGuess(guess.value, props)
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
      id="yearChoice"
      className="hidden"
      options={yearList}
      onChange={handleYSubmit}
      placeholder="Guess the flag YEAR!"
      isOptionDisabled={() => disabled}
    />
  )
}

export {FlagleNameDropdown, FlagleYearDropdown}
