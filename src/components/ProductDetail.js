import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useCart } from "../shared/context/cart-context";
import { useAuth } from '../shared/context/auth-context'
import { useOrder } from "../shared/context/order-context"



function ProductDetail() {
    const { order } = useOrder();
    const { getHelp } = useAuth();
    const [product, setProduct] = useState();
    const params = useParams();
    const history = useHistory();
    const { addItemToCart, totalItems } = useCart();
    //const BASE_URL = "https://solucioname-el-servicio.herokuapp.com/api"
    const BASE_URL = "http://localhost:8000/api"

    useEffect(() => {
        axios
            .get(
                `${BASE_URL}/product/${
                params.id
                }`
            )
            .then(response => setProduct(response.data));
    }, [params.id]);

    if (!product) return null;
    const help = "true";
    const callwaiter = (id, help) => {
        getHelp({ id, help }).then((response =>
            response.data
        ))
    }

    return (
        <div className="format">
            <header className="home">
                <h1>Green House</h1>
                <button className="btn call" onClick={e => { e.preventDefault(); callwaiter(order, help) }}>Ayuda</button>
                <Link className="btn shopping-cart" to="/cart">{totalItems && (<span>{totalItems}</span>)}</Link>
            </header>
            <section className="products">
                <h3 >{product.name}</h3>
                <img src={`/img/${product.idProduct}.jpeg`} width="300px" alt="foto de producto" />
                <p>{product.description}</p>
                <p>{`${product.price}€`}</p>
            </section>
            <footer className="products">
                <button className="products"><a id="volver"
                    href="/"
                    onClick={e => {
                        e.preventDefault();
                        history.goBack();
                    }}
                >
                    Volver
            </a></button>
                <button className="products " onClick={() => { addItemToCart(product) }}>Add to cart</button>
            </footer>
        </div>
    );
}

export { ProductDetail };
