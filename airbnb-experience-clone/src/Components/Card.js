import React from "react";
import kz from "../Images/kz.jpg";
export default function Card() {
    return (
     
            <div class="card" style={{"width": "18rem"}}>
                <img class="card-img-top" src={kz} alt="Card cap" />
                <div class="card-body">
                    <p class="card-text"><i  className="fa fa-star checked"></i> 5.0 (6) &#x2022; USA</p> 
                    <h5 class="card-title">Life  lessons with Katie Zaferes</h5>
                    <p class="card-text"><b>$136</b>/Person</p>
                </div>
            </div>
        
    );
}