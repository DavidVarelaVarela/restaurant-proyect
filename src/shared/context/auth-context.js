import React, { useState, useContext } from "react";
import { login, register } from "../../http";
import { useHistory } from "react-router-dom";

// 1) Creamos el contexto
const AuthContext = React.createContext();

const currentUser = JSON.parse(localStorage.getItem('currentUser'));
// 2) Creamos el custom Provider
export function AuthProvider({ children }) {
    // 2.1) Creamos Estados
    const [isAuthenticated, setIsAuthenticated] = useState(currentUser !== null);
    const [user, setUser] = useState(currentUser && currentUser.user);
    const history = useHistory();


    // 2.2) Definiremos los métodos para modificar el estado
    // Login => Cambiaré a true
    const signIn = async ({ email, password }) => {
        try {
            const {
                data: { user }
            } = await login(email, password);
            setUser(user);
            setIsAuthenticated(true);
            history.push("/");
        } catch (error) {
            return Promise.reject(error);
        }
    };

    // Register => Cambiaré a true
    const signUp = async ({ name, email, password, phone }) => {
        try {
            const {
                data: { accessToken, user }
            } = await register({ name, email, password, phone });
            setUser(user);
            setIsAuthenticated(true);
            if (accessToken) {
                history.push("/");
            }
        } catch (error) {
            return Promise.reject(error);
        }
    };
    // Logout => Cambiaré a false
    const logOut = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('currentUser');

    }
    // 2.3) Devolvemos el Context
    return (
        <AuthContext.Provider
            value={{ isAuthenticated, setIsAuthenticated, setUser, signIn, user, signUp, logOut }}
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
