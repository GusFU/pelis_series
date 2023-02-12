import React, { useState, useEffect } from "react";
import useFetch from "../hooks/fetch";
function Pelicula() {
    const { data, pending, error, execute } = useFetch()
    const info = {
        programType : "movie",
        releaseYear : 2010
    }
    let peliculas = []
    useEffect(() => {
        execute(info)
    }, []);
    useEffect(() => {
        if (data) {
            
           console.log(data)
           
        }
    }, [data]);

    return (
        <div>

        </div>
    )
}

export default Pelicula
