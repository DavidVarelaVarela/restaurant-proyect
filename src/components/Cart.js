import React, { useState } from "react";
import { useHistory } from "react-router";
import { useCart } from "../shared/context/cart-context";
import { Link } from "react-router-dom";
import { postOrder } from "../http/authService"

import "../css/pedido.css"

function Cart() {
    const [order, setOrder] = useState(false);
    const history = useHistory();
    const {
        cart,
        totalPrice,
        totalItems,
        removeItemFromCart,
        addItemToCart,
        removeItem,
    } = useCart();

    const makeOrder = (o) => {
        console.log(o)
    }

    return (
        <React.Fragment>
            <main className="order">
                <header className="home">
                    <h1>Aldach Has</h1>
                    <button className="btn call">Ayuda</button>
                    <button className="product-menu"><a
                        href="/"
                        onClick={e => {
                            e.preventDefault();
                            history.goBack();
                        }}
                    >
                        Volver
            </a></button>
                </header>
                <section className="order">
                    <ul className="order">
                        {cart.map(item => (
                            <li className="order" key={item.id}>
                                <article className="order">
                                    <h3><Link to={`/product/${item.id}`}>{`${item.name} `}</Link></h3>
                                    {/* <p>Hamburguesa de carne de ternera, con cebolla caramelizada, queso cheddar y salsa de mostaza dulce</p> */}
                                    <p> Precio unidad: {`${item.price}€`}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                </article>
                                <aside className="order">
                                    <button className="btn order "
                                        onClick={e => {
                                            e.preventDefault();
                                            addItemToCart(item);
                                            setOrder(false)
                                        }}
                                    >
                                        +
                            </button>
                                    <button className="btn order "
                                        onClick={e => {
                                            e.preventDefault();
                                            removeItemFromCart(item);
                                            setOrder(false)
                                        }}
                                    >
                                        -
                            </button>
                                    <button className="btn order remove"
                                        onClick={e => {
                                            e.preventDefault();
                                            removeItem(item.id);
                                            setOrder(false)
                                        }}
                                    >
                                        Borrar
                            </button>
                                </aside>
                            </li>
                        ))}
                    </ul>
                    <p>IVA = {`${Number((totalPrice / 1.21).toFixed(2))}€`}</p>
                    <p>Total = {`${Number(totalPrice.toFixed(2))}€`}</p>
                </section>
                <footer className="order">
                    {
                        totalItems > 0 && !order && (
                            <button className="menu order" onClick={() => {
                                makeOrder(cart);
                                setOrder(true)
                            }}>Confirmar Pedido</button>
                        )
                    }
                    {
                        order && (
                            <button className="menu order" onClick={() => history.push("/confirmation")}>Pagar con tarjeta</button>
                        )
                    }
                </footer>
            </main>
        </React.Fragment >
    );
}

export { Cart };
