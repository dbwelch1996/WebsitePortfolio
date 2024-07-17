import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Row, Col, Container } from "react-bootstrap";
import contactImg from "../assets/img/june.png";

export const Contact = () => {
  const form = useRef();
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Submit");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs.sendForm('service_apyg6ug', 'template_7wj1nno', form.current, '1isG3T5101FqzPjcd')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setButtonText("Send");
          setFormDetails(formInitialDetails);
          setStatus({ success: true, message: "Message Sent" });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setButtonText("Send");
          setStatus({ success: false, message: "Message Failed, please try again later" });
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact me" />
          </Col>
          <Col md={6}>
            <h2>Get in touch</h2>
            <form ref={form} onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" name="lastName" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" name="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate("email", e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate("phone", e.target.value)} />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)}></textarea>
                </Col>
                <Col sm={12} className="px-1">
                  <button type="submit">{buttonText}</button>
                </Col>
                {
                  status && status.message && (
                    <Col sm={12}>
                      <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                  )
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
