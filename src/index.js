import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, Login, Registro, LoginEmployeer, NotFound, Employeer } from "./routes";
import { Products } from './components/Products';
import { ProductDetail } from './components/ProductDetail';
import { PayOrder } from "./components/PayOrder"

import { AuthProvider } from "./shared/context/auth-context";
import { PrivateRoute } from "./components/PrivateRoute";
import { CartProvider } from "./shared/context/cart-context";


import './index.css'

import { Cart } from './components/Cart';
import { OrderProvider } from './shared/context/order-context';


function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <CartProvider>
                    <OrderProvider>
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
                            <Route path="/login_employeer">
                                < LoginEmployeer />
                            </Route>
                            <PrivateRoute path="/menu">
                            </PrivateRoute>
                            <PrivateRoute path="/pedido">
                                <PayOrder />
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
                            <PrivateRoute path="/employeer">
                                <Employeer />
                            </PrivateRoute>
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </OrderProvider>
                </CartProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}







ReactDOM.render(<App />, document.getElementById('root'));


