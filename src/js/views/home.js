import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/characterCard.js";
import { PlanetCard } from "../component/planetCard.js";
import { Context } from "../store/appContext";


export const Home = () => {
	const {store, actions} = useContext(Context);
	useEffect(() => {
	}, []);

	return (
		<div className="d-flex align-items-center flex-column">
			<h1 className="characters text-light pt-5">Characters</h1>
				<div className="scroll-container">
					{store.characters.map((character,index) => (
						<CharacterCard
							data={character}
							key={index}
						/>
					))}
				</div>
			<h1 className="planets text-light pt-5">Planets</h1>
				<div className="scroll-container">
					{store.planets.map((planet,index) => (
						<PlanetCard
							data={planet}
							key={index}
						/>
					))}
				</div>
		</div>
	);
};

