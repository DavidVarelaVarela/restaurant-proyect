import React from 'react';
import { Link } from "react-router-dom";

import "../css/notFound.css"

export function NotFound() {
    return (
        <main className="notFound">
            <section>
                <h1>OOPS!</h1>
                <h2>404 - The Page can't be found</h2>
                <nav>
                    <Link to="/">Vuelve a la página de inicio</Link>
                </nav>
            </section>
        </main>
    );
}
