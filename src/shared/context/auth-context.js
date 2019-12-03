import React, { useState, useContext } from "react";
import { login } from "../../http/authService";
import { useHistory } from "react-router-dom";

// 1) Creamos el contexto
const AuthContext = React.createContext();

// 2) Creamos el custom Provider
export function AuthProvider({ children }) {
    // 2.1) Creamos Estados
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const history = useHistory();

    // 2.2) Definiremos los métodos para modificar el estado
    // Login => Cambiaré a true
    const signIn = async ({ email, password }) => {
        try {
            const {
                data: { token, user }
            } = await login(email, password);
            setUser(user);
            setIsAuthenticated(true);
            history.push("/");
        } catch (error) {
            return Promise.reject(error);
        }
    };

    // Register => Cambiaré a true
    // Logout => Cambiaré a false

    // 2.3) Devolvemos el Context
    return (
        <AuthContext.Provider
            value={{ isAuthenticated, setIsAuthenticated, signIn }}
        >
            {children}
        </AuthContext.Provider>
    );
}

// 3) Crear el custom hook
export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}