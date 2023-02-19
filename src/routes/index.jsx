import React from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from "./Home";
import Project from './project'
import Contractus from './contractus'
import Aboutus from './aboutus'
import Story from './story'
import Navabar from "../components/Navabar";
export default function index(){
    return (
        <>
        <BrowserRouter>
        <Navabar />
            <Routes>
            
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/about-us" element={<Aboutus />} />
                <Route path="/contractus" element={<Contractus />} />
                <Route path="/story" element={<Story />} />
            </Routes>
        </BrowserRouter></>
    )
}