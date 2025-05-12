import axios from 'axios'

const API_URL = 'https://681b999317018fe5057c26f6.mockapi.io/api/v1/users';

export const loginRequest = async (username, password) => {
    try{
        const response = await axios.get(API_URL)
        const users = response.data

        const user = users.find((user) => user.username === username && user.password === password)

        return user ? {success: true, user} : {success: false}     
    }catch{
        console.error("Erro na autenticação", Error)
        return {success: false}
    }
}