import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./assets/pages/Inicio/Inicio.jsx";
import Game from "./assets/pages/Game/Game.jsx";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Inicio />} />
                <Route path="/juego" element={ <Game />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;