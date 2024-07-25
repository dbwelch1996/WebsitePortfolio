import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col md="auto">
            <h5>Contact</h5>
            <p>Email: welch.dylan1996@gmail.com</p>
            <p>Phone: (707) 330-2848</p>
          </Col>
          <Col md="auto">
  <h5>Social Media</h5>
  <a
    href="https://www.linkedin.com/in/dylan-welch-929b86163/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={navIcon1} alt="LinkedIn Profile" style={{ width: '24px', height: '24px', marginRight:'20px' }} />
  </a>
  <a
    href="https://github.com/dbwelch1996"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={navIcon2} alt="GitHub Profile" style={{ width: '24px', height: '24px'}} />
  </a>
</Col>
          <Col md="auto">
            <h5>Quick Links</h5>
            <a href="#home">Home</a>
            <br />
            <a href="#skills">Skills</a>
            <br />
            <a href="#project">Projects</a>
            <br />
            <a href="#contact">Contact</a>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p>© 2024 Dylan Welch. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;