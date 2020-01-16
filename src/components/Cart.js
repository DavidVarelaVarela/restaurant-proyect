import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useCart } from "../shared/context/cart-context";
import { useOrder } from "../shared/context/order-context"
import { Link } from "react-router-dom";
import { postOrder, putBill } from "../http/authService"
import { useAuth } from '../shared/context/auth-context'


import "../css/pedido.css"

function Cart() {
    const history = useHistory();
    const { getHelp } = useAuth();
    const { order, addOrder, verifyOrder } = useOrder();

    const help = "true";
    const callwaiter = (id, help) => {
        getHelp({ id, help }).then((response =>
            response.data
        ))
    }

    useEffect(() => { verifyOrder() }, [verifyOrder])
    const {
        cart,
        totalPrice,
        totalItems,
        removeItemFromCart,
        addItemToCart,
        removeItem,
        resetCart
    } = useCart();

    const makeOrder = (pedido) => {
        postOrder(pedido).then((response => {
            addOrder(response.data)
        }))
    }

    const updateOrder = (pedido, id) => {
        putBill(pedido, id).then((response =>
            response.data
        ))
    }
    return (
        <React.Fragment>
            <main className="order">
                <header className="home">
                    <h1>Green House</h1>
                    <button className="btn call" onClick={e => { e.preventDefault(); callwaiter(order, help) }}>Ayuda</button>
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
                            <li className="order" key={item.idProduct}>
                                <article className="order">
                                    <h3><Link to={`/product/${item.idProduct}`}>{`${item.name} `}</Link></h3>
                                    <p> Precio unidad: {`${item.price}€`}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                </article>
                                <aside className="order">
                                    <button className="btn order "
                                        onClick={e => {
                                            e.preventDefault();
                                            addItemToCart(item);
                                        }}
                                    >
                                        +
                            </button>
                                    <button className="btn order "
                                        onClick={e => {
                                            e.preventDefault();
                                            removeItemFromCart(item);
                                        }}
                                    >
                                        -
                            </button>
                                    <button className="btn order remove"
                                        onClick={e => {
                                            e.preventDefault();
                                            removeItem(item.idProduct);
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
                            <button className="menu order" onClick={(e) => {
                                e.preventDefault();
                                makeOrder(cart);
                                resetCart();
                                history.push("/")
                            }}>Confirmar Pedido</button>
                        )
                    }
                    {
                        totalItems > 0 && order && (
                            <React.Fragment>
                                <button className="menu order" onClick={(e) => {
                                    e.preventDefault();
                                    updateOrder(cart, order)
                                    resetCart();
                                    history.push("/")
                                }}>Actualizar Pedido</button>
                            </React.Fragment>
                        )
                    }
                </footer>
            </main>
        </React.Fragment >
    );
}

export { Cart };
