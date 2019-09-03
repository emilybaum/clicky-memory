import React, { Component } from "react";
import ImgCard from "../ImgCard/ImgCard";
import imageDetails from "../ImgCard/imageDetails";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"
import Instructions from "../Instructions/Instructions";

// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class GamePlayContainer extends Component {
    state = {  
        images: imageDetails.allImages, 
        guessed: [],
        yourScore: 0,
        highScore: 0,
        theme: "default",
        modalIsOpen: false,
        response: ""
    };

    // -----------------------------
    constructor() {
        super();

        // this.state = {
        //     modalIsOpen: false
        // };

        this.openModal = this.openModal.bind(this);
        // this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    // afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     this.subtitle.style.color = '#f00';
    // }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    // ---------------------

    componentDidMount() {
        this.loadImages(this.state.images);
    }


    // randomize the images array
    loadImages = images => {
        let arr = images.sort(() => Math.random() - 0.5);
        this.setState({ images: arr})
        return arr
    }

    // check to see if the guess was correct/incorrect
    handleGuess = (guess) => {
        // what happens when an image is clicked
        // check if the id guessed is in this.state.guessed
        // if not, +1 for score
        // if yes, call gameOver and call loadImages
        // push the id for any pic guessed to this.state.guessed

        console.log("clicked")
        const alreadyGuessed = this.state.guessed
        const x = alreadyGuessed.includes(guess) 
        
        if (!x) {
            this.correct(guess);
            // this.setState({ modalIsOpen: true })
        } 
        else {
            this.incorrect();
        } 

        this.loadImages(this.state.images);

    }

    correct = (guess) => {
        console.log("correct")

        // increment yourScore
        this.setState({ yourScore: this.state.yourScore + 1, response: "That's right!" })

        // push the guessed id into the state.guessed
        this.state.guessed.push(guess)
        console.log(this.state.guessed)

        // start a new game by loading the images again
        this.loadImages(this.state.images);
    }

    incorrect = () => {
        console.log("wrong");
        this.setState({ response: "Bummer - that's wrong" });
        if (this.state.yourScore > this.state.highScore) {
            this.setState({ highScore: this.state.yourScore });
            this.openModal();
        }
        this.gameOver()
    }


    gameOver = () => {
        // reset the score to 0
        this.setState({ yourScore: 0, guessed: [], response: ""  })

        // start a new game by loading the images again
        this.loadImages(this.state.images);
    }



    render() {
        return (
            <div>
                <NavBar 
                    yourScore={this.state.yourScore}
                    highScore={this.state.highScore}
                    theme={this.state.theme}
                    response={this.state.response}
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

                <div>
                    <button onClick={this.openModal}>Open Modal</button>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        // onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={{
                            overlay: {
                                backgroundColor: 'papayawhip'
                            },
                            content: {
                                color: 'lightsteelblue'
                            }
                            
                        }}
                        contentLabel="Example Modal"
                        // appElement={el}
                    >
                        <div>
                            <h2 ref={subtitle => this.subtitle = subtitle}>Congrats! You got a new High Score!</h2>
                            <button onClick={this.closeModal}>Click to play again</button>
                        </div>
                    </Modal>
                </div>

            </div>
        )
    }
}

export default GamePlayContainer