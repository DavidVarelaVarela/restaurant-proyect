import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOrder } from "../shared/context/order-context"
import { getBill } from "../http/authService"
import { Confirmation } from "../components/Confirmation"


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

    return (
        <React.Fragment>
            {!pay && <main className="order">
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
                        {orderToPay.map(item => (
                            <li className="order" key={item.idProduct}>
                                <article className="order">
                                    <h3><Link to={`/product/${item.idProduct}`}>{`${item.name} `}</Link></h3>
                                    <p> Precio unidad: {`${item.price}€`}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                </article>
                            </li>
                        ))}
                    </ul>
                    <p>IVA = {`${Number((totalPrice - (totalPrice / 1.10)).toFixed(2))}€`}</p>
                    <p>Total = {`${Number(totalPrice.toFixed(2))}€`}</p>
                </section>
                <footer className="order">
                    <button className="menu order" onClick={(e) => { e.preventDefault(); setPay(true) }}>Pagar con tarjeta</button>
                    <button className="menu order" onClick={(e) => { e.preventDefault(); setPay(true) }}>Pagar con efectivo</button>
                </footer>
            </main>}
            {pay && <Confirmation totalPrice={totalPrice} order={order} />}
        </React.Fragment >
    )
}


export { PayOrder };