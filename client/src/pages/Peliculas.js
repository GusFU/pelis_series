import React, { useState, useEffect } from "react";
import Encabezado from "../components/Encabezado"
import Pie_de_pagina from "../components/Pie_de_pagina"
import Pelicula from "../components/Pelicula";
function Peliculas() {

    return (
        <div>
            <Encabezado />
            <Pelicula year={2010} type="movie"/>
            <Pie_de_pagina />
        </div>
    )
}

export default Peliculas
