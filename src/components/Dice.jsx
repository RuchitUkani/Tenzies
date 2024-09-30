import React, { useState } from 'react'

function Dice(props) {

  const style = {
    backgroundColor: props.isHeld ? "#59E391" : "#ffffff"
  }

  return (
    <div 
      className='dice-face' 
      style={style}
      onClick={props.holdDice}
    >
        <h2 className='dice-num'>{props.value}</h2>
    </div>
  )
}

export default Dice