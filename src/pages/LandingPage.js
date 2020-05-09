import React from 'react';
import NavBarComponent from '../components/NavBar/NavBar';
import PaletteTitle from '../components/PaletteTitle/PaletteTitle';
import Title from '../components/Title/Title';
import Form from '../components/Form/Form';

import down from '../assets/images/down.svg';
import solveProblems from '../assets/images/solveProblems.svg';

import './LandingPage.css';
import ArtWorkCarousel from '../components/ArtWorkCarousel/ArtWorkCarousel';
import Contact from '../components/Contact/Contact';
import ArtWorkSlider from '../components/ArtWorkSlider/ArtWorkSlider';
import RegistrationText from '../components/RegistrationText/RegistrationText';

const LandingPage = () => {
    return(
        <div>
            {/* start */}
            <div id="start">
                <NavBarComponent />
                <div className="paletteTitle">
                    <PaletteTitle />
                    <img src={down} alt="down" className="downArrow" />
                </div>
            </div>

            <div id="info">

            </div>

            
            {/* solve real problems */}
            <div className="section" id="info">
                <div className="container">
                    <Title title={'Time to solve some real problems'} />
                    <img src={solveProblems} alt='solveProblems' className="solveProblemImage" />
                    <p className="content-para">
                        Palette ‘20 is the 3rd edition of the prestigious design-a-thon conducted yearly by IEEE VIT.
                        While the last two editions witnessed amazing graphic designs and web designs, this year it is a 36 
                        hour long design hack based entirely on the concepts of UI & UX. We strongly believe in the saying 
                        “Design is not how it looks, design is how it works”, we will be looking at not just the output or 
                        presentation but the design process and steps involved like research, building user personas, a design 
                        system, wireframing, branding and prototypying. Once the event goes live, the participants will be given 
                        a set of randomly generated UX problems and they will be continuing with one of their choice.
                    </p>
                </div>
            </div>

            <div id="register">

            </div>

            <div className="section" id="register">
                <div className="container">
                    <RegistrationText />
                </div>
            </div>
            
            <div id="history">

            </div>

            {/* artworks from previous */}
            <div className="section" id="history">
                <div className="container">
                    <Title title={'Highlights from Palette ‘19'} />
                    {/* <ArtWorkCarousel /> */}
                    <ArtWorkSlider />
                    <p className="content-para">
                    Palette ‘19 was the 2nd edition of the design-a-thon conducted yearly by IEEE VIT. It was an 
                    amazing workshop filled with exciting talks by Saptarshi Prakash who is a Product Design Manager 
                    at Swiggy and Rahul Chakraborty who was a Product Designer at Flipkart and currently a Senior 
                    Product Designer at Swiggy as well. Along with the talks, we had the 6-hour journey of students 
                    competing to work on beautiful designs to win the prize. With our exceptional problem statements, 
                    the participants were in a high-pressure situation but with the guidance and mentorship from our
                     speakers as well as our experienced seniors, the outcome was incredible. 
                    </p>
                </div>
            </div>

            <footer className="endSection" id="contact">
                    <Title title={'Hit us up, we’ll get back shortly'} />
                    <Contact />
            </footer>
        </div>
    )
}

export default LandingPage;