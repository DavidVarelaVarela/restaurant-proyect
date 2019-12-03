import axios from "axios";

const BASE_URL = "https://hack-a-note-server.herokuapp.com";

export function login(email, password) {
    return axios.post(`${BASE_URL}/auth`, {
        auth: {
            username: email,
            password
        }
    });
}