import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, Login, Registro, Recuperacion, Pedido, NotFound } from "./routes";
import { Employeer } from './routes/Employeer';
import { Products } from './components/Products';
import { ProductDetail } from './components/ProductDetail';
import { Confirmation } from './components/Confirmation';

import { AuthProvider } from "./shared/context/auth-context";
import { PrivateRoute } from "./components/PrivateRoute";
import { CartProvider } from "./shared/context/cart-context";


import './index.css'
import { Cart } from './components/Cart';


function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <CartProvider>
                    <Switch>
                        <PrivateRoute exact path="/">
                            <Home />
                        </PrivateRoute>
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
                        <PrivateRoute path="/products/:id">
                            <Products />
                        </PrivateRoute>
                        <PrivateRoute path="/product/:id">
                            <ProductDetail />
                        </PrivateRoute>
                        <PrivateRoute path="/cart">
                            <Cart />
                        </PrivateRoute>
                        <PrivateRoute path="/confirmation">
                            <Confirmation />
                        </PrivateRoute>
                        <PrivateRoute path="/valoracion">
                        </PrivateRoute>
                        <PrivateRoute path="/employeer">
                            <Employeer />
                        </PrivateRoute>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </CartProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}







ReactDOM.render(<App />, document.getElementById('root'));


