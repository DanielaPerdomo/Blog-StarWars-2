import React, { useContext, useEffect } from "react";
import {useParams} from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = () => {
    const params = useParams()
    const { store, actions } = useContext(Context)
    console.log(params)

    useEffect(() => {
        actions.getSingleCharacter(params.peopleId)
    }, [])

    return (
        <React.Fragment>
            {
            store.singleCharacter.properties ? (
                <div className="characterContainer vh-80 bg-dark d-flex justify-content-center pt-5">
                    <div className="card mb-3 bg-secondary" style={{width: "70%"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${store.singleCharacter.uid}.jpg`} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{store.singleCharacter.properties.name}</h5>
                                    <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr style={{ borderTop: "2px solid red", margin: "10px 0" }} />
                        <div className="datawrap text-center p-3">
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="row"><strong>Name</strong></div>
                                    <div className="row justify-content-center">{store.singleCharacter.properties.name}</div>
                                </div>
                                <div className="col-md-2">
                                    <div className="row"><strong>Birth Year</strong></div>
                                    <div className="row justify-content-center">{store.singleCharacter.properties.birth_year}</div>
                                </div>
                                <div className="col-md-2">
                                    <div className="row"><strong>Gender</strong></div>
                                    <div className="row justify-content-center">{store.singleCharacter.properties.gender}</div>
                                </div>
                                <div className="col-md-2">
                                    <div className="row"><strong>Height</strong></div>
                                    <div className="row justify-content-center">{store.singleCharacter.properties.height}</div>
                                </div>
                                <div className="col-md-2">
                                    <div className="row"><strong>Skin Color</strong></div>
                                    <div className="row justify-content-center">{store.singleCharacter.properties.skin_color}</div>
                                </div>
                                <div className="col-md-2">
                                    <div className="row"><strong>Eye Color</strong></div>
                                    <div className="row justify-content-center">{store.singleCharacter.properties.eye_color}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null
            }
        </React.Fragment>
    )
}