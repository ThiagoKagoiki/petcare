import React from "react";
import { useNavigate } from "react-router-dom";


export const Login = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return(
        <div>
            <button onClick={handleClick}>Home</button>
            <button>Dashboard</button>
        </div>
    )
}