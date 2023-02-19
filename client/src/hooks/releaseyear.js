import React, { useState } from "react";

export default function useReleaseYear() {
    const [releaseyear, setReleaseyear] = useState("")
    const escoger = (info, año, tipo) => {
        
       
        const filtrar=info.entries.filter( (filtrado) => filtrado.releaseYear > año && filtrado.programType===tipo)
        filtrar.sort((a, b) => {
         const tituloA = a.title.toLowerCase();
         const tituloB = b.title.toLowerCase();
         if (tituloA < tituloB) {
            return -1;
         } else if (tituloA > tituloB) {
             return 1;//poner resta en el return
         } else {
            return 0;
         }
     })
       setReleaseyear(filtrar)
    }
   
    
    
    return { releaseyear, escoger }
} 




   