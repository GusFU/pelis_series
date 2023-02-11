import React from "react";
import Encabezado from "../components/Encabezado"
import Contenido from "../components/Contenido";
import Pie_de_pagina from "../components/Pie_de_pagina"
function Inicio (){

    return (
        <div className="inicio">
            <Encabezado/>
            <Contenido/>
            <Pie_de_pagina/>
        </div>
    )
}

export default Inicio