
import React, { useState } from "react";

 export default function useFetch() {
    const [fetchData, updateData] = useState({
        pending: false,
        data: undefined,
        error: undefined,
    });
    const execute = (info) => {
        updateData({
            pending: true,
            data: undefined,
            error: undefined
        })
       
        fetch("../../sample.json")
            .then((res) => res.json())
            .then((res) => {
                let resultado=[]
                for (let i = 0; i < res.total; i++) {
                    if (res.entries[i].releaseYear >= info.releaseYear && res.entries[i].programType == info.programType) {
                       if (resultado.length<20){ resultado.push(res.entries[i])}
                    }
                }
                resultado.sort((a,b)=>{
                    const tituloA = a.title.toLowerCase();
                    const tituloB = b.title.toLowerCase();
                    if (tituloA < tituloB){
                        return -1;
                    }else if(tituloA > tituloB){
                        return 1;
                    }else{
                        return 0;
                    }


                })

                updateData({
                    pending:false,
                    data: resultado,
                    error:undefined,
                });
            })
            .catch(error => {
                updateData({
                    pending: false,
                    data: undefined,
                    error: error.message,
                })
            })
    };
    return {...fetchData, execute}
}