import React from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
   <>
   <Container className="shadow m-5 d-inline-flex">
      
      <Col>
      <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?size=338&ext=jpg&ga=GA1.1.1616608502.1673808878&semt=sph"
            alt=""
          />
       
      
      </Col>
          
<Col><Form className=" border-danger text-md-start">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <h3 >Email Address</h3>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h3>Password</h3>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox"  label="Check me out" />
            </Form.Group>
            <Button variant="warning" type="submit">
              Submit
            </Button>

            <p>Already have an account? <Link to="/login" className="text-warning"><i class="fa-solid fa-right-to-bracket"></i>Login here</Link> </p>
          </Form>{" "}</Col>
       
          
        
      
    </Container>
   </>
  )
}

export default Signup;