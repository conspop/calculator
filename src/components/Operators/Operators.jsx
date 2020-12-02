import { Component } from 'react'
import './Operators.css'

class Operators extends Component {
  handleClick = (button) => {
    this.props.handleAddToString(',' + button.target.textContent + ',')
  }
  
  render() {
    return (
      <div className="component Operators">
        <div className='digit operators' onClick={this.handleClick}>*</div>
        <div className='digit operators' onClick={this.handleClick}>/</div>
        <div className='digit operators' onClick={this.handleClick}>+</div>
        <div className='digit operators' onClick={this.handleClick}>-</div>
      </div>
    )
  }
}

export default Operators;