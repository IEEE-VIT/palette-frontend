import React, { Component } from "react";
import NavBarComponent from "../components/NavBar/NavBar";
import PaletteTitle from "../components/PaletteTitle/PaletteTitle";
import Title from "../components/Title/Title";
import Fade from "react-reveal/Fade";
import solveProblems from "../assets/images/solveProblems.svg";
import Contact from "../components/Contact/Contact";
import ArtWorkSlider from "../components/ArtWorkSlider/ArtWorkSlider";
import RegistrationText from "../components/RegistrationText/RegistrationText";
import Collaborators from "../components/Collaborators/Collaborators";
import LoadingGif from "../assets/gif/loading.gif";
import AuthModal from "../components/AuthModal/AuthModal.js";
/*import Timeline from "../assets/Timeline.pdf";
import DeepLearningDemystified from "../assets/images/Deep-Learning-Demystified-Logo.svg";*/
import backgroundVideo from "../assets/gif/desktop-bg.mp4";
import mobileBackgroundVideo from "../assets/gif/mob-bg.mp4";
/*import LandingPageLoginForm from "../components/LandingPageForm/LandingPageLoginForm";
import LandingPageForm from "../components/LandingPageForm/LandingPageForm";*/
import windowSize from "react-window-size";
import Speakers from "../components/Speakers/Speakers";
import PropTypes from "prop-types";

import "./LandingPage.css";

//since muted is not changed in dom in react - safari issues
const VideoWorkaround = ({ src, id }) => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
      <video
        muted
        autoplay
        playsinline
        src="${src}"
        id="${id}"
      />
    `,
    }}
  />
);

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isOpen: false,
      whichModal: "",
      mainPageLogInClick: false,
    };
  }

  forLoginModal = () => {
    this.setState({
      whichModal: "login",
      isOpen: true,
    });
  };

  forRegisterModel = () => {
    this.setState({
      whichModal: "register",
      isOpen: true,
    });
  };

  stopLoading = () => {
    this.setState({
      isLoading: false,
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.stopLoading();
    }, 3000);
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  mainPageLogInOnClick = () => {
    this.setState({
      mainPageLogInClick: true,
    });
  };

  mainPageLogInOnClickReverse = () => {
    this.setState({
      mainPageLogInClick: false,
    });
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="loading-screen">
          <img src={LoadingGif} alt="loading..." />
        </div>
      );
    }

    return (
      <div>
        {/* start */}
        {this.props.windowWidth > 575 ? (
          <div id="start">
            <VideoWorkaround src={backgroundVideo} id="videoBG" />
            <NavBarComponent
              forLoginModal={this.forLoginModal}
              forRegisterModel={this.forRegisterModel}
            />
            <div className="paletteTitle">
              <PaletteTitle />
            </div>
          </div>
        ) : (
          <div id="start">
            <VideoWorkaround src={mobileBackgroundVideo} id="MobilevideoBG" />
            <NavBarComponent
              forLoginModal={this.forLoginModal}
              forRegisterModel={this.forRegisterModel}
            />
            <div className="paletteTitle">
              <PaletteTitle />
            </div>
          </div>
        )}

        <div style={{ backgroundColor: "white" }} id="info">
          <div id="info"></div>

          {/* solve real problems */}
          <Fade bottom>
            <div className="section adding-margin" id="info">
              <div className="container">
                <Title title={"Time to solve some real problems"} />
                <img
                  src={solveProblems}
                  alt="solveProblems"
                  className="solveProblemImage"
                />
                <p className="content-para">
                  <strong>Palette ‘21</strong> is the 4th edition of the
                  prestigious design-a-thon conducted yearly by IEEE VIT. While
                  the last three editions witnessed amazing graphic designs and
                  web designs, this year it is a{" "}
                  <strong>48 hour long design hack</strong> based entirely on
                  the concepts of UI & UX. We strongly believe in the saying
                  <strong>
                    {" "}
                    “Design is not how it looks, design is how it works”
                  </strong>
                  , we will be looking at not just the output or presentation
                  but the design process and steps involved like research,
                  building user personas, a design system, wireframing, branding
                  and prototypying. Once the event goes live, the participants
                  will be given a set of{" "}
                  <strong> randomly generated UX problems </strong> and they
                  will be continuing with one of their choice.
                </p>
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div>
              <Speakers />
            </div>
          </Fade>

          <Fade bottom>
            {/* artworks from previous */}
            <div className="section" id="history">
              <div className="container-2">
                <Title title={"Highlights from Previous Editions of Palette"} />
                <ArtWorkSlider />
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div className="container">
              <Title title={"Past Collaborators"} />
              <Collaborators />
            </div>
          </Fade>

          <div className="section" id="register">
            <div className="container">
              <Fade bottom>
                <Title title={"Winners of Palette '20"} />
              </Fade>
              <Fade bottom>
                <RegistrationText />
              </Fade>
            </div>
          </div>

          <footer className="endSection" id="contact">
            <Title title={"Hit us up, we’ll get back shortly"} />
            <Contact />
          </footer>
        </div>
        <AuthModal
          isOpen={this.state.isOpen}
          whichModal={this.state.whichModal}
          closeModal={this.closeModal}
          forLoginModal={this.forLoginModal}
          forRegisterModel={this.forRegisterModel}
        />
      </div>
    );
  }
}

LandingPage.propTypes = {
  windowWidth: PropTypes.number,
};

VideoWorkaround.propTypes = {
  src: PropTypes.node,
  id: PropTypes.number,
};

export default windowSize(LandingPage);
