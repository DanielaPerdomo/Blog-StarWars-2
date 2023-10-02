import "../../styles/home.css";
import { useNavigate } from "react-router";
import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const CharacterCard = ({data}) => {
    const { actions } = useContext(Context)
    const navigate = useNavigate()

    const addToFavorites = (characterName) => {
        actions.addToFavorites(characterName); 
    };

    return (
        <div className="card bg-secondary" style={{ "minwidth": "18rem"}}>
            <img 
                src={`https://starwars-visualguide.com/assets/img/characters/${data.uid}.jpg`} 
                style={{"width":"298px", "height":"120"}} 
                className="card-img-top" alt="..." 
            />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <div className="d-flex justify-content-between pt-2">
                        <button 
                            className="btn btn-outline-light"
                            onClick={() => {
                                navigate("/people/" + data.uid)
                            }}    
                        >Learn More!</button>
                        <button 
                            className="btn btn-outline-warning"
                            onClick={() => {
                                addToFavorites(data.name);
                            }}    
                        ><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
        </div>
    );     
};


