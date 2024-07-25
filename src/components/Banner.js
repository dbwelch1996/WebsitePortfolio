import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/gradphoto.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(50);
  const period = 2000;

  const toRotate = useMemo(() => [
    "Software Engineer",
    "Network Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "Systems Engineer"
  ], []);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  }, [loopNum, isDeleting, text, toRotate, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>
              <span>Dylan Welch</span>
            </h1>
            <h1>
              <span className="no-wrap">Aspiring:</span>
              <br />
              <span className="typing-container">
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
              Hello! My name is Dylan Welch. I am a 28-year-old, graduate from
              the University of California, Davis. My academic and personal
              journey is driven by a passion for exploring diverse technologies
              and frameworks, particularly in the realms of network and software
              engineering.
            </p>
            <button onClick={() => (window.location.hash = "contact")}>
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
