import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      botsWeapon: null,
      playersWeapon: null,
      winner: null
    }
  }

  getWinner(botsWeapon, playersWeapon) {
    // https://stackoverflow.com/a/2795421
    const weaponNumbers = {'rock': 0, 'paper': 1, 'scissors': 2}
    const winnerNumber = (3 + weaponNumbers[playersWeapon] - weaponNumbers[botsWeapon]) % 3

    if (winnerNumber === 0) return 'tie'
    if (winnerNumber === 1) return 'player wins'
    if (winnerNumber === 2) return 'bot wins'
  }

  getBotsWeapon() {
    const weapons = ['rock', 'paper', 'scissors'];
    return weapons[Math.floor(Math.random() * weapons.length)]
  }

  play(playersWeapon) {

    const botsWeapon = this.getBotsWeapon()

    this.setState({ botsWeapon, playersWeapon })
    const winner = this.getWinner(botsWeapon, playersWeapon)
    this.setState({ winner })
  }


  render() {
    return (
    <div className="App">
      <header className="App-header">
        <p>
          Bot: { this.state.botsWeapon }
        </p>
        <p>
          Player: { this.state.playersWeapon } <br /> <br />
          Choose: <br />

          <button onClick={ () => this.play('rock')}>Rock</button>
          <button onClick={ () => this.play('paper')}>Paper</button>
          <button onClick={ () => this.play('scissors')}>Scissors</button>
        </p>
        <p>
          { this.state.winner }
        </p>
      </header>
    </div>
  );
  }
}

export default App;
