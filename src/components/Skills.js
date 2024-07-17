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
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>These is not an exhaustive list of skills.<br />These are to highlight the programming languages and technologies i've used throughout the years!</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                  <div className="item">
                  <img src ={gitlogo} alt="Image" />
                  <h5>Git</h5>
                 </div>
                 <div className="item">
                  <img src ={javadark} alt="Image" />
                  <h5>Java</h5>
                 </div>
                 <div className="item">
                  <img src ={linuxdark} alt="Image" />
                  <h5>Linux</h5>
                 </div>
                 <div className="item">
                  <img src ={sqldark} alt="Image" />
                  <h5>SQL</h5>
                 </div>
                 <div className="item">
                  <img src ={postman} alt="Image" />
                  <h5>Postman</h5>
                 </div>
                 <div className="item">
                  <img src ={python} alt="Image" />
                  <h5>Python</h5>
                 </div>
                 <div className="item">
                  <img src ={spring} alt="Image" />
                  <h5>Spring</h5>
                 </div>
                 <div className="item">
                  <img src ={c} alt="Image" />
                  <h5>C</h5>
                 </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  
  }