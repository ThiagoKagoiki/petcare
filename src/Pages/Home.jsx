import React from "react";
import { useAuth } from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Home = () => {

    const breeds = useAuth()
    const image = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault() //impede que a pagina recarregue
        

        navigate('/login')
        
    }

    return(
        <div>
            {/* <h1>Bem vindo</h1>
            <p>exibir 3 pets nome, raca e idade com uma img</p>
            <button>Entrar como funcionario</button> */}

            <h1>Bem vindo</h1>

            <button onClick={handleSubmit}>Entrar como funcionario</button>


        </div>
    )
}