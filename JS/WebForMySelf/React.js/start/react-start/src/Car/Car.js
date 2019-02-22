import React from 'react'
import Radium from 'radium'
import classes from './Car.css'

const Car = (props) => {
  const inputClassses = [classes.input];
  if (props.name !== '') {
    inputClassses.push(classes.green)
  } else {
    inputClassses.push(classes.red)
  }
  if (props.name.length > 4) {
    inputClassses.push(classes.bold)
  }

  const style = {
    border:    '1px solid #ccc',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
    ':hover':  {
      border:    '1px solid #aaa',
      boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
      cursor:    'pointer',
    }
  };

  return (
    <div className= {classes.Car}
         style = {style}
    >
      <h3>Car name: <u>{props.name}</u></h3>
      <p>Year: <strong>{props.year}</strong></p>
      <input 
        type      = "text" 
        name      = "" 
        id        = "" 
        className = {inputClassses.join(' ')}
        onChange  = {props.onChangeName} 
        value     = {props.name}
      />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
};

export default Radium(Car)