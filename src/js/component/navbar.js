import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	
	return (
		<nav className="navbar d-flex justify-content-around navbar-light ">
			<div className="wrap d-flex align-items-center justify-content-between" style={{width: "70%"}}>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" width="100" alt="star wars logo" />
					</span>
				</Link>
				<div className="dropdown ml-auto">
					<button 
						className="btn btn-primary dropdown-toggle" 
						type="button" 
						data-bs-toggle="dropdown"
						data-bs-auto-close="false" 
						aria-expanded="false">
						Favorites
					<span className="badge badge-light">{store.favorites.length}</span>
					</button>
					<div className="dropdown-menu">
						{store.favorites.length > 0 ? (
							store.favorites.map((favorite, index) => (
								<div key={index} className="wrap d-flex justify-content-around">
									<span className="dropdown-item pl-3">
										{favorite}
									</span>
									<button
										className="btn btn-light pr-2"
										onClick={() => {
											actions.removeFromFavorites(index);
										}}
									>
									<i className="fa-solid fa-trash"></i>
									</button>
								</div>
							))
						) : (
						<span className="dropdown-item pl-3">Empty</span>
						)}
          		</div>
			</div>
		</div>
    </nav>
  );
};