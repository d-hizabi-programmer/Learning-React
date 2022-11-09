import React from "react";
import photogrid from "../Images/photo-grid.png";

export default function Navbar(){
    return (
        <>
        <div className="hero">
            <img className="hero--image" src={photogrid} alt="Photo-grid" />
            <h1 className="hero--heading">Online Experiences</h1> 
            <p className="hero--text">
                Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
            </p>
        </div>
        </>
    );
}