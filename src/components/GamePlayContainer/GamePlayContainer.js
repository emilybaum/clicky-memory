import React, { Component } from "react";
import ImgCard from "../ImgCard/ImgCard";
import NavBar from "../NavBar/NavBar";
import imageDetails from "../../utilities/imageDetails.js"

class GamePlayContainer extends Component {
    state = {   
        guessed: []
    };

    componentDidMount() {
        // this.loadimages("something");
    }


    loadImages = imageDetails => {

        let keys = Object.keys(imageDetails)
        let allImages = keys.map((x) => imageDetails[x])
        return allImages;

    }


    handleGuess = event => {
        event.preventDefault();
        // what happens when an image is clicked
    }


    render() {
        return (
            <div>
                <NavBar value={this.state}/>
                <ImgCard src={this.imageDetails[0].image} alt={this.imageDetails[0].alt}/>
            </div>
        )
    }


}

export default GamePlayContainer