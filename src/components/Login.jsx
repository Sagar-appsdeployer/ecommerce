import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <Container className="shadow m-5">
      <Row>
        <Col>
          <img
            src="https://img.freepik.com/free-vector/secure-data-concept-illustration_114360-2510.jpg?size=338&ext=jpg&ga=GA1.2.1616608502.1673808878&semt=sph"
            
            alt=""
          />
        </Col>

        <Col>
          <Form className=" border-danger">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
