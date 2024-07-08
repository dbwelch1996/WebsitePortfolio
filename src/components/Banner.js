import {useState, useEffect} from "react"
import { Container, Row, Col} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"


export const Banner = () => {
  
    return (
        <section className ="banner" id="home">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} xl={7}>
                <span className ="tagline">Hello! Welcome to my Portfolio</span>
                <h1>
                  {"Dylan Welch\n"}<span className="wrap"></span></h1>
                  <p>Hello! My name is Dylan Welch. I am a 27-year-old, graduate from the University of California, Davis. My academic and personal journey is driven by a passion for exploring diverse technologies and frameworks, particularly in the realms of network and software engineering.</p>
                  <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header Img"/>
              </Col>
              </Row>
          </Container>
        </section>
    )
}