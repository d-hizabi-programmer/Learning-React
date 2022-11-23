import React from "react";
import photogrid from "../Images/photo-grid.png";

export default function Navbar(){
    return (
        <>
        <section className="hero d-flex flex-column justify-content-center align-items-center">
            <img className="hero--image img-fluid" src={photogrid} alt="grid" />
            <h1 className="hero--heading align-self-sm-start mt-3  mx-5 align-self-center">Online Experiences</h1> 
            <p className="hero--text align-self-sm-start mt-2 align-self-center  mx-5 text-wrap" >
                Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
            </p>
        </section>
        </>
    );
}