import React from "react";
// import kz from "../Images/kz.jpg";
export default function Card(props) {
    // console.log(props);
    // let imgPath="../../public/Images/"+props.img;
    return (
        
            <div className="card" style={{"width": "18rem"}}>
                {props.openSpots===0 &&
                <div className="card-badge">SOLD OUT</div>}
                <img className="card-img-top" src={"/Images/"+props.img} alt="Card cap" />
                <div className="card-body">
                    <p className="card-text"><i  className="fa fa-star checked"></i> {props.rating} ({props.reviewCount}) &#x2022; {props.location}</p> 
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"><b>${props.price}</b>/Person</p>
                </div>
            </div>
        
    );
}