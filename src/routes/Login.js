import React from 'react';
import { Link } from "react-router-dom";
import useForm from 'react-hook-form'
import { useAuth } from '../shared/context/auth-context'


import "../css/login.css"


function Login() {
    const { signIn } = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState,
        errors,
        setError,
        setValue
    } = useForm({
        mode: "onBlur"
    });

    // console.log("WATCH: ", watch());
    console.log("STATE: ", formState);
    // console.log("ERRORS:", errors);

    const handleSignin = formData => {
        signIn(formData)
            .then(data => console.log(data))
            .catch(error => {
                setError("password", "invalidCredentials", "Password or email are incorrect");
            });
        setValue("password", "");
        setValue("email", "")
    };

    const isFieldValid = name => {
        return errors[name] ? "ko" : formState.touched.includes(name) && "ok";
    };

    return (
        <React.Fragment>
            <main className="registro" id="login">
                <h3>Introdute tus datos</h3>
                <form onSubmit={handleSubmit(handleSignin)}>
                    <fieldset className={`form ${isFieldValid("email")}`}>
                        <label>Email</label>
                        <input
                            ref={register({
                                required: "The email is required",
                                pattern: {
                                    message: "The email is not valid",
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                }
                            })}
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Enter your email"
                        />
                        <span className="errorMessage">
                            {errors.email && errors.email.message}
                        </span>
                    </fieldset>
                    <fieldset className={`form-control ${isFieldValid("password")}`}>
                        <label>Password</label>
                        <input
                            ref={register({
                                required: "The password should be in place",
                                minLength: {
                                    message: "Password length should be greater than 5",
                                    value: 5
                                }
                            })}
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                        />
                        <span className="errorMessage">
                            {errors.password && errors.password.message}
                        </span>
                    </fieldset>
                    <button
                        type="submit"
                        className="btn"
                        disabled={formState.isSubmitting || errors.email || errors.password || formState.touched.length < 2}
                    >
                        Entrar
                    </button>
                    <Link to="/registro">Registrarse</Link>
                    <Link to="/recuperar-contrasena">Recuperar contraseña</Link>
                    <Link to="/">Volver al inicio</Link>
                </form>
            </main>
        </React.Fragment>
    );
}

export { Login };
