import React, { useRef } from "react";
import "./Contact.scss";
import circularImage from "../../images/contact-profile.jpg";
import emailjs from "@emailjs/browser";
import { Form, Button, Row, Col } from "react-bootstrap";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fp94sej",
        "template_zuk1v1e",
        form.current,
        "JqlvqUoSovo5rcnzX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div className="contact">
      <div className="header">
        <div className="heading">Contact</div>
        <div
          className="profile-image"
          style={{ backgroundImage: `url(${circularImage})` }}></div>
      </div>

      <div className="contact-form row g-5">
        <div className="contact-info col-lg-6 col-mb-12">
          <h1>Send me a message</h1>
          <p>
            Whether you wish to discuss new ideas or have a project for me,
            simply fill this form and I’ll get back to you soon.
          </p>
        </div>
        <div className="contact_form col-lg-6 col-mb-12">
          <Form ref={form} onSubmit={sendEmail}>
            <Row>
              <Col>
                <Form.Group controlId="firstName" className="mb-3">
                  <Form.Label>
                    First Name<span>*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="user_name"
                    className="form-field"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="lastName" className="mb-3">
                  <Form.Label>
                    Last Name<span>*</span>
                  </Form.Label>
                  <Form.Control type="text" className="form-field" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>
                Email<span>*</span>
              </Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                className="form-field"
              />
            </Form.Group>

            <Form.Group controlId="message" className="mb-3">
              <Form.Label>
                Message<span>*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                className="form-field"
              />
            </Form.Group>

            <div className="text-center">
              <Button
                value="Send"
                variant="primary"
                type="submit"
                className="submit-button mb-3"
                onMouseEnter={(e) => {
                  e.target.classList.add("button-animation");
                }}
                onMouseLeave={(e) => {
                  e.target.classList.remove("button-animation");
                }}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
