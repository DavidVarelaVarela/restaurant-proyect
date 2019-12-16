import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

/*quitar null y auth para nuestro back*/
export function login(email, password) {
    return axios.post(`${BASE_URL}/account/login`, {
        email,
        password
    }
    );
}
/*poner ruta y body del back*/
export function register({ name, email, password }) {
    return axios.post(`${BASE_URL}/account`, {
        name,
        email,
        password,
        phone: 123456789
    });
}