import React from 'react';
import { Link } from "react-router-dom";
import useForm from "react-hook-form";

import { useAuth } from "../shared/context/auth-context"

import "../css/registro.css"

export function Registro() {
    const { signUp } = useAuth();
    const { register, errors, formState, handleSubmit, setError } = useForm({
        mode: "onBlur"
    });
    const getColor = name => {
        return errors[name] ? "ko" : formState.touched.includes(name) && "ok";
    };

    const handleSignUp = formData => {
        return signUp(formData).catch(error => {
            if (error.response.status === 409) {
                setError(
                    "email",
                    "conflict",
                    "The email already exists. Please try again"
                );
            }
        });
    };
    return (
        <React.Fragment>
            <header>
                <h1>Bievenido a SAS</h1>
            </header>
            <main className="registro" id="registro">
                <h3>Introduce tus datos</h3>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className={`form-control ${getColor("name")}`}>
                        <label>Name</label>
                        <input
                            ref={register({
                                required: "The name is required"
                            })}
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                        />
                        <span className="errorMessage">
                            {errors.name && errors.name.message}
                        </span>
                    </div>
                    <div className={`form-control ${getColor("email")}`}>
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
                    </div>
                    <div className={`form-control ${getColor("password")}`}>
                        <label>Password</label>
                        <input
                            ref={register({
                                required: "The password should be in place",
                                minLength: {
                                    message: "Password length should be greater than 6",
                                    value: 6
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
                    </div>
                    <div className="btn-container">
                        <button
                            type="submit"
                            className="btn"
                            disabled={formState.isSubmitting}
                        >
                            Submit
                        </button>
                    </div>
                    <Link to="/login">Ya tengo cuenta</Link>
                </form>
            </main>
        </React.Fragment>
    );
}