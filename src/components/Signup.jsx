import React, { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {auth} from "../firebase-auth/firebase";
import "./Signup.css"
const Signup = () => {

    const navigate = useNavigate();
  const [values, setValues] = useState({
    name:"",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState(" ");

  const [submitButtonDisabled,setSubmitButtonDisabled] = useState(false);

  const handleSubmission = (e) => {
    e.preventDefault();
    if(!values.email||!values.pass){
        setErrorMsg(" Fill all fields")
        return;
    }
        setErrorMsg(" ")
        setSubmitButtonDisabled(true)
        createUserWithEmailAndPassword(auth,values.email,values.pass).then(async(res)=>{
            setSubmitButtonDisabled(false)
            const user = res.user;
            await updateProfile(user,{
                displayName:values.name, 
                
            });
            navigate("/")
          
        })
        .catch((err)=>{

            setSubmitButtonDisabled(false)
           setErrorMsg(err.message)
        })

      
  };
  return (
    <>
      <Container className="shadow m-5 d-inline-flex">
        <Col>
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?size=338&ext=jpg&ga=GA1.1.1616608502.1673808878&semt=sph"
            alt=""
          />
        </Col>

        <Col>
          <Form className=" border-danger text-md-start">
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <h3>Enter Name</h3>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, name: event.target.value }))
                }
              />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h3>Email Address</h3>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
            >
              <h3>Password</h3>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <p>
              <b className="text-danger">{errorMsg}</b>
            </p>
            <Button className="btn" variant="warning" type="submit" onClick={handleSubmission} disabled={submitButtonDisabled}>
              Submit
            </Button>

            <h6 className="p-3 ">
              Already have an account?{" "}
              <Link to="/login" className="text-warning">
                <i className="fa-solid fa-right-to-bracket"></i>Login here
              </Link>{" "}
            </h6>
          </Form>{" "}
        </Col>
      </Container>
    </>
  );
};

export default Signup;
