import React from 'react';
import { Link } from "react-router-dom";

import "../css/registro.css"

export function Registro() {
    return (
        <React.Fragment>
            <header>
                <h1>Bievenido a SAS</h1>
            </header>
            <main className="registro" id="registro">
                <h3>Introduce tus datos</h3>
                <form action="" method="">
                    <fieldset>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email" >Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your mail" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="pass1" >Contraseña</label>
                        <input type="password" name="pass1" id="pass1" placeholder="Enter your password" />
                    </fieldset>
                    <button>Crear cuenta</button>
                    <Link to="/login">Ya tengo cuenta</Link>
                </form>
            </main>
        </React.Fragment>
    );
}