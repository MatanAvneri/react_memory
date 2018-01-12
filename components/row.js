import React from 'react'
import Cell from './cell'

class Row extends React.Component {
  render () {
    return (
      <div className="row">
        {this.props.children}
      </div>
    )
  }
}

export default Row
