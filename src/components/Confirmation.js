import React, { useState } from "react";

import { useOrder } from "../shared/context/order-context";
import { useAuth } from "../shared/context/auth-context"
import "../css/confirmation.css"

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

function Confirmation() {
    const [starsSelected, selectStar] = useState(0);
    const { order } = useOrder();
    const { logOut } = useAuth();
    const { resetOrder } = useOrder();

    function starToSelec(i) {
        return selectStar(i + 1)
    }


    return (
        <main className="rating">
            <StarRating totalStars={5} starToSelec={starToSelec} starsSelected={starsSelected} />
            <button className="menu" onClick={(e) => { e.preventDefault(); console.log(starsSelected); resetOrder(); logOut() }}>Valora este servicio</button>
        </main>)
}

export { Confirmation };
