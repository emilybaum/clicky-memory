import React, { Component } from "react";
import ImgCard from "../ImgCard/ImgCard";
import imageDetails from "../ImgCard/imageDetails";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"
import Instructions from "../Instructions/Instructions";

class GamePlayContainer extends Component {
    state = {   
        guessed: [],
        yourScore: 0,
        highScore: 0,
        theme: ""
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

    handleEnd = event => {
        // what happens when the game is over
    }


    render() {
        return (
            <div>
                <NavBar 
                    yourScore={this.state.yourScore}
                    highScore={this.state.highScore}
                    theme={this.state.theme}
                    />

                <header>
                    <Instructions />
                </header>

                <div className="container">
                    <div className="d-flex flex-wrap justify-content-center">
                    {imageDetails.allImages.map(({ image, altTxt, id }) => (
                        <ImgCard 
                            key={id}
                            src={image} 
                            altTxt={altTxt}
                            />
                    ))} 
                    </div>
                </div>

                <Footer />

            </div>
        )
    }


}

export default GamePlayContainer