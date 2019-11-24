import { Link } from "react-router-dom";
import React from 'react';

export function Home() {
    return (
        <div>
            <h3>casa</h3>
            <nav>
                <Link to="/">Register</Link>
            </nav>
        </div>
    );
}
