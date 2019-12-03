import React from 'react';
import { Link } from "react-router-dom";

import "../css/home.css"


export function Home() {
    return (
        <React.Fragment>
            <header className="home">
                <h1>Aldach Has</h1>
                <button className="btn call">Avisar camarero</button>
                <button className="btn shopping-car"><img src="../img/car.png" />" </button>
            </header>
            <main id="home">
                <form>
                    <button className="order">Menú</button>
                </form>
                <nav>
                    <Link to="/login">Entrar con mi usuaio</Link>
                    <Link to="/registro">Registrarme</Link>
                </nav>
            </main>
        </React.Fragment >
    );
}
