import React from "react";
import "./style.css";

function Instructions() {
    return (

        <div>
            <div className="jumbotron jumbotron-fluid mt-5">
                <div className="container">
                    <h1 className="display-3">Clicky memory</h1>
                    <p className="lead">Save all 16 species, but be sure not to select the same one twice. If you click the same animal twice, you lose.</p>
                </div>
            </div>
        </div>
    )
}


export default Instructions;