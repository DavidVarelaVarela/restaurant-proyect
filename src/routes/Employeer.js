import React, { useState, useEffect } from 'react';
import { getTableStatus } from "../http/authService"
import { Table } from '../components/Table'
import "../css/employeer.css"


export function Employeer() {
    const [table, setTable] = useState([])

    const idEmployeer = 1
    useEffect(() => {
        getTableStatus({ idEmployeer }).then(response => setTable(response.data))

    }, []);


    return (<React.Fragment>
        <header className="employeer"> <h1> Gestión de mesas SAS</h1></header>
        <main className="employeer">
            <ul className="employeer">
                {table.map((order) => (<li className="table" key={order.idTables}>
                    <Table order={order} />
                </li>
                ))}

            </ul>
        </main>
    </React.Fragment>)
}