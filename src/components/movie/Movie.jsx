import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './movie.css'

const Movie = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token === null) {
            navigate('/login')
        }
    }, [])
    return (
        <>
            <div className="div-movie">
                <div className="card-movie">
                    <h2 className="title-movie">movie 1</h2>
                    <div className="conteiner-movie">
                        <p className="description-movie">descripcion de la pelicula</p>
                    </div>
                </div>
                <div className="card-movie">
                    <h2 className="title-movie">movie 1</h2>
                    <div className="conteiner-movie">
                        <p className="description-movie">descripcion de la pelicula</p>
                    </div>
                </div>
                <div className="card-movie">
                    <h2 className="title-movie">movie 1</h2>
                    <div className="conteiner-movie">
                        <p className="description-movie">descripcion de la pelicula</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Movie;