import React, { Component } from 'react'
import './Numbers.css'

class Numbers extends Component {

  handleClick = (button) => {
    this.props.handleAddToString(button.target.textContent)
  }
  
  render() {
    return (
      <div className="component Numbers">
        <div className='digit' onClick={this.handleClick}>7</div>
        <div className='digit' onClick={this.handleClick}>8</div>
        <div className='digit' onClick={this.handleClick}>9</div>
        <div className='digit' onClick={this.handleClick}>4</div>
        <div className='digit' onClick={this.handleClick}>5</div>
        <div className='digit' onClick={this.handleClick}>6</div>
        <div className='digit' onClick={this.handleClick}>1</div>
        <div className='digit' onClick={this.handleClick}>2</div>
        <div className='digit' onClick={this.handleClick}>3</div>
        <div className='digit' onClick={this.handleClick}></div>
        <div className='digit' onClick={this.handleClick}>0</div>
        <div className='digit' onClick={this.handleClick}>.</div>
      </div>
    )
  }
}

export default Numbers;