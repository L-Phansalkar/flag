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

//END//
var gotName = false
var end = false

//NAME correct, incorrect//
const onNCorrect = guessName => {
  console.log('corrrect', guessName)
  gotName = true
}

const onNIncorrect = guessName => {
  console.log('nahhh', guessName)
}

//YEAR correct, incorrect//
const onYCorrect = guessYear => {
  console.log('corrrect', guessYear)
  end = true
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
  const newGuess = {
    name: Name,
    year: Year
  }
  guesses.push(newGuess)
  return guesses
}

const onNGuess = (guessName, props) => {
  const dayString = getDayString()
  console.log('guess', guessName, 'answer', props.chosenFlag.name)
  revealRandomTile(tileSet)
  attempts++
  addGuess(guessName)
}
const onYGuess = (guessYear, props) => {
  const dayString = getDayString()
  console.log('answer', props.chosenFlag.name)
  revealRandomTile(tileSet)
  attempts++
  addGuess(props.chosenFlag.name, guessYear)
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
const ArrowBox = styled.div`
  display: flex;
  padding: 0.25rem;
  position: relative;
  background-color: #dddddd;
  border-radius: 3px;
  grid-column: 9 / span 1;
  align-items: center;
  justify-content: center;
  @media (prefers-color-scheme: dark) {
    background-color: #1f2023;
    color: #dadada;
  }
`
const GuessLine = styled.div`
  display: grid;
  grid-template-columns: repeat(9, minmax(30px, 2.5rem));
  margin: 0px 2px 2px 2px;
`

const CountryGuess = styled.div`
  display: flex;
  position: relative;
  background-color: #dddddd;
  border-radius: 3px;
  grid-column: 1 / span 6;
  margin-right: 2px;
  text-overflow: ellipsis;
  align-items: center;
  justify-content: center;
  @media (prefers-color-scheme: dark) {
    background-color: #1f2023;
    color: #dadada;
  }
`

//the actual exported function//
const FlagleNameDropdown = ({disabled, ...props}) => {
  const handleNSubmit = guess => {
    guess.value === props.chosenFlag.name
      ? onNCorrect(guess.value)
      : onNIncorrect(guess.value)
    onNGuess(guess.value, props)
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
      options={yearList}
      onChange={handleYSubmit}
      placeholder="Guess the flag YEAR!"
      isOptionDisabled={() => disabled}
    />
  )
}

const Guesses = () => {
  return guesses.map(guess => (
    <GuessLine key={guess.id}>
      <CountryGuess>{guess.name}</CountryGuess>
      <ArrowBox>{}</ArrowBox>
    </GuessLine>
  ))
}

export {FlagleNameDropdown, FlagleYearDropdown, Guesses}
