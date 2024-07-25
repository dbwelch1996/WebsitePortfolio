import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/DNS.png";
import projImg2 from "../assets/img/bankapplogo.png";
import projImg3 from "../assets/img/fitness.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Workout Tracker API",
      description:
        "A web application that serves as a RESTful API to track workouts, utilizing Java Spring Boot and connecting to a PostgreSQL database. The application supports basic CRUD operations, allowing clients to create, read, update, and delete workout data through standard HTTP verbs. Using Spring Boot simplified configuration and deployment, while PostgreSQL ensured reliable database support. This project achieved a scalable and maintainable solution for efficient workout tracking and management.",
      imgURL: projImg3,
    },
    {
      title: "Simulated Bank Application",
      description:
        "A Java-based Bank application, developed using Maven for dependency management and basic CSS for styling, integrates seamlessly with a local MySQL database via JDBC for secure storage of user data and transaction histories. Utilizing JavaFX for its graphical user interface, the application ensures a user-friendly experience with intuitive navigation and real-time balance validation, enabling secure fund transfers by verifying available balances. With robust error handling mechanisms in place, this project demonstrates proficiency in Java development, database integration, and GUI design, offering a comprehensive simulation of banking operations focused on reliability, security, and usability.",
      imgURL: projImg2,
    },
    {
      title: "DNS Resolver",
      description:
        "This Python application is a custom DNS resolver and HTTP client, created to simulate the entire DNS resolution process and subsequent HTTP communication. It leverages low-level networking protocols to construct DNS queries, beginning with the creation of a DNS request packet that conforms to the DNS protocols specifications. Utilizing UDP sockets, it interacts directly with multiple DNS resolvers, measuring Round Trip Times (RTT). The application employs parsing techniques to dissect DNS responses, extracting essential metadata such as domain names, IP addresses, and server information from various DNS message sections. It navigates through root servers, Top-Level Domain (TLD) servers, and authoritative name servers to resolve domain queries to their corresponding IP addresses. Following successful resolution, it initiates HTTP GET requests over TCP connections to retrieve and display web page content, measuring and reporting RTT metrics for both DNS resolution and HTTP transactions. This provides insights into network performance while demonstrating proficiency in handling DNS protocols and HTTP interactions.",
      imgURL: projImg1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col className="mb-5">
            <div className="intro">
              <h2 className="mb-4 mt-5">Projects</h2>
              <p>
                These are some of the projects I have worked on. For more projects
                I've worked on or to see the code, check out my GitHub!
              </p>
            </div>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first" className="custom-tab-link">
                    Workout Tracker API
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="custom-tab-link">
                    Bank Application
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className="custom-tab-link">
                    DNS Resolver
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <Col md={6} className="proj-imgbx">
                      <img
                        src={projects[0].imgURL}
                        alt={projects[0].title}
                      />
                    </Col>
                    <Col md={6} className="proj-details">
                      <h3>{projects[0].title}</h3>
                      <p>{projects[0].description}</p>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    <Col md={6} className="proj-imgbx">
                      <img
                        src={projects[1].imgURL}
                        alt={projects[1].title}
                      />
                    </Col>
                    <Col md={6} className="proj-details">
                      <h3>{projects[1].title}</h3>
                      <p>{projects[1].description}</p>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    <Col md={6} className="proj-imgbx">
                      <img
                        src={projects[2].imgURL}
                        alt={projects[2].title}
                      />
                    </Col>
                    <Col md={6} className="proj-details">
                      <h3>{projects[2].title}</h3>
                      <p>{projects[2].description}</p>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
