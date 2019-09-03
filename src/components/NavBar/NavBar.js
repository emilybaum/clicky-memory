import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        // < !--As a heading-- >
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-between fixed-top">
            <span className="navbar-brand mb-0 h1">Save the species</span>
            <div className="text-white d-flex justify-content-end">
                <div className="pr-2">Your Points: <span className="mr-2">{props.yourScore}</span> | </div>
                <div className="ml-1">High Score: <span>{props.highScore}</span></div>
            </div>
        </nav>
    )
}

export default NavBar;


