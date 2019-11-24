import { Link } from "react-router-dom";
import React from 'react';

export function Home() {
    return (
        <div>
            <h3>Home</h3>
            <nav>
                <Link to="/registro">Registro</Link>
            </nav>
        </div>
    );
}
