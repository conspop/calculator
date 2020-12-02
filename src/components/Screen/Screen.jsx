import React from 'react'
import './Screen.css'

function Screen({string}) {
  return (
    <div className="component Screen">
      {string.replace(/,/g,' ')}
    </div>
  )
}

export default Screen;