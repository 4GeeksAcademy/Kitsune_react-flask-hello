import React, { useState, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { Context } from "../store/appContext";


 
const Signup = () => {
 
    const [email, setEmail ]= useState("");
    const [password, setPassword] = useState("");
    const [isActive, setIsactive] = useState(false);
    const { store, actions } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, isActive)
        actions.addUser(email,password)
    }

  return (
    < >
        
        <div className="jumbotron jumbotron-fluid background-signup">
        <div className='container-signup'>
            <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="inputEmail"  name="email" rows="3"  placeholder="Enter email"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                       />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder='Enter your password'
                       onChange={(e)=>setPassword(e.target.value)}
                       value={password}
                     />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="isActive" name="is_active"
                                onChange={(e) => setIsactive(e.target.checked)}
                                checked={isActive}
                            />
                        <label className="form-check-label" htmlFor="isActive">Is active?</label>
                    </div>
                    <div className='buttons text-center'>
                    <button type="submit" value={isActive} className="btn btn-success" style={{marginRight:"10px"}}>Submit</button>

                    <Link to={"/"}>
                        <button type="btn" className='btn btn-secondary'>Back home</button>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    </ >
  )


};

export default Signup



