import React from "react";
import Navbar from "./navbar";
import Login from "./login";
import Register from "./Register";
import Home from "./Home";


import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>

        </BrowserRouter>
    );
}