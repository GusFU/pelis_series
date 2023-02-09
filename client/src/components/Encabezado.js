import React, { useState, useEffect } from "react";

function Encabezado() {

    return (
        <div className="header">
            <div className="header1">
                <div className="demo">
                    <h1>DEMO Streaming</h1>
                </div>
                <div className="login_trial">
                    <a className="login"><b>Log in</b></a>
                    <button className="trial">Start your free trial</button>
                </div>
            </div>
            <div className="hearder2">
                <h2>
                    Populars Titles
                </h2>
            </div>
        </div>
    )
}

export default Encabezado
