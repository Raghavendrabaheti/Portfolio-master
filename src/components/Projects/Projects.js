import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quiz from "../../Assets/Projects/quizdsa.png";
import MultiGame from "../../Assets/Projects/MultiGame.png";
// import name from "../../Assets/Projects/name.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import captcha from "../../Assets/Projects/sih24.jpeg";
import logithon from "../../Assets/Projects/logithon.jpeg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logithon}
              isBlog={false}
              title="Multi-Modal Cross-Border Route Selector"
              description= "A smart logistics system optimizing cross-border cargo shipping routes using multi-modal transportation (land, air, sea). Built with Flask, MySQL, and Kubernetes for scalability, it leverages Dijkstra’s Algorithm with NetworkX to determine the most cost-effective and time-efficient routes. Developed in a cross-functional team, integrating frontend, backend, and database for seamless user interaction."
              ghLink="https://github.com/Tech-Transit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={captcha}
              isBlog={false}
              title="ML-Based CAPTCHA Refinement System"
              description="An ML-powered CAPTCHA system that eliminates traditional verification methods by using passive behavior checks such as face detection, honeypot forms, and mouse/keyboard tracking to assess user legitimacy. AI/ML models classify interactions as human or bot, blocking suspicious IPs and protecting against DDoS attacks, enhancing both security and user experience."
              ghLink="https://github.com/Raghavendrabaheti/SIH-2024"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="DSA Quiz"
              description="The DSA (Data Structures and Algorithms) Quiz is a web application built with React, designed to help users test and improve their knowledge of data structures and algorithms. The app allows users to choose a difficulty level, answer multiple-choice questions, and receive a final score. It is an interactive way to evaluate and strengthen your DSA skills."
              ghLink="https://github.com/Raghavendrabaheti/React-Quiz"
              demoLink="https://quizdsa.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MultiGame}
              isBlog={false}
              title="Fun Games"
              description="Fun Games is a collection of interactive and enjoyable web-based games built with React. It features a variety of casual games like Tic Tac Toe, quizzes, and other engaging challenges. Players can enjoy a fun-filled experience while testing their skills and having a great time with friends or solo."
              ghLink="https://github.com/raghavendrabaheti/Fun_Games"
              demoLink="https://funf.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="The Tic Tac Toe game is a simple, interactive web application built with React. Players can challenge each other in a classic game of Tic Tac Toe, taking turns to mark their moves on a 3x3 grid. The game determines the winner or declares a draw once the board is filled, offering a fun and engaging experience."
              ghLink="https://github.com/raghavendrabaheti/Fun_Games"
              demoLink="https://funtt.netlify.app/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={name}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
