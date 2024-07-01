import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Navbar from "../Pages/Navbar";
import Home1 from "../Pages/Home1";


export default function Router(){
    return (
        <Routes>
            <Route path="" element={<Home1/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/navbar" element={<Navbar/>} />
        </Routes>
    )
}