import React from 'react'
import './Card.css'


const Card = ({nombre,pelicula}) => {
  return (
    <div className='card'>
        <h3>Hola {nombre}</h3>
        <h4>Sabemos que tu pelicula favorita es:</h4>
        <div className='pelicula'>{pelicula}</div>

    </div>
  )
}

export default Card