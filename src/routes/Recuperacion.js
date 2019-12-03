import React from 'react';
import { Link } from "react-router-dom";

export function Recuperacion() {
    return (
        <React.Fragment>
            <header>
                <h1>Bievenido a SAS</h1>
            </header>
            <main className="registro" id="recuperacion">
                <form action="">
                    <h3>Recuperar Contraseña</h3>
                    <fieldset >
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </fieldset>
                    <button>Enviar</button>
                    <Link to="/login">Volver</Link>
                </form>
            </main>
        </React.Fragment >
    );
}