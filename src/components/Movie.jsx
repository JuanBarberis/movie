import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Movie = ()=>{
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token === null) {
            navigate('/login')
        }
    }, [])
    return(
        <h2>Soy Movie</h2>
    )
}

export default Movie;