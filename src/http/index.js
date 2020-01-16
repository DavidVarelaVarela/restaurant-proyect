import axios from "axios";
import { login, loginEmploy, register, postOrder, putBill, getProducts, getBill, payOrder, getRating, getHelp } from "./authService";

function isBearerTokenRequired(url) {
    const parsedURL = new URL(url);
    if (["/account/login", "/account"].includes(parsedURL.pathname)) {
        return false;
    }
    return true;
}


const currentUser = JSON.parse(localStorage.getItem("currentUser"));



let accessToken = (currentUser && currentUser.accessToken) || null;


axios.interceptors.request.use(
    function (config) {

        if (accessToken && isBearerTokenRequired(config.url)) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);


axios.interceptors.response.use(
    function (response) {

        if (response.data.accessToken) {
            localStorage.setItem("currentUser", JSON.stringify(response.data));
            accessToken = response.data.accessToken;
        }
        return response;
    },
    function (error) {

        if (
            error.response.status === 401 &&
            error.config.url.indexOf("/login") === -1
        ) {
            localStorage.removeItem("currentUser");
            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export { login, loginEmploy, register, postOrder, putBill, getProducts, getBill, payOrder, getRating, getHelp };
