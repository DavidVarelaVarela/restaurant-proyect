import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from '../shared/context/auth-context'
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useCart } from "../shared/context/cart-context";
import { useOrder } from "../shared/context/order-context"

import "../css/format.css"

function Products() {
    const { order } = useOrder();
    const { getHelp } = useAuth();
    const { totalItems } = useCart()
    const params = useParams();
    const [products, setProducts] = useState([]);

    //const BASE_URL = "https://solucioname-el-servicio.herokuapp.com/api"
    const BASE_URL = "http://localhost:8000/api"


    useEffect(() => {
        axios
            .get(`${BASE_URL}/products/${params.id}`)
            .then(response => setProducts(response.data));
    }, [params.id]);
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
                <ul>
                    {products.map(product => (
                        <li key={product.idProduct}>
                            <h2><Link to={`/product/${product.idProduct}`}>{product.name}</Link></h2>
                            <Link to={`/product/${product.idProduct}`}><img src={`/img/${product.idProduct}.jpeg`} width="200px" alt="foto de producto" /></Link>
                            <p>{product.description}</p>
                            <span>{`${product.price}€`}</span>
                        </li>
                    ))}
                </ul>
                <button className="products"><Link to="/">Volver</Link></button>
            </section>
        </div>
    );
}

export { Products };
