import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "../shared/context/cart-context";

function Products() {
    const { totalItems } = useCart()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`https://5ddc196a041ac10014de1b57.mockapi.io/products`)
            .then(response => setProducts(response.data));
    }, []);

    return (
        <React.Fragment>
            <header className="home">
                <h1>Aldach Has</h1>
                <button className="btn call">Ayuda</button>
                <Link className="btn shopping-cart" to="/cart">{totalItems && (<span>{totalItems}</span>)}</Link>
            </header>
            <main className="products">
                <button className="product-menu"><Link to="/">Volver</Link></button>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            <h2><Link to={`/product/${product.id}`}>{product.name}</Link></h2>
                            <img src="/img/carne/carne1.jpeg" width="200px" alt="foto de producto" />
                            <p>{product.description}</p>
                            <span>{`${product.price}€`}</span>
                        </li>
                    ))}
                </ul>
            </main>
        </React.Fragment>
    );
}

export { Products };
