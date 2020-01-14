import React, { useState } from "react";
import Swal from 'sweetalert2'
import { useOrder } from "../shared/context/order-context";
import { payOrder } from "../http/authService"
import { useAuth } from "../shared/context/auth-context"
import "../css/confirmation.css";

const Star = ({ selected = false, onClick = f => f }) => (
    <div className={selected ? "star selected" : "star"} onClick={onClick} />
);
const StarRating = ({ totalStars, starToSelec, starsSelected }) => {
    return (
        <section className="star-rating">
            {[...Array(totalStars)].map((n, i) => (
                <Star
                    key={i}
                    selected={i < starsSelected}
                    onClick={() => starToSelec(i)}
                />
            ))}
        </section>

    );
};
const finalizeOrder = (pedido, price, ratting, status) => {
    payOrder(pedido, price, ratting, status).then((response =>
        response.data
    ))
}


const finalMessage = () => {
    Swal.fire({
        icon: 'success',
        position: 'center',
        title: 'El pedido se ha pagado correctamente!',
        html: '<p>Muchas gracias por su visita, esperamos verlo pronto.<p>',
        timer: 3000,
        timerProgressBar: false,
        showConfirmButton: false,
    })
}

function Confirmation({ totalPrice, order }) {
    const [starsSelected, selectStar] = useState(0);
    const { logOut } = useAuth();
    const { resetOrder } = useOrder();
    const status = "Pagado"
    function starToSelec(i) {
        return selectStar(i + 1)
    }


    return (
        <main className="rating">
            <h3>Valora este servicio para finalizar el pago</h3>
            <StarRating totalStars={5} starToSelec={starToSelec} starsSelected={starsSelected} />
            <button className="menu confirmation" onClick={(e) => { e.preventDefault(); finalizeOrder(order, totalPrice, starsSelected, status); resetOrder(); finalMessage(); logOut() }}>Valora este servicio</button>
            <button className="menu confirmation" onClick={(e) => { e.preventDefault(); finalizeOrder(order, totalPrice, 0, status); resetOrder(); finalMessage(); logOut() }}>Pagar sin valorar</button>
        </main>)
}

export { Confirmation };
