import axios from "axios";

const BASE_URL = "https://hack-a-note-server.herokuapp.com";

/*quitar null y auth para nuestro back*/
export function login(email, password) {
    return axios.post(`${BASE_URL}/auth`, null, {
        auth: {
            username: email,
            password
        }
    });
}
/*poner ruta y body del back*/
export function register({ name, email, password }) {
    return axios.post(`${BASE_URL}/users`, {
        name,
        email,
        password
    });
}