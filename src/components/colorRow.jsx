import React from 'react'
import './colorRow.css';

const ColorRow = (props) => {
  const key = Object.keys(props.value)[0]
  return (
    <div className="color-row">
      the value of {key} is {props.value[key]}
    </div>
  )
}

export default ColorRow