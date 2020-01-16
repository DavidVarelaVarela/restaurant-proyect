import React, { useState, useContext } from "react";
import { login, register, loginEmploy, getHelp } from "../../http";
import { useHistory } from "react-router-dom";



const AuthContext = React.createContext();

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

export function AuthProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(currentUser !== null);
    const [user, setUser] = useState(currentUser && currentUser.user);
    const history = useHistory();

    const signEmploy = async (password) => {
        try {
            const {
                data: { user }
            } = await loginEmploy(password);
            setUser(user);
            setIsAuthenticated(true);
            history.push("/employeer");


        } catch (error) {
            return Promise.reject(error);
        }
    };


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

    const logOut = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('currentUser');

    }

    const logOutEmploy = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('currentUser');
        history.push("/login_employeer")


    }

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, setIsAuthenticated, setUser, signIn, user, signUp, logOut, signEmploy, logOutEmploy, getHelp }}
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
