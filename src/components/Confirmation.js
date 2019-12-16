import React, { useEffect } from "react";
import { useCart } from "../shared/context/cart-context";

function Confirmation() {
    const { resetCart } = useCart();

    useEffect(() => {
        resetCart();
    }, []);

    return (
        <div>
            <p>Su compra se ha completado con éxito</p>
            <a href="/">Volver</a>
        </div>)
}

export { Confirmation };
