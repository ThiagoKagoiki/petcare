import React, { useEffect, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";


export const DashBoard = () => {
    const {user} = useAuth()
    const navigate = useNavigate();

    const [dogs, setDogs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://681b999317018fe5057c26f6.mockapi.io/api/v1/pets')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na rede: ${response.statusText}`);
                }
                return response.json();
            })
            .then(pets => {
                console.log('Lista de Pets:', pets);
                setDogs(pets)
            })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
    }, []);
    

    const handleSubmit = async(e) => {
        e.preventDefault() //impede que a pagina recarregue
        
        navigate('/login')
    }
        



    return(
        <div>
            <h1>Olá, {user?.username}</h1>

            <div className="cards">
                {dogs.length === 0 ? (
                    <p>Carregando pets...</p>
                ) : (
                    dogs.map((dog, index) => (
                        <div key={index} className="card">
                            <img
                                src={dog.image} // Imagem do cachorro
                                alt={dog.breeds}
                            />
                            <p>{dog.breeds}</p>
                        </div>
                    ))
                )}
            </div>

            <button onClick={handleSubmit}>Sair</button>
        </div>
    )
}