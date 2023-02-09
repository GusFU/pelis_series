import React from "react";
import Encabezado from "../components/Encabezado"
import Contenido from "../components/Contenido";

function Inicio (){

    return (
        <div className="inicio">
            <Encabezado/>
            <Contenido/>
        </div>
    )
}

export default Inicio