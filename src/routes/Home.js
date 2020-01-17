import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useAuth } from '../shared/context/auth-context'
import { useCart } from "../shared/context/cart-context";
import { useOrder } from "../shared/context/order-context"



import "../css/home.css"


export function Home() {
    const { logOut, getHelp } = useAuth();
    const history = useHistory();
    const { order, verifyOrder } = useOrder();
    const { totalItems } = useCart();
    useEffect(() => { verifyOrder() }, [verifyOrder])

    const help = "true";
    const callwaiter = (id, help) => {
        getHelp({ id, help }).then((response =>
            response.data
        ))
    }
    return (
        <div className="home">
            <header className="home">
                <h1>Green House</h1>
                <button className="btn call" onClick={e => { e.preventDefault(); callwaiter(order, help) }}>Ayuda</button>
                <Link className="btn shopping-cart" to="/cart">{totalItems && (<span>{totalItems}</span>)}</Link>
            </header>
            <main id="home">
                <section>
                    <button className="menu">Menú</button>
                    <ul className="home">
                        <li>
                            <button className="product-menu" ><Link to="/products/carne">Carne</Link></button>
                        </li>
                        <li>
                            <button className="product-menu"><Link to="/products/pescado">Pescado</Link></button>
                        </li>
                        <li>
                            <button className="product-menu"><Link to="/products/pasta">Pasta</Link></button>
                        </li>
                        <li>
                            <button className="product-menu"><Link to="/products/ensalada">Ensalada</Link></button>
                        </li>
                        <li>
                            <button className="product-menu"><Link to="/products/bebida">Bebidas</Link></button>
                        </li>
                        <li>
                            <button className="product-menu"><Link to="/products/postre">Postre</Link></button>
                        </li>
                    </ul>
                </section>
                {order && <button className=" pay" onClick={() => history.push("/pedido")}>Pagar el pedido</button>}
            </main>
            {!order && <footer><button className="pay" onClick={e => { e.preventDefault(); logOut() }}> Cerrar Sesión</button></footer>}
        </div >
    );
}
