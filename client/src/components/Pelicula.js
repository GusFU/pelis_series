import React, { useState, useEffect } from "react";
import useFetch from "../hooks/fetch";
import useReleaseYear from "../hooks/releaseyear";
import Modal from "./Modal";
function Pelicula(props) {
    const { data, pending, error, execute } = useFetch()
    const [dataActive, setDataActive] = useState("")
    const {releaseyear, escoger}= useReleaseYear()
 

    useEffect(() => {
        execute()
    }, []);
  

    useEffect(() => {
       
        if (data){escoger(data, props.year, props.type)}
        
     }, [data]);

     useEffect(() => {
       // console.log(releaseyear)
     }, [releaseyear]);

    return (
        <div className="contenido_pelis">
             {pending ? <p>loading...</p> : ""}
             {error ? <p>Oooops error</p> : ""}
             {!releaseyear ? "" : (releaseyear).map((item, id) => {//separar terniario
                return (
                    <div className="peli-serie" key={id} onClick={() => { setDataActive(item) }}>

                        <img className="caratula" src={`${item.images["Poster Art"].url}`} />
                        <p className="popular_title">{item.title}</p>
                    </div>
                )
            })}
            {!dataActive ? "" :
                <Modal item={dataActive} cerrar={setDataActive}/>} 

        </div>
    )
}

export default Pelicula
