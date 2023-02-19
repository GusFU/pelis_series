
import React, { useState } from "react";

 export default function useFetch() {
    const [fetchData, updateData] = useState({
        pending: false,
        data: undefined,
        error: undefined,
    });
    const execute = () => {
        updateData({
            pending: true,
            data: undefined,
            error: undefined
        })
       
        fetch("../../sample.json")
            .then((res) => res.json())
            .then((res) => {
               
            

                updateData({
                    pending:false,
                    data: res,
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