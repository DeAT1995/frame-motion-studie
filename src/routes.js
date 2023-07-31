import React from "react";
import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";


function RoutesApp(){
    const location = useLocation()
    return(
        <AnimatePresence>
            <Navbar/>
                <Routes location={location} key={location.pathname}>
                     <Route path="/Home" element={<Home/>} exact />
                     <Route path="/Contact"  element={<Contact/>} exact/>
                </Routes>
        </AnimatePresence>
    )
};

export default RoutesApp;