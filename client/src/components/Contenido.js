import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Contenido() {
    const navigate = useNavigate()
    function ver(eleccion){
        if (eleccion ===1){
            navigate("/series")
        }else if(eleccion ===2){
            navigate("/peliculas")
        }else{
            
        }
    }

    return (
        <div className="contenido">
            <div onClick={()=> ver(1)}>
                <div className="placeholder">
                    <h3>SERIES</h3>
                </div>
                <div>
                    <p className="popular_title">Popular Series</p>
                </div>
            </div>
            <div onClick={()=> ver(2)}>
                <div className="placeholder">
                    <h3>MOVIES</h3>
                </div>
                <div>
                    <p className="popular_title">Popular Movies</p>
                </div>
            </div>

        </div>
    )
}

export default Contenido
