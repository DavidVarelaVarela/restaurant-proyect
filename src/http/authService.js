import axios from "axios";

const BASE_URL = "http://localhost:8000/api";


export function login(email, password) {
    return axios.post(`${BASE_URL}/account/login`, {
        email,
        password
    }
    );
}

export function register({ name, email, password, phone }) {
    return axios.post(`${BASE_URL}/account`, {
        name,
        email,
        password,
        phone: phone ? phone : null,
    });
}

export function postOrder({ order }) {
    return axios.post(`${BASE_URL}/bill`, {
        order

    });
}