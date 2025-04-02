import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Raghavendra Baheti </span>
            from <span className="purple"> Udaipur, Rajasthan.</span>
            <br />
            I’m currently pursuing Computer Science and Engineeringat Techno India NJR.
            <br />
            I specialize in DevOps, particularly in deployment and automation, along with Full-Stack Development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code. Build. Innovate. Repeat."{" "}
          </p>
          <footer className="blockquote-footer">Raghavendra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
