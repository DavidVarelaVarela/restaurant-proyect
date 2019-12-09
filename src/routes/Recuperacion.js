import React from 'react';
import { Link } from "react-router-dom";

export function Recuperacion() {
    return (
        <div id="registro">
            <main className="registro" >
                <form action="">
                    <h3>Recuperar Contraseña</h3>
                    <fieldset >
                        <label htmlFor="email">Email</label>
                        <input className="registro" type="email" name="email" id="email" />
                    </fieldset>
                    <button>Enviar</button>
                    <Link to="/login">Volver</Link>
                </form>
            </main>
        </div >
    );
}