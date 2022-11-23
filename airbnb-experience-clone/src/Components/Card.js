import React from "react";
import photogrid from "../Images/photo-grid.png";
export default function Card() {
    return (
     
            <div class="card" style={{"width": "18rem"}}>
                <img class="card-img-top" src={photogrid} alt="Card cap" />
                <div class="card-body">
                <p class="card-text"><i class="fa-solid fa-star"></i> 5.0 (6)</p> 
                    <h5 class="card-title">Life  lessons with Katie Zaferes</h5>
                    <p class="card-text"><span className="font-weight-bold">$136</span>/Person</p>
                    
                </div>
            </div>
        
    );
}