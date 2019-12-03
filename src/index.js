import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, Login, Registro, Recuperacion, Pedido, NotFound } from "./routes";

import { AuthProvider } from "./shared/context/auth-context";
import { PrivateRoute } from "./components/PrivateRoute";

import './index.css'

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/registro">
                        <Registro />
                    </Route>
                    <Route path="/recuperar-contrasena">
                        <Recuperacion />
                    </Route>
                    <PrivateRoute path="/menu">
                    </PrivateRoute>
                    <PrivateRoute path="/pedido">
                        <Pedido />
                    </PrivateRoute>
                    <PrivateRoute path="/valoracion">
                    </PrivateRoute>
                    <PrivateRoute path="/employeer">
                    </PrivateRoute>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    );
}







ReactDOM.render(<App />, document.getElementById('root'));


