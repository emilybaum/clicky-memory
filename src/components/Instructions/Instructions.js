import React from "react";
import "./style.css";

function Instructions() {
    return (
        // < !--As a heading-- >
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Clicky memory</h1>
                <p class="lead">Save all 16 species, but be sure not to select the same one twice. If you click the same animal twice, you lose.</p>
            </div>
        </div>
    )
}

export default Instructions;