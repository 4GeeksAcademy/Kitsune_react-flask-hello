import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../img/4Geeks-Academy.jpg"

export const Navbar = () => {
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
			 
					<Link to="/login">
						<button className="btn btn-outline-primary" style={{marginRight:"15px"}}>Login</button>
					</Link>

					<Link to="/private">
						<button className="btn btn-outline-warning" style={{marginRight:"15px"}}>Private</button>
					</Link>

					<Link to="/">
						<button className="btn btn-danger">Log out</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
