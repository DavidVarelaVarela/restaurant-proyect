import React from 'react';


export function Table({ order }) {

    return (<React.Fragment  >
        <section className="table">
            <button className="employeer">Mesa nº {order.idTables} <br></br> Time</button>
            <ul>
                <li>Patatas</li>
                <li>Patatas con pimientos</li><li>Hambuerguesa con bacon</li><li>Patatas</li><li>Patatas</li><li>Patatas</li><li>Patatas</li><li>Patatas</li>
            </ul>
        </section>
        <form className="employeer">
            <fieldset className="employeer">
                <input className="employeer" type="checkbox" ></input>
                <label >Pendiente de servir</label>
            </fieldset>
            <fieldset className="employeer">
                <input className="employeer" type="checkbox" ></input>
                <label >Servido</label>
            </fieldset>
            <fieldset className="employeer">
                <input className="employeer" type="checkbox" ></input>
                <label >Pendiente de Pagar</label>
            </fieldset>
            <fieldset className="employeer">
                <input className="employeer" type="checkbox" ></input>
                <label >Pagado</label>
            </fieldset>
        </form>
    </React.Fragment>)
}