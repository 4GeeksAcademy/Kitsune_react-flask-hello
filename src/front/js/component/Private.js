import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import { Context } from "../store/appContext";
 

const Private = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState('');

  useEffect(() => {
    actions.privateZone()
  }, []);


  if (!store.autentificacion) {
    return <Navigate to = "/"/>;
  }

  return (
    < >
       <div className="jumbotron jumbotron-fluid background-private">
        <div className= "container-private">
            <h1 className='display-1'>¡HOLA!</h1>
            <p> asco_de_mundo</p>
            <p>{email}</p>
            <p className="display-6"><strong>Espero que tengas un buen día</strong></p>
        
        <Link to={"/"}>
          <button type="btn" className='btn btn-secondary'>Back home</button>
        </Link>
        </div>
      </div>
    
    {/* <div className="jumbotron jumbotron-fluid background-nonaccess">
        <div className= "container">
            <h1 className='display-1'>¡¡¡NO PUEDES PASAR!!!</h1>
            <p className="display-6"><strong>Deberás logearte para poder acceder a esta sala</strong></p>

        <Link to={"/"}>
          <button type="btn" className='btn btn-secondary'>Back home</button>
        </Link>
        </div>
      </div>
     */}
    </ >
  )
}
 
export default Private
