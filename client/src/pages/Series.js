import React, { useState, useEffect } from "react";
import Encabezado from "../components/Encabezado"
import Pie_de_pagina from "../components/Pie_de_pagina"
import Serie from "../components/Serie";
function Series() {

    return (
        <div>
            <Encabezado />
            <Serie/>
            <Pie_de_pagina />
        </div>
    )
}

export default Series
