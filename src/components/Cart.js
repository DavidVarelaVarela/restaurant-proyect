import React, { useState } from "react";
import { useHistory } from "react-router";
import { useCart } from "../shared/context/cart-context";
import { Link } from "react-router-dom";

function Cart() {
    const [order, setOrder] = useState(false);
    const {
        cart,
        totalPrice,
        totalItems,
        removeItemFromCart,
        addItemToCart,
        removeItem
    } = useCart();
    const history = useHistory();

    return (
        <React.Fragment>
            <header className="home">
                <h1>Aldach Has</h1>
                <button className="btn call">Ayuda</button>
                <button className="product-menu"><Link to={`/products`}>volver</Link></button>
            </header>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        <section>
                            <Link to={`/product/${item.id}`}>{`${item.name} `}</Link>
                            <p>{item.description}</p>
                            <p> Precio Unidad:{`${item.price}€`}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <button
                                onClick={e => {
                                    e.preventDefault();
                                    addItemToCart(item);
                                    setOrder(false)
                                }}
                            >
                                +
                            </button>
                            <button
                                onClick={e => {
                                    e.preventDefault();
                                    removeItemFromCart(item);
                                    setOrder(false)
                                }}
                            >
                                -
                            </button>
                            <button
                                onClick={e => {
                                    e.preventDefault();
                                    removeItem(item.id);
                                    setOrder(false)
                                }}
                            >
                                Elimiar Producto
                            </button>
                        </section>
                    </li>
                ))}
            </ul>
            <p>IVA = {`${Number((totalPrice / 1.21).toFixed(2))}€`}</p>
            <p>Total = {`${Number(totalPrice.toFixed(2))}€`}</p>
            {
                totalItems > 0 && !order && (
                    <button onClick={() => setOrder(true)}>Confirmar Pedido</button>
                )
            }
            {
                order && (
                    <button onClick={() => history.push("/confirmation")}>Pagar con tarjeta</button>
                )
            }
        </React.Fragment >
    );
}

export { Cart };
