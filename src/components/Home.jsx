import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token === null) {
            navigate('/')
        }
    }, [])

    return (
        <>
            <h1>SOY EL HOME</h1>
        </>
    )
}

export default Home;