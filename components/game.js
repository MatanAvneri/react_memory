import React from "react";
import Row from "./row";
import Cell from "./cell";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.selectCell = this.selectCell.bind(this);
    this.pickRandomTargets = this.pickRandomTargets.bind(this);
    this.state = {
      targets: this.pickRandomTargets(),
      selected: [],
      gameState: 'challenge' //challenge | recall | won | lost
    }
  }

  pickRandomTargets() {
    let numberOfRandomOptions = 4;
    let targets = [];
    for (var i = 0; i < numberOfRandomOptions; i++) {
      let r = parseInt(Math.random() * this.props.rows, 10);
      let c = parseInt(Math.random() * this.props.cols, 10);
      targets.push({ r, c })
    }
    return targets;
  }

  componentDidMount() {
    this.timerId = setTimeout(() => {
      this.setState({ gameState: 'recall' })
      clearTimeout(this.timerId);
    }, 2000)
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  selectCell(r, c) {
    this.setState({ selected: this.state.selected.concat({ r, c }) });
  }

  render() {
    let grid = [], row;
    const isRecallPhase = this.state.gameState === 'recall';

    for(let r = 0; r < this.props.rows; r++ ) {
      row = [];
      for(let c = 0; c < this.props.cols; c++ ) {
        const cellId = `r${r}-c${c}`;
        row.push(<Cell key={cellId}
          r={r} c={c}
          isRecallPhase = {isRecallPhase}
          selectCell={this.selectCell}
          targets={this.state.targets}
          selected={this.state.selected}
          gameState={this.state.gameState}
          />)
        }
        grid.push(
          <Row key={r}>
          {row}
          </Row>
        );
      }

      return (
        <div>
        {grid}
        <div>
          {this.props.messages[this.state.gameState]}
        </div>
        <button onClick={ this.props.resetGame }>Play Again</button>
        </div>
      )
    }
  };

  Game.propTypes = {
    rows: React.PropTypes.number.isRequired,
    cols: React.PropTypes.number.isRequired,
  }

  Game.defaultProps = {
    messages: {
      challenge: "Remember now..",
      recall: "Recall now, por favor"
    }
  }

  export default Game;
