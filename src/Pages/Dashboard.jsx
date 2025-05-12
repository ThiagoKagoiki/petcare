import React from "react";
import { useAuth } from "../Hooks/useAuth";


export const DashBoard = () => {
    const {user} = useAuth()

    return(
        <div>
            {/* msg de boas vindas com o login
            mostrar cards dos caos que nem do catalogos de filmes
            botao sair qu vai para a pagina de login */}
            <h1>bem vindo {user?.username}</h1>
        </div>
    )
}