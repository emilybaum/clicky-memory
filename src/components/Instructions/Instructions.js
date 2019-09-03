import React from "react";
import "./style.css";

function Instructions() {
    return (
        // < !--As a heading-- >
        <div className="jumbotron jumbotron-fluid mt-5">
            <div className="container">
                <h1 className="display-4">Clicky memory</h1>
                <p className="lead">Save all 16 species, but be sure not to select the same one twice. If you click the same animal twice, you lose.</p>
            </div>
        </div>
    )
}

export default Instructions;