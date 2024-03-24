import React, { useState, useContext, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom'
import { Context } from "../store/appContext";


const Login = () => {

  const [email, setEmail ]= useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.login(email, password);
  }

  

  return (
    < >
     {store.autentificacion === true ? <Navigate to = "/private"/> :  
      <div className="jumbotron jumbotron-fluid  background-login ">
      <div className='container-login'>
             <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"><strong>Email address</strong></label>
                    <input type="email" className="form-control" id="inputEmail"  name="email" rows="3"  placeholder="Enter email"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                  />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"><strong>Password</strong></label>
                    <input type="password" className="form-control" id="inputPassword" placeholder='Enter your password'
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
                </div>

                <div className='buttons text-center'>
                <button type="submit" className="btn btn-dark" style={{marginRight:"10px"}}>Login</button>

                <Link to={"/"}>
                    <button type="btn" className='btn btn-secondary'>Back home</button>
                </Link>
                </div>
            </form>
        </div>
      </div>
      }
    </ >
  )
}

export default Login
