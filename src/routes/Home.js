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
            </main>
        </div >
    );
}
