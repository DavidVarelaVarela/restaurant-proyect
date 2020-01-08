import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOrder } from "../shared/context/order-context"
import { getBill } from "../http/authService"
import { Confirmation } from "../components/Confirmation"
import { payOrder } from "../http/authService"


import { useHistory } from "react-router";

import "../css/pedido.css"

function PayOrder() {
    const history = useHistory();
    const { order } = useOrder();
    const [orderToPay, setOrderToPay] = useState([])
    const [pay, setPay] = useState(false)

    const totalPrice = orderToPay.reduce(
        (acc, item) => acc + item.quantity * parseInt(item.price, 0),
        0
    );
    useEffect(() => { order && getBill({ order }).then(response => setOrderToPay(response.data)) }, [order])
    const finalizeOrder = (pedido, id) => {
        payOrder(pedido, id).then((response =>
            response.data
        ))
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
                    {!pay && <ul className="order">
                        {orderToPay.map(item => (
                            <li className="order" key={item.idProduct}>
                                <article className="order">
                                    <h3><Link to={`/product/${item.idProduct}`}>{`${item.name} `}</Link></h3>
                                    <p> Precio unidad: {`${item.price}€`}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                </article>
                            </li>
                        ))}
                    </ul>}
                    <p>IVA = {`${Number((totalPrice / 1.21).toFixed(2))}€`}</p>
                    <p>Total = {`${Number(totalPrice.toFixed(2))}€`}</p>
                    {pay && <Confirmation />}
                </section>
                <footer className="order">
                    {!pay && <button className="menu order" onClick={(e) => { e.preventDefault(); finalizeOrder(totalPrice, order); setPay(true) }}>Pagar con tarjeta</button>}
                </footer>
            </main>
        </React.Fragment >
    )
}


export { PayOrder };