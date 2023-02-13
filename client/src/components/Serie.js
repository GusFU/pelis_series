import React, { useState, useEffect } from "react";
import useFetch from "../hooks/fetch";
import Modal from "./Modal";
function Serie() {
    const { data, pending, error, execute } = useFetch()
    const [dataActive, setDataActive] = useState("")
    const [active, setActive] = useState(true);
    const info = {
        programType: "series",
        releaseYear: 2010
    }

    useEffect(() => {
        execute(info)
    }, []);
    useEffect(() => {
        if (data) {
        }
    }, [data]);




    return (
        <div className="contenido_pelis">
            {pending ? <p>loading...</p> : error ? <p>Oooops error</p> : !data ? "" : (data).map(item => {
                return (
                    <div className="peli-serie" onClick={() => { setDataActive(item) }}>

                        <img className="caratula" src={`${item.images["Poster Art"].url}`} />
                        <p className="popular_title">{item.title}</p>
                    </div>
                )
            })}
            {!dataActive ? "" :
               <Modal item={dataActive} cerrar={setDataActive}  />}

        </div>
    )
}

export default Serie
