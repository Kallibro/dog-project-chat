import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import   "./MessageForm.css";

function MessageForm() {

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
    
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={10} md={10} >
            <Form.Group>
              <Form.Control type="text" placeholder="your message..."></Form.Control>
            </Form.Group>
          </Col>
          <Col sm={2} md={2} >
            <Button variant="primary" type="submit" style={{ width: "100%", backgroundColor: "orange" }}>
              <i className="fas fa-paper-plane"></i>
            </Button>
          </Col>
        </Row>
      </Form><div className="messages-output"></div>
    </>
  );
}

export default MessageForm;
