import React, { useState, useEffect } from 'react';
import { getTableStatus } from "../http/authService"
import { Table } from '../components/Table'
import "../css/employeer.css"


export function Employeer() {
    const [table, setTable] = useState([])
    const idEmployeer = 1



    useEffect(() => {
        setInterval(() => {
            getTableStatus({ idEmployeer }).then(response => setTable(response.data))
        }, 5000);
    }, []);

    return (<div className="employeer">
        <header className="employeer"> <h2> Gestión de mesas SAS</h2></header>
        <main className="employeer">
            <ul className="employeer">
                {table.map((order) => (<li className="table" key={order.idOrders}>
                    <Table order={order}
                    />
                </li>
                ))}

            </ul>
        </main>
    </div>)
}