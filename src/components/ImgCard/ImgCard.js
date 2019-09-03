import React from "react";
import "./style.css";

function ImgCard(props) {
    return (
        
            <div className="card">
            <img src={props.src} className="card-img-top" alt={props.altTxt} imgId={props.id} onClick={() => props.handleGuess(props.id)} />
            </div>
    
    )
} 

export default ImgCard;