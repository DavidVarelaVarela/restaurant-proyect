import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router";
import { useCart } from "../shared/context/cart-context";

function ProductDetail() {
    const [product, setProduct] = useState();
    const params = useParams();
    const history = useHistory();
    const { addItemToCart } = useCart();

    useEffect(() => {
        axios
            .get(
                `https://5ddc196a041ac10014de1b57.mockapi.io/products/${
                params.id
                }`
            )
            .then(response => setProduct(response.data));
    }, [params.id]);

    if (!product) return null;

    return (
        <div>
            <a
                href="/"
                onClick={e => {
                    e.preventDefault();
                    history.goBack();
                }}
            >
                Back
            </a>
            <h3>{product.name}</h3>
            <button onClick={() => addItemToCart(product)}>Add to cart</button>
        </div>
    );
}

export { ProductDetail };
