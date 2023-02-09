import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Inicio"


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="routes">
            <Routes>
                <Route path="/" element={<Inicio />} />
                
            </Routes>
        </div>
        );
    }
}
export default Main;
