import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import accubits from "../../assets/images/collabs/accubits.svg";
import bugsee from "../../assets/images/collabs/bugsee.svg";
import codingblocks from "../../assets/images/collabs/codingblocks.svg";
import datascience from "../../assets/images/collabs/datascience.svg";
import deeplearningdemystified from "../../assets/images/collabs/deeplearningdemystified.svg";
import flipkart from "../../assets/images/collabs/flipkart.svg";
import github from "../../assets/images/collabs/github.svg";
import greatlearning from "../../assets/images/collabs/greatlearning.svg";
import intel from "../../assets/images/collabs/intel.svg";
import jetbrains from "../../assets/images/collabs/jetbrains.svg";
import jio from "../../assets/images/collabs/jio.svg";
import sketch from "../../assets/images/collabs/sketch.svg";
import stickermule from "../../assets/images/collabs/stickermule.svg";
import swiggy from "../../assets/images/collabs/swiggy.svg";
import taskade from "../../assets/images/collabs/taskade.svg";
import thesouledstore from "../../assets/images/collabs/thesouledstore.svg";
import uber from "../../assets/images/collabs/uber.svg";

import "./Collaborators.css";

const Collaborators = () => {
  return (
    <Container className="Collaborators__container" fluid>
      <Row className="Collaborators__row">
        <Col
          className="Collaborators__collaborator--square"
          lg={2}
          md={3}
          sm={4}
          xs={6}
        >
          <img src={accubits} alt="Accubits" />
        </Col>
        <Col
          className="Collaborators__collaborator--square"
          lg={2}
          md={3}
          sm={4}
          xs={6}
        >
          <img src={bugsee} alt="Bugsee" />
        </Col>
        <Col
          className="Collaborators__collaborator--rect"
          lg={2}
          md={3}
          sm={4}
          xs={6}
        >
          <img src={codingblocks} alt="Coding Blocks" />
        </Col>
        <Col
          className="Collaborators__collaborator--rect"
          lg={2}
          md={3}
          sm={4}
          xs={6}
        >
          <img src={datascience} alt="datascience.com" />
        </Col>
        <Col
          className="Collaborators__collaborator--rect"
          lg={2}
          md={3}
          sm={4}
          xs={6}
        >
          <img src={deeplearningdemystified} alt="Deep Learning Demystified" />
        </Col>
        <Col
          className="Collaborators__collaborator--rect"
          lg={2}
          md={3}
          sm={4}
          xs={6}
        >
          <img src={flipkart} alt="Flipkart" />
        </Col>
      </Row>
      <Row className="Collaborators__row">
        <Col
          className="Collaborators__collaborator--rect"
          lg={2}
          md={3}
          sm={4}
          xs={6}
        >
          <img src={stickermule} alt="StickerMule" />
        </Col>
        <Col
          className="Collaborators__collaborator--square"
          lg={2}
          md={3}
          sm={4}
          xs={6}
        >
          <img src={taskade} alt="Taskade" />
        </Col>
        <Col
          className="Collaborators__collaborator--rect"
          lg={2}
          md={3}
          sm={4}
          xs={6}
        >
          <img src={uber} alt="Uber" />
        </Col>
        <Col
          className="Collaborators__collaborator--square"
          lg={2}
          md={3}
          sm={4}
          xs={6}
        >
          <img src={sketch} alt="Sketch" />
        </Col>
        <Col
          className="Collaborators__collaborator--square"
          lg={2}
          md={3}
          sm={4}
          xs={6}
        >
          <img src={swiggy} alt="Swiggy" />
        </Col>
        <Col
          className="Collaborators__collaborator--rect"
          lg={2}
          md={3}
          sm={4}
          xs={6}
        >
          <img src={thesouledstore} alt="The Souled Store" />
        </Col>
      </Row>
      <Row className="Collaborators__row">
        <Col
          className="Collaborators__collaborator--square"
          lg={2}
          md={3}
          sm={4}
          xs={6}
        >
          <img src={github} alt="GitHub" />
        </Col>
        <Col
          className="Collaborators__collaborator--rect"
          lg={2}
          md={3}
          sm={4}
          xs={6}
        >
          <img src={greatlearning} alt="Great Learning" />
        </Col>
        <Col
          className="Collaborators__collaborator--rect"
          lg={2}
          md={3}
          sm={4}
          xs={6}
        >
          <img src={intel} alt="Intel" />
        </Col>
        <Col
          className="Collaborators__collaborator--rect"
          lg={2}
          md={3}
          sm={4}
          xs={6}
        >
          <img src={jetbrains} alt="JetBrains" />
        </Col>
        <Col
          className="Collaborators__collaborator--square"
          lg={2}
          md={3}
          sm={4}
          xs={6}
          s
        >
          <img src={jio} alt="Jio" />
        </Col>
      </Row>
    </Container>
  );
};

export default Collaborators;
