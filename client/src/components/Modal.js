import React, { useState } from "react";

function Modal({item,cerrar}){
console.log(item)
    return(
        <div className="fondo_popup" onClick={()=>cerrar("")}>
        <div className="popup">
            <img className="caratula_popup" src={`${item.images["Poster Art"].url}`} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.releaseYear}</p>


        </div></div>
    )
}
export default Modal
