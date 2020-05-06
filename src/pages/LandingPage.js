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

const LandingPage = () => {
    return(
        <div>
            {/* start */}
            <div>
                <NavBarComponent />
                <div className="paletteTitle">
                    <PaletteTitle />
                    <img src={down} alt="down" className="downArrow" />
                </div>
            </div>
            
            {/* solve real problems */}
            <div className="section">
                <div className="container">
                    <Title title={'Time to solve some real problems'} />
                    <img src={solveProblems} alt='solveProblems' className="solveProblemImage" />
                    <p>
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

            {/* artworks from previous */}
            <div className="section">
                <div className="container">
                    <Title title={'Artworks from Palette ‘18 & ‘19'} />
                    <ArtWorkCarousel />
                    <p>
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

            <div className="section">
                <div className="container">
                    <Title title={'Buckle up! Something big on your way!'} />
                    <p className="regText">
                        Registration closes in 10d 20h 8m 23s, which is 4 hours after inauguration of the event.
                    </p>
                    <Form />
                    <p>Have an account? Log in </p>
                </div>
            </div>

            <div className="endSection">
                    <Title title={'Hit us up, we’ll get back shortly'} />
                    <Contact />
            </div>
        </div>
    )
}

export default LandingPage;