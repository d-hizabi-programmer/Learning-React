import React from "react";
// import kz from "../Images/kz.jpg";
export default function Card(props) {
    console.log(props);
    let imgPath="../Images/"+props.img;
    return (
        
            <div className="card" style={{"width": "18rem"}}>
                <img className="card-img-top" src={require("../Images/"+props.img)} alt="Card cap" />
                <div className="card-body">
                    <p className="card-text"><i  className="fa fa-star checked"></i> {props.rating} ({props.reviewCount}) &#x2022; {props.country}</p> 
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"><b>${props.price}</b>/Person</p>
                </div>
            </div>
        
    );
}