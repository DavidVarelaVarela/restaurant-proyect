import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useOrder } from "../shared/context/order-context";
import { useAuth } from "../shared/context/auth-context"

function Confirmation() {
    const { logOut } = useAuth();
    const { resetOrder } = useOrder();
    const history = useHistory();

    useEffect(() => {
        resetOrder();
    }, []);

    return (
        <section className="">
            <p>Su compra se ha completado con éxito</p>
            <button className="order menu" onClick={() => history.push("/")}>Valora este servicio</button>
        </section>)
}

export { Confirmation };
