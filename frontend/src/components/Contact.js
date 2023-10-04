import axios from "axios";
import React from "react";
import { useState } from "react";
import { Alert, Button, Container } from "react-bootstrap";
import { Form, Modal } from "react-bootstrap";
import btnStyles from "../styles/Button.module.css";
import styles from "../styles/MoreDropdown.module.css";

const Contact = (props) => {
  const { setShow, show } = props;
  const [sending, setSending] = useState(false);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  const handleClose = () => {
    setShow(false);
    clearContactForm();
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const clearContactForm = () => {
    setFormData({
      ...formData,
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (event) => {
    setSending(true);
    event.preventDefault();
    try {
      await axios.post("/contact/", formData);
      handleClose();
      clearContactForm();
    } catch (err) {
      setErrors(err.response?.data);
    }
    setSending(false);
  };

  return (
    <>
      <div onClick={(e) => e.stopPropagation()}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Contact Us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Please let us know your question and we'll be in contact with you
              as soon as possible.
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label className="d-none">Name</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="email">
                <Form.Label className="d-none">Email</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.email?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="subject">
                <Form.Label className="d-none">Subject</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={subject}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.subject?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
              <Form.Group controlId="message">
                <Form.Label className="d-none">Message</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="textarea"
                  placeholder="Message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.message?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
              <Container className="d-flex justify-content-around">
                <Button
                  className={`${btnStyles.Button}`}
                  variant="secondary"
                  onClick={handleClose}
                  type="button"
                >
                  Cancel
                </Button>
                <Button
                  className={`${btnStyles.Button} ${btnStyles.Bright}`}
                  type="submit"
                  disabled={sending}
                >
                  Submit
                </Button>
              </Container>

              {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Contact;
