import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import logo from "./../../img/4Geeks-Academy.jpg"
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	function submitlogout() {
		actions.logout()
		navigate("/")
	}

	return (
		<nav className="navbar navbar-light bg-light" style={{background:"white"}}>
			<div className="container">
				<div className="ml-auto">
					<Link to="/">
						<img src={logo} alt="rigo.baby" width="180"  />
					</Link>
					{/* <div className="ml-auto">
						<Link to="/demo">
							<button className="btn btn-primary">Check the Context in action</button>
						</Link>
					</div> */}
				</div>
				<div className="ml-auto">
					<Link to="/signup">
						<button className="btn btn-outline-info" style={{marginRight:"15px"}}>Signup</button>
					</Link>
			 
					{store.autentificacion === false ? 
					<Link to="/login">
						<button className="btn btn-outline-primary" style={{marginRight:"15px"}}>Login</button>
					</Link>
					:""}

					<Link to="/private">
						<button className="btn btn-outline-warning" style={{marginRight:"15px"}}>Private</button>
					</Link>

					{store.autentificacion === true ? <button onClick={()=>submitlogout()} className="btn btn-danger">Logout</button>:""}
						 
					 
				</div>
			</div>
		</nav>
	);
};
