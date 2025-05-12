import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";


export const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const {loginfunc} = useAuth();

    const handleSubmit = async(e) => {
        e.preventDefault() //impede que a pagina recarregue
        
        const success = await loginfunc(username, password);
        
        if(success){
            alert('okk')
            navigate('/')
        }else{
            alert("Usuário ou senha inválidos")
        }
        
        console.log(username)
        console.log(password)
    }

    return(
        <div>
            {/* login basico */}
            <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Entrar</button>

            
            </form>
        </div>
    )
}