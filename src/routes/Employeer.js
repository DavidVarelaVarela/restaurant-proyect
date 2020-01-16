import React, { useState } from 'react';
import { getTableStatus, getRating } from "../http/authService"
import { useAuth } from '../shared/context/auth-context'
import useInterval from "../shared/utils/useInterval";
import { Table } from '../components/Table'
import { Feedback } from '../components/Feedback';
import "../css/employeer.css"


export function Employeer() {
    const { logOutEmploy, getHelp } = useAuth();
    const jwt = require('jsonwebtoken');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const { id } = jwt.decode(currentUser.accessToken)
    const [table, setTable] = useState([])
    const [valuation, setValuation] = useState([])
    const [feedback, setFeedback] = useState(false)


    const changeFeedback = () => { setFeedback(false) }

    function handleInterval() {
        getTableStatus({ id }).then(response => { setTable(response.data) });
    }
    const stopInterval = useInterval(handleInterval, 5000);

    const rating = (employ) => {
        getRating(employ).then((response =>
            setValuation(response.data)
        ))
    }


    const callwaiter = (id, help) => {
        getHelp({ id, help }).then((response =>
            response.data
        ))
    }
    return (<div className="employeer">
        <header className="employeer">
            <h2 className="employeer"> Gestión de mesas SAS</h2>
            <button onClick={e => { e.preventDefault(); logOutEmploy(stopInterval); }} className="call logout">Logout</button>
            <button onClick={e => { e.preventDefault(); rating({ id }); setFeedback(true) }} className="call">rating</button>
        </header>
        <main className="employeer">
            {feedback && <Feedback valuation={valuation} changeFeedback={changeFeedback} />}
            <ul className="employeer">
                {table.map((order) => (<li className="table" key={order.idOrders}>
                    <Table order={order} callwaiter={callwaiter}
                    />
                </li>
                ))}
            </ul>
        </main>
    </div>)
}