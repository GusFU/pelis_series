import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Inicio"
import Series from "./Series"
import Peliculas from "./Peliculas"

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="routes">
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/series" element={<Series />} />
                <Route path="/peliculas" element={<Peliculas />} />
            </Routes>
        </div>
        );
    }
}
export default Main;
