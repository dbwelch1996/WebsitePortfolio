import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/gradphoto.png";

export const Banner = () => {
  //This is all for the typing effect
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Software Engineer", "Network Engineer", "Full Stack Developer", "Backend Engineer", "Systems Engineer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(50);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    // Calculate current index in toRotate array
    let i = loopNum % toRotate.length;
    // Get the full text to display/delete
    let fullText = toRotate[i];
    let updatedText = isDeleting
      // Deleting text
      ? fullText.substring(0, text.length - 1) 
      // Typing text
      : fullText.substring(0, text.length + 1);
    //Update the displayed text
    setText(updatedText);
  
    // Adjust delta based on typing/deleting phase
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }
  
    // Check conditions to switch between typing and deleting phases
    if (isDeleting && updatedText === "") {
      setIsDeleting(false); // Switch to typing phase
      setLoopNum(loopNum + 1); // Move to the next toRotate element
      setDelta(100); // Set delta for typing phase
    } else if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true); // Switch to deleting phase
      setDelta(period); // Set delta for deleting phase
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>
               <span>Dylan Welch</span>
            </h1>
            <h1>
              <span className="no-wrap">Aspring:</span><br />
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Hello! My name is Dylan Welch. I am a 27-year-old, graduate from
              the University of California, Davis. My academic and personal
              journey is driven by a passion for exploring diverse technologies
              and frameworks, particularly in the realms of network and software
              engineering.
            </p>
            <button onClick={() => window.location.hash = 'contact'}>
  Let's connect <ArrowRightCircle size={25} />
</button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
