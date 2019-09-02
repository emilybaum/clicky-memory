import React, { Component } from "react";
import ImgCard from "../ImgCard/ImgCard";
import imageDetails from "../ImgCard/imageDetails";
// import NavBar from "../NavBar/NavBar";
// import imageDetails from "../../utilities/imageDetails.js"

class GamePlayContainer extends Component {
    state = {   
        guessed: []
    };

    componentDidMount() {
        // this.loadimages("something");
    }


    loadImages = imageDetails => {


        return imageDetails

    }


    handleGuess = event => {
        event.preventDefault();
        // what happens when an image is clicked
    }


    render() {
        return (
            <div>
                <div>
                    {imageDetails.allImages.map(({ image, altText, id }) => (
                        <ImgCard 
                            key={id}
                            src={image} 
                            alt={altText}/>
                    ))}
                    
                </div>
            </div>
        )
    }


}

export default GamePlayContainer