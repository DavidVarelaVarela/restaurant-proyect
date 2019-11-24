import React from 'react';
import { Link } from "react-router-dom";

export function Home() {
    return (
        <React.Fragment>
            <header>
                <img
                    src="/img/logo.jpeg"
                    alt="Logo Mario"
                />
            </header>

            <section id="home">


                <button>Acceder</button>

                <p><Link to="/login">Entrar con mi cuenta</Link> | <Link to="/registro">Regístrate</Link></p>
                <footer>
                    <img src=""></img>
                </footer>
            </section>

        </React.Fragment >
    );
}
