import * as React from 'react'

export class FlagleGuess extends React.Component {
  componentDidUpdate() {}

  render() {
    const {guesses} = this.props
    console.log('guesshere', guesses)
    return (
      <div id="guesses">
        <div id="attempt">attempt</div>
        <div id="name">name</div>
        <div id="year">year</div>
        <div id="hilo">higher/lower</div>
      </div>
    )
  }
}

export default FlagleGuess
