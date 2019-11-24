import React from 'react';
import { Link } from "react-router-dom";

import "./css/registro.css"

export function Registro() {
    return (
        <React.Fragment>

            <header>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Mario_emblem_inverted.svg/1024px-Mario_emblem_inverted.svg.png"
                    alt="Logo Mario"
                />
            </header>

            <section id="registro" >
                <form action="" method="">
                    <h2>Introduce tus datos</h2>

                    <fieldset>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" id="name" />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="pass1">Contraseña</label>
                        <input type="password" name="pass1" id="pass1" />
                    </fieldset>

                    <button>Crear cuenta</button>

                    <p><Link to="/login">Ya tengo cuenta</Link></p>
                </form>
            </section>
            <footer>
                <img src="https://media.giphy.com/media/2A760H1p8R9UNpYCba/giphy.gif" alt="Mario"></img>
            </footer>
        </React.Fragment>

    );
}