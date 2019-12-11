import React from 'react';

import "../css/home.css"


export function Home() {
    return (
        <div className="home">
            <header className="home">
                <h1>Aldach Has</h1>
                <button className="btn call">Ayuda</button>
                <button className="btn shopping-cart"></button>
            </header>
            <main id="home">
                <section>
                    <button className="menu">Menú</button>
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
