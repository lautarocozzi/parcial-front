import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  const [nombre, setNombre] = useState("")
  const [pelicula, setPelicula] = useState("")
  const [error, setError] = useState(false)
  const [show, setShow] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if(nombre.length > 2 && pelicula.length > 6){
      setError(false)
      setShow(true)
    }else{
      setError(true)
      setShow(false)
    }


  }

  return (
    <div className='App'>
      <h1>Parcial React</h1>
      <form className='form' onSubmit={handleSubmit}>
        
        <input placeholder='Ingrese su nombre' type='text' value={nombre} onChange={(e) => { setShow(false); return setNombre(e.target.value.trim())}}></input>
        
        <input placeholder='Ingrese su Pelicula favorita' type='text' value={pelicula} onChange={(e) => { setShow(false); return setPelicula(e.target.value)}}></input>

        <button>Enviar!</button>
        <div className='error'>
        {error && "Por favor chequea que la información sea correcta" }
        </div>
      </form>
      {show ? <Card  disabled={show} nombre={nombre} pelicula={pelicula}/> : null}      
    </div>
  )
}

export default App
