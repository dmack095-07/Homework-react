import React from "react";
import selfie from "../images/selfie.jpg";
import "../styles/Card.css";
import Container from "./Container.js";
import Row from "./Row.js";
import { Col } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";



const styles = {
  sectionStyles: {
    backgound:"white"
  }
};

function Card() {
  return (
    <section style={styles.sectionStyles} className="section">
      <Container>
        <Row>
          <p>A Texas implant who came to North Carolina in 2019. I am orginally from Norfolk, Virgina. We are a military family. Being in the military gave our family the opportunity to travel around the United States. We lived in Maine, Nevada, and Tennessee to name a few places. I believe we will end up back in Texas, one day.
          </p>
          <p>Throughout this journey, my love for technology grew over the years. My path to becoming a Full-Stack developer became a reality once Covid-19 began. This pandemic pushed me further into the world of technology.</p>
          <p>When I am not coding, I enjoy being outdoors playing basketball, tennis and walking.</p>
        </Row>
        <Row>
          <Col>
            <img src={selfie} alt="selfie-image" />
           <a href={"https://www.facebook.com/dianna.mack1"}><FaFacebook className="icon" style={{ 'color': "Darkblue" }}/><br></br></a>
           <a href={"https://www.instagram.com/mack_anna_/"}><ImInstagram className="icon" style={{ 'color': "Black" }}/><br></br></a>
           <a href={"https://www.instagram.com/mack_anna_/"}><FaLinkedin className="icon" style={{ 'color': "Blue" }}/></a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Card;

