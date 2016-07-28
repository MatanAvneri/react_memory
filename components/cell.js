import React from "react";

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.guess = this.guess.bind(this);
    this.cellClassName = this.cellClassName.bind(this);
    this.canBeClicked = this.canBeClicked.bind(this);
  }

  isTarget() {
    const { r, c, targets } = this.props;
    return !!targets.filter(obj => {
      return obj.r === r & obj.c === c
    }).length
  }

  isSelected() {
    const { r, c, selected } = this.props;
    return !!selected.filter(obj => {
      return obj.r === r & obj.c === c
    }).length
  }


  canBeClicked() {
    return this.isSelected() || this.props.isRecallPhase;
  }

  guess() {
    if(this.canBeClicked()) {
      this.props.selectCell(this.props.r, this.props.c);
    }
  }

  cellClassName() {
    let className = "cell";

    if(this.isSelected()) {
      className += ` ${this.isTarget() ? 'guess-true' : 'guess-false'}`;
    } else if (this.props.gameState === 'challenge') {
       className += ` ${this.isTarget() ? 'active' : ''}`;
    }

    return className;
  }

  render() {
    return (
      <div className={this.cellClassName()}
        onClick={this.guess}>
      </div>
    )
  }

  // Stage 0
  // static propTypes = {
  //  r: React.PropTypes.number,
  //  c: React.PropTypes.number
  // }
};

Cell.propTypes = {
  r: React.PropTypes.number,
  c: React.PropTypes.number,
  selectCell: React.PropTypes.func
}

export default Cell;
