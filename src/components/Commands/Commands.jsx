import React from 'react'
import './Commands.css'

function Commands({handleClear, handleCalculate}) {
  return (
    <div className="component Commands">
      <div className='command' onClick={handleClear}>
        C
      </div>
      <div className='command' onClick={handleCalculate}>
        =
      </div>
    </div>
  )
}

export default Commands;