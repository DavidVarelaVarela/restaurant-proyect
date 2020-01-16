import React, { useState } from 'react';
import { useAuth } from '../shared/context/auth-context'


import "../css/login.css"


function LoginEmployeer() {
    const { signEmploy } = useAuth();
    const [pass, setPass] = useState()


    const handleSignin = formData => {
        signEmploy(formData)
            .then(data => (data))

    };



    return (

        <main className="registro login" >
            <h3>Acceso al Gestor de Pedidos</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleSignin(pass) }}>
                <fieldset className={`form-control }`}>
                    <label>Password</label>
                    <input onChange={(e) => { setPass(e.target.value) }} className="registro"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </fieldset>
                <button
                    type="submit"
                    className="btn"
                >
                    Entrar
                    </button>
            </form>
        </main >

    );
}

export { LoginEmployeer };
