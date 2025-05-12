import { createContext, useState } from "react";
import { loginRequest } from "../Services/AuthService";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const loginfunc = async(username, password) => {
        const {success, user} = await loginRequest(username, password);
        setUser(success ? user : null)
        return success
    }

    const logout = () => setUser(null)

    return(
        <AuthContext.Provider value={{user, loginfunc, logout}}>
            {children}
        </AuthContext.Provider>
    )

}