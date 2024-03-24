import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const Private = (props) => {
  const { store, actions } = useContext(Context);
  
 
  useEffect(()=>{
    actions.login(props.email)
  })

  console.log("Email desdes useffect ", props.email)

  return (
    < >
    {store.autentificacion === true ?  
       <div className="jumbotron jumbotron-fluid background-private">
        <div className= "container-private">
            <h1 className='display-1'>¡HOLA!</h1>
            <span className="display-3">{props.email}</span>
            <p className="display-6"><strong>Espero que tengas un buen día</strong></p>
        
        <Link to={"/"}>
          <button type="btn" className='btn btn-secondary'>Back home</button>
        </Link>
        </div>
      </div>
    :
    <div className="jumbotron jumbotron-fluid background-nonaccess">
        <div className= "container">
            <h1 className='display-1'>¡¡¡NO PUEDES PASAR!!!</h1>
            <p className="display-6"><strong>Deberás logearte para poder acceder a esta sala</strong></p>

        <Link to={"/"}>
          <button type="btn" className='btn btn-secondary'>Back home</button>
        </Link>
        </div>
      </div>
    }

    </ >
  )
}
Private.propTypes = {
	match: PropTypes.object
};

export default Private
