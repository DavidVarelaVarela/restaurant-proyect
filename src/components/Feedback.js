import React from 'react';




export function Feedback({ valuation, changeFeedback }) {
    // const date = new Date(valuation.ORDER.inicialTime)
    return (<div className="scoreboard">
        <button onClick={e => {
            e.preventDefault();
            changeFeedback();
        }}>Volver</button>
        <table>
            <thead>
                <tr>
                    <th>Mesa</th>
                    <th>Fecha</th>
                    <th>Valoración</th>
                </tr>
            </thead>
            <tbody>
                {valuation.map((order) => (
                    <tr key={order.idOrders}>
                        <td>{order.idTables}</td>
                        <td>{order.ORDER.inicialTime}</td>
                        <td>{order.ORDER.rating || order.ORDER.rating === 0 ? order.ORDER.rating : "Sin valoración"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>)
}

