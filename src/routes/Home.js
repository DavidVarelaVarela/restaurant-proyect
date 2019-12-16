import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from "../shared/context/cart-context";



import "../css/home.css"


export function Home() {
    const { totalItems } = useCart()
    return (
        <div className="home">
            <header className="home">
                <h1>Aldach Has</h1>
                <button className="btn call">Ayuda</button>
                <Link className="btn shopping-cart" to="/cart">{totalItems && (<span>{totalItems}</span>)}</Link>
            </header>
            <main id="home">
                <section>
                    <button className="menu"><Link to="/products">Menú</Link></button>
                    <ul className="home">
                        <li>
                            <button className="product-menu" >Carne</button>
                        </li>
                        <li>
                            <button className="product-menu">Pescado</button>
                        </li>
                        <li>
                            <button className="product-menu">Pasta</button>
                        </li>
                        <li>
                            <button className="product-menu">Ensalada</button>
                        </li>
                        <li>
                            <button className="product-menu">Bebidas</button>
                        </li>
                        <li>
                            <button className="product-menu">Postre</button>
                        </li>
                    </ul>
                </section>
            </main>
        </div >
    );
}
