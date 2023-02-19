import React, { useState, useEffect } from "react";

function Pie_de_pagina() {

    return (
        <div className="pie_de_pagina">
            <div className="copy">
                <p>Home  |  Terms and Conditions  |  Privacy Polity  |  Collection Statement  |  Help  |  Manage Account</p>{/* poner dentro de un div y centrar */}
                <p>Copyright © 2016 DEMO Streaming. All Right Reserved</p>
            </div>
            <div className="pie-img">
                <div className="pie-imgs">
                    <img className="img-redes" src="./asset/facebook-white.svg"></img>
                    <img className="img-redes" src="./asset/twitter-white.svg"></img>
                    <img className="img-redes" src="./asset/instagram-white.svg"></img>

                </div>
                <div className="pie-imgs">
                    <img className="img-store" src="./asset/app-store.svg"></img>
                    {<img className="img-store" src="./asset/play-store.svg"></img> }
                    <img className="img-store" src="./asset/windows-store.svg"></img>
                </div>
            </div>
        </div>
    )
}

export default Pie_de_pagina
