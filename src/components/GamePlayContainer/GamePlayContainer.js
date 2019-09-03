import React, { Component } from "react";
import ImgCard from "../ImgCard/ImgCard";
import imageDetails from "../ImgCard/imageDetails";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"
import Instructions from "../Instructions/Instructions";

class GamePlayContainer extends Component {
    state = {  
        images: imageDetails.allImages, 
        guessed: [],
        yourScore: 0,
        highScore: 5,
        theme: ""
    };

    componentDidMount() {
        this.loadImages(this.state.images);
    }


    loadImages = images => {
        // add in the option to change the theme?
        // randomize the images displayed
        console.log(images)
        let arr = images.sort(() => Math.random() - 0.5);
        return arr
    }


    handleGuess = (guess) => {
        console.log("clicked")
        const images = this.state.images;
        const imageClicked = images.filter(images => images.id === guess)
        console.log(imageClicked)

        console.log(guess)

        this.setState({yourScore: + 1})
        this.loadImages(this.state.images);
        // what happens when an image is clicked
        // check if the id guessed is in this.state.guessed
        // if not, +1 for score
        // if yes, call gameOver and call loadImages
        // push the id for any pic guessed to this.state.guessed

    }

    checkCorrect = () => {

    }

   

    gameOver = event => {
        // what happens when the game is over
        // call loadImages to start new game
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
                        {this.state.images.map(({ image, altTxt, id }) => (
                        <ImgCard 
                            key={id}
                            id={id}
                            src={image} 
                            altTxt={altTxt}
                            handleGuess={this.handleGuess}
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