import './App.css';
import { Component } from 'react'
import Screen from './components/Screen/Screen'
import Numbers from './components/Numbers/Numbers'
import Operators from './components/Operators/Operators'
import Commands from './components/Commands/Commands'

class App extends Component {
  state = {
    string:''
  }

  handleAddToString = (digit) => {
    this.setState(state => ({string: state.string + digit}))
  }

  handleClear = () => {
    this.setState({string:''})
  }

  handleCalculate = () => {
    const {string} = this.state
    let separated = string.split(',')

    //Division
    while (separated.indexOf('/') > 0) {
      const idx = separated.indexOf('/')
      const item1 = parseFloat(separated[idx - 1])
      const item2 = parseFloat(separated[idx + 1])
      const divided = item1 / item2
      separated.splice(idx - 1, 3, divided)
    }

    //Multiplication
    while (separated.indexOf('*') > 0) {
      const idx = separated.indexOf('*')
      const item1 = parseFloat(separated[idx - 1])
      const item2 = parseFloat(separated[idx + 1])
      const multiplied = item1 * item2
      separated.splice(idx - 1, 3, multiplied)
    }

    //Addition
    while (separated.indexOf('+') > 0) {
      const idx = separated.indexOf('+')
      const item1 = parseFloat(separated[idx - 1])
      const item2 = parseFloat(separated[idx + 1])
      const added = item1 + item2
      separated.splice(idx - 1, 3, added)
    }

    //Subtraction
    while (separated.indexOf('-') > 0) {
      const idx = separated.indexOf('-')
      const item1 = parseFloat(separated[idx - 1])
      const item2 = parseFloat(separated[idx + 1])
      const subtracted = item1 - item2
      separated.splice(idx - 1, 3, subtracted)
    }

    this.setState({string: separated[0].toString()})
  }
  
  render() {
    return (
      <div className='main-grid'>
        <Screen string={this.state.string} />
        <Numbers 
          handleAddToString={this.handleAddToString}
          string={this.state.string}
        />
        <Operators 
          handleAddToString={this.handleAddToString} 
        />
        <Commands 
          handleClear={this.handleClear} 
          handleCalculate={this.handleCalculate}
        />
      </div>
    )
  }
}

export default App;
