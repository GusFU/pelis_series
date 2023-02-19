import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Contenido() {
    const navigate = useNavigate()
    const seleccion = (producto) => {
        const CASES = {
            movies: "/peliculas",
            series: "/series"
            
        }
        return CASES[producto]
    }
   

    return (
        <div className="contenido">
            <div onClick={()=>navigate(seleccion("series"))}>
                <div className="placeholder">
                    <h3>SERIES</h3>
                </div>
                <div>
                    <p className="popular_title">Popular Series</p>
                </div>
            </div>
            <div onClick={()=>navigate(seleccion("movies"))}>
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
