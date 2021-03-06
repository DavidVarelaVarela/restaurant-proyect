import axios from "axios";

//const BASE_URL = "https://solucioname-el-servicio.herokuapp.com/api"
const BASE_URL = "http://localhost:8000/api"


export function loginEmploy(password) {
    return axios.post(`${BASE_URL}/account/login`, {
        password
    }
    );
}
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

export function postOrder(order) {
    return axios.post(`${BASE_URL}/order`, {
        order

    });
}
export function putBill(order, id) {
    return axios.put(`${BASE_URL}/bill/${id}`, {
        order

    });
}
export function payOrder(id, totalPrice, starsSelected, status, time) {
    return axios.put(`${BASE_URL}/order/${id}`, {
        totalPrice, starsSelected, status, time
    });
}
export function getProducts({ productName }) {
    return axios.post(`${BASE_URL}/product/${productName}`);
}

export function getBill({ order }) {
    return axios.get(`${BASE_URL}/bill/${order}`);
}
export function getTableStatus({ id }) {
    return axios.get(`${BASE_URL}/table/status/${id}`);
}
export function getRating({ id }) {
    return axios.get(`${BASE_URL}/order/feedback/${id}`);
}

export function getHelp({ id, help }) {
    return axios.put(`${BASE_URL}/table/status/${id}`, {
        help
    });
}