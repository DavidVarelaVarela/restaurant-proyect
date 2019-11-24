import React from 'react';
import { Link } from "react-router-dom";

export function Recuperacion() {
    return (
        <React.Fragment>
            <header>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Mario_emblem_inverted.svg/1024px-Mario_emblem_inverted.svg.png"
                    alt="Logo Mario"
                />
            </header>
            <section id="acceso" >
                <form action="">
                    <h2>Recuperar Contraseña</h2>
                    <fieldset >
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </fieldset>

                    <button>Enviar</button>
                    <p><Link to="/login">Volver</Link> </p>
                </form>
            </section>
        </React.Fragment>
    );
}