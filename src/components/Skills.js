import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import gitlogo from "../assets/img/gitlogo.svg";
import javadark from "../assets/img/javadark.svg";
import linuxdark from "../assets/img/linuxdark.svg";
import sqldark from "../assets/img/sqldark.svg";
import postman from "../assets/img/Postman.svg";
import python from "../assets/img/python.svg";
import c from "../assets/img/c.svg";
import spring from "../assets/img/spring.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

  const carouselOptions = {
    responsive: responsive,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 2000, 
    className: "skill-slider"
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                This is not an exhaustive list of skills.
                <br />
                These are to highlight the programming languages and technologies I've used throughout the years!
              </p>
              <Carousel {...carouselOptions}>
                <div className="item">
                  <img src={gitlogo} alt="Git" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={javadark} alt="Java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={linuxdark} alt="Linux" />
                  <h5>Linux</h5>
                </div>
                <div className="item">
                  <img src={sqldark} alt="SQL" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={postman} alt="Postman" />
                  <h5>Postman</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={spring} alt="Spring" />
                  <h5>Spring</h5>
                </div>
                <div className="item">
                  <img src={c} alt="C" />
                  <h5>C</h5>  
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
