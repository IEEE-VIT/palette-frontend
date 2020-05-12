import React, { Component } from 'react';
import NavBarComponent from '../components/NavBar/NavBar';
import PaletteTitle from '../components/PaletteTitle/PaletteTitle';
import Title from '../components/Title/Title';
import Fade from 'react-reveal/Fade';

import down from '../assets/images/down.svg';
import solveProblems from '../assets/images/solveProblems.svg';

import './LandingPage.css';
import Contact from '../components/Contact/Contact';
import ArtWorkSlider from '../components/ArtWorkSlider/ArtWorkSlider';
import RegistrationText from '../components/RegistrationText/RegistrationText';
import Collaborators from '../components/Collaborators/Collaborators';
import Form from '../components/Form/Form';
import LoadingGif from '../assets/gif/loading.gif';

import backgroundVideo from '../assets/gif/desktop-bg.mp4';

class LandingPage extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false
        }
    }

    stopLoading = () => {
        this.setState({
            isLoading: false,
        })
    }

    componentDidMount() {
        setTimeout(()=> {
            this.stopLoading();
        }, 3000)
    }

    render() {
        const {isLoading} = this.state;

        if(isLoading) {
            return(
                <div className="loading-screen">
                    <img src={LoadingGif} alt="loading..." />
                </div>
            )
        }

        return(
            <div>
                {/* start */}
                <div id="start">
                    <video playsinline="playsInline" autoplay="autoPlay" muted="muted" id="videoBG">
                        <source src={backgroundVideo} type="video/mp4" />
                    </video>
                    <NavBarComponent />
                    <div className="paletteTitle">
                        <PaletteTitle />
                        <a href="#info"><img src={down} alt="down" className="downArrow" /></a>
                    </div>
                </div>

                <div style={{backgroundColor:"white"}} id="info">

                    <div id="info">
                    
                    </div>

                    
                    {/* solve real problems */}
                    <Fade bottom>
                        <div className="section adding-margin" id="info">
                            <div className="container">
                                <Title title={'Time to solve some real problems'} />
                                <img src={solveProblems} alt='solveProblems' className="solveProblemImage" />
                                <p className="content-para">
                                    <strong>Palette ‘20</strong> is the 3rd edition of the prestigious design-a-thon conducted yearly by IEEE VIT. While the last two editions witnessed amazing graphic designs and web designs, this year it is a <strong>36 hour long design hack</strong> based entirely on the concepts of UI & UX. We strongly believe in the saying 
                                    <strong> “Design is not how it looks, design is how it works”</strong>, we will be looking at not just the output or 
                                    presentation but the design process and steps involved like research, building user personas, a design 
                                    system, wireframing, branding and prototypying. Once the event goes live, the participants will be given 
                                    a set of <strong> randomly generated UX problems </strong> and they will be continuing with one of their choice.
                                </p>
                            </div>
                        </div>
                    </Fade>
                    
                    
                    <div id="history">

                    </div>

                    <Fade bottom>
                        {/* artworks from previous */}
                        <div className="section" id="history">
                            <div className="container-2">
                                <Title title={'Highlights from Palette ‘19'} />
                                <ArtWorkSlider />
                            </div>
                            <div className="container">
                                
                                {/* <ArtWorkCarousel /> */}
                                <p className="content-para para-space">
                                Palette ‘19 was an amazing event filled with exciting talks 
                                by <a href="https://www.linkedin.com/in/saptarshipr/" className="linkedin-link"><strong>Saptarshi Prakash</strong></a> and <a href="https://www.linkedin.com/in/hckmstrrahul/" className="linkedin-link"><strong>Rahul Chakraborty</strong></a> who 
                                are currently working at <strong>Swiggy</strong>. We had the 6-hour journey of students 
                                competing to work on compelling designs to win the prize. With our exceptional problem statements, 
                                the participants were in a high-pressure situation but with the guidance and mentorship from our
                                speakers as well as our experienced seniors, the outcome was <strong>incredible.</strong> 
                                </p>
                            </div>
                        </div>
                    </Fade>

                    <Fade bottom>
                        <div className="">
                            <div className="container">
                                <p className="content-para">
                                    <strong>Past collaborators</strong>
                                </p>
                                <Collaborators />
                            </div>
                        </div>
                    </Fade>

                    
                        <div className="section" id="register">
                            <div className="container">
                                <Fade bottom>
                                    <Title title={'Buckle up! Something big on your way!'} />
                                </Fade>
                                <Fade bottom>
                                    <RegistrationText />
                                    <Form />
                                </Fade>
                            </div>
                        </div>
                    

                    <footer className="endSection" id="contact">
                            <Title title={'Hit us up, we’ll get back shortly'} />
                            <Contact />
                    </footer>
                </div>
            </div>
        )
    }
}

export default LandingPage;