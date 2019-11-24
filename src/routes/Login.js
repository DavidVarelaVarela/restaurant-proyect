import React from 'react';
import { Link } from "react-router-dom";


import "./css/login.css"


export function Login() {
    return (
        <React.Fragment>
            <header>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Mario_emblem_inverted.svg/1024px-Mario_emblem_inverted.svg.png"
                    alt="Logo Mario"
                />
            </header>
            <section id="acceso">
                <form method="POST">
                    <h2>Iniciar sesión</h2>

                    <fieldset >
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </fieldset>

                    <fieldset >
                        <label htmlFor="pass1">Contraseña</label>
                        <input type="password" name="pass1" id="pass1" />
                    </fieldset>

                    <button>Acceder</button>

                    <p> <Link to="/registro">Regístrate</Link> | <Link to="/recuperar-contrasena">Recuperar contrasena</Link></p>


                </form>
                <nav>
                    <Link to="/">Volver</Link>
                </nav>
            </section>

        </React.Fragment>
    );
}
