import React, { useEffect, useState } from 'react';
import axios from "axios";
import { payOrder } from "../http/authService"
import useInterval from "../shared/utils/useInterval";



export function Table({ order, callwaiter }) {
    const [products, setProduts] = useState([])
    const [time, setTime] = useState(0);
    const [checked, setChecked] = useState(false);
    const [pay, setPay] = useState(order.ORDER.status === "Pagado" ? true : false);
    const help = "false"

    const onCheckedChange = () => setChecked(!checked)
    const onChekedPay = () => setPay(!pay)

    const BASE_URL = "https://solucioname-el-servicio.herokuapp.com/api"
    //const BASE_URL = "http://localhost:8000/api"

    useEffect(() => {
        axios
            .get(`${BASE_URL}/bill/${order.idOrders}`)
            .then(response => setProduts(response.data));
    }, [order.idOrders])


    function handleInterval() {
        setTime((second) => second + 1);
    }
    const stopInterval = useInterval(handleInterval, 1000);

    const finalizeOrder = (pedido, price, ratting, status, time) => {
        payOrder(pedido, price, ratting, status, time).then((response =>
            response.data
        ))
    }

    return (<React.Fragment  >
        <section className="table">
            <button className={`employeer ${order.help}`} onClick={e => { e.preventDefault(); callwaiter(order.idOrders, help) }} >Mesa nº {order.idTables} <br></br> {Math.round(time / 60).toFixed(0)} minutos {Math.round(time % 60).toFixed(0)} segundos</button>
            <ul>
                {products.map(product => (
                    <li className="product-list" key={product.idProduct}>
                        <p className="product-list"><strong>{product.quantity}</strong></p>
                        <p>{product.name} </p>
                    </li>
                ))}
            </ul>
        </section>
        <form className="employeer">
            <fieldset className="employeer">
                <input className="employeer" type="checkbox" checked readOnly></input>
                <label >Pendiente de servir</label>
            </fieldset>
            <fieldset className="employeer">
                <input className="employeer" type="checkbox" checked={checked || pay} onChange={onCheckedChange} onClick={stopInterval}></input>
                <label >Servido</label>
            </fieldset>
            <fieldset className="employeer">
                <input className="employeer" type="checkbox" checked={checked || pay} readOnly></input>
                <label >{checked || pay ? "Pendiente Pagar" : ""}</label>
            </fieldset>
            <fieldset className="employeer">
                <input className="employeer" type="checkbox" checked={pay} onChange={onChekedPay} onClick={() => { finalizeOrder(order.idOrders, order.ORDER.totalPrice, order.ORDER.rating, "Pagado", time) }}></input>
                <label >{order.ORDER.status === "Pagado" || pay ? "Pagado" : ""}</label>
            </fieldset>
        </form>
    </React.Fragment >)
}