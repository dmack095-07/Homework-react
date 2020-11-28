import React from "react";
import Calendar from "../images/Calendar.png";
import Note from "../images/Note.png";
import Employee from "../images/employee.png";
import Team from "../images/Team.png";
import Project1 from "../images/Project1.png";
import Project2 from "../images/Project2.png";
import Container from "../components/Container";
import "../styles/Portfolio.css";
import { Row, Col } from "react-bootstrap";

const Portfolio = () => {
 return (
      <div>
        <h2 className="text-center">Homework Assignments/Projects</h2>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size ="">
              <h4><a className="github-links" href="https://github.com/dmack095-07/note-taker">Note-Taker</a></h4>
              <img src={Note} alt="Note-taker" class="github-pic"/>
            </Col>
            <Col size ="md-5">
              <p className="text"> Note-Taker is an application used to write, save, and delete notes. Express was introduced to create HTML and API routes.</p>
            </Col>
          </Row>
          <Row>
            <Col size ="">
              <h4><a className="github-links" href="https://github.com/dmack095-07/Calendar">Calendar</a></h4>
              <img src={Calendar} alt="Calendar" class="github-pic"/>
            </Col>
            <Col size ="md-5">
              <p className="text"> I created a functional calendar for the work week. Notes, todo-list can be created and saved for each timeblock. Each timeblock is represented by color: grey for past, red for present, and green for future. </p>
            </Col>
          </Row>
          <Row>
            <Col size ="md-4">
              <h4><a className="github-links" href="https://github.com/dmack095-07/employee-tracker">Employee-tracker</a></h4>
              <img src={Employee} alt="Employee-tracker"/>
            </Col>
            <Col size ="">
              <p className="text"> In Employee-tracker, I created an interface for users to find employees stored in MySQL database. In conjuction with MySQL, I also used Node and Inquirer.</p>
            </Col>
          </Row>
          <Row>
            <Col size ="md-4">
              <h4><a className="github-links"href ="https://github.com/dmack095-07/Team-Generator">Team Generator</a></h4>
              <img src={Team} alt="Team-Generator"/>
            </Col>
            <Col size ="">
            <p className="text">Team Generator is a command line application use to generate a team of interns, engineers, and managers. Once prompted, the user will follow a sequence of questions. Once all information is entered a HTML will be generated.</p>
            </Col>
          </Row>
          <Row>
            <Col size ="md-4">
              <h4><a className="github-links" href="https://gdickey273.github.io/whats-in-the-pantry/">What's in the Pantry!</a></h4>
              <img src={Project1} alt="Project1"/>
            </Col>
            <Col size ="md-8">
              <p className="text"> An application created to build recipes for ingredients found in one’s pantry.
            The application summarizes ingredients needed for recipes as well as a link to 
            Amazon for online shopping. The technologies used were two server-side APIs (Spoonacular and Edamam) 
            HTML5, CSS, SASS, and JavaScript.</p>
            </Col>
          </Row>
          <Row>
            <Col size ="md-4">
              <h4><a className="github-links" href="https://project2-team8-dmtv.herokuapp.com/">Huddle</a></h4>
              <img src={Project2} alt="Project2"/>
            </Col>
            <Col size ="">
              <p className="text"> Huddle is an application to connect with like-minded people in a group or within a university to jabber online. In closed group conversations, users can share local information such as nearby parks, hiking trails and other upcoming events that can be viewed and liked by other users.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

export default Portfolio;