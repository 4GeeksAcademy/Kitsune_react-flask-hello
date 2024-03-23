import React from 'react'
import { Link } from 'react-router-dom'

const Private = () => {
  return (
    < >
       <div className="jumbotron jumbotron-fluid background-private">
        <div className= "container-private">
            <h1 className='display-1'>BIENVENIDO</h1>
            <span className="display-3">USUARIO</span>
            <p className="display-6"><strong>Espero que tengas un buen día</strong></p>
        
        <Link to={"/"}>
          <button type="btn" className='btn btn-secondary'>Back home</button>
        </Link>
        </div>
      </div>
    </ >
  )
}

export default Private
