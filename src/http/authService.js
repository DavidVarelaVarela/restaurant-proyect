import axios from "axios";

const BASE_URL = "http://localhost:8000/api";


export function login(email, password) {
    return axios.post(`${BASE_URL}/account/login`, {
        email,
        password
    }
    );
}

export function register({ name, email, password }) {
    return axios.post(`${BASE_URL}/account`, {
        name,
        email,
        password,
        phone: 123456789
    });
}

export function postOrder({ order }) {
    return axios.post(`${BASE_URL}/bill`, {
        order

    });
}