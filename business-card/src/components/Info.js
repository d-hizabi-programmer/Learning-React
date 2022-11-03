import React from "react";
import '../App.css';
import me from "../images/me.jpeg";

export default function Info(){
    return (
        <div className="info-container">
            <img className="info-image" src={me}  title="Saniya Memon" alt="Saniya Memon" />
            <h1>Saniya Memon</h1>
            <h3>Web Developer</h3>
        </div>
    );
}