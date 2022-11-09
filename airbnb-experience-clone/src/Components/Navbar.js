import React from "react";
import logo from "../Images/airbnb_logo.png";

export default function Navbar(){
    return (
        <nav>
            <img src={logo} className="nav--logo" alt="Airbnb Logo"/>
        </nav>
    );
}