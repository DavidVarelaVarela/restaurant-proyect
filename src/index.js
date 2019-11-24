import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from './routes/Home'
import { Login } from './routes/Login'
import { NotFound } from './routes/NotFound'
import { Registro } from './routes/Registro'
import { Recuperacion } from './routes/Recuperacion'



import './index.css';

import * as serviceWorker from './serviceWorker';




function App() {
    return (
        <BrowserRouter>

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
                <Route path="/menu">
                </Route>
                <Route path="/menu">
                </Route>
                <Route path="/menu/pedido">
                </Route>
                <Route path="/menu/pedido/valoracion">
                </Route>
                <Route path="*">
                    <NotFound>
                        <div></div>
                    </NotFound>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}







ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
