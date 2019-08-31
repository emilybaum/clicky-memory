import React, { Component } from "react";
import ImgCard from "./ImgCard/ImgCard";
import NavBar from "./NavBar/NavBar";
import imageDetails from "../utilities/imageDetails";

class GamePlayContainer extends Component {
    state = {
        guessed: []
    };

    componentDidMount() {
        // this.loadimages("something");
    }

    loadImages = (imageDetails) => {
        console.log(imageDetails)
    }

    handleGuess = event => {
        event.preventDefault();
        // what happens when an image is clicked
    }
}

export default GamePlayContainer