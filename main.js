import React from "react";
import ReactDOM from "react-dom";
import Game from './components/game'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gameId: 1};
    this.resetGame = this.resetGame.bind(this);
  }

  resetGame() {
    this.setState({ gameId: this.state.gameId + 1 })
  }

  render() {
    return (
      <div>
        <Game key={this.state.gameId} resetGame={this.resetGame} rows={5} cols={5} />
      </div>
    )
  }
}

console.log('Start');

ReactDOM.render(
  <App />
  ,
  document.getElementById("react")
);
