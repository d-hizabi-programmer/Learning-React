import React from "react";
import '../App.css';
import me from "../images/me.jpeg";

export default function Info(){
    return (
        <div className="info-container">
            <img className="info-image" src={me}  title="Saniya Memon" alt="Saniya Memon" />
            <div className="info-text">
            <h1>Saniya Memon</h1>
            <h3 className="text-warning">Front-end Developer</h3>
            <div className="info-buttons">
            <a class="btn btn-warning" href="mailto:saniyamemon7862@gmail.com" role="button"><i class="fa fa-envelope"></i> Mail</a>

            <a class="btn btn-primary" href="https://www.linkedin.com/in/saniyamemon/" role="button"><i class="fa fa-linkedin-square"></i> LinkedIn</a>
            <a class="btn btn-danger" href="https://github.com/saniyamemon2702" role="button"><i class="fa fa-github" ></i> GitHub</a>

 </div>
        </div>
        </div>
    );
}