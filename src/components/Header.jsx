import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      {" "}
      <Navbar className="text-bg-warning border border-dark">
        <Nav className="p-3">
          <h2>
            {" "}
            <NavLink to="/" className="navlinks mx-3 text-dark">
              <i className="fa-solid fa-bag-shopping "></i>Primeshop
            </NavLink>
            <NavLink to="/login" className="navlinks mx-2 text-dark">
              LogIn<i className="fa-solid fa-right-to-bracket"></i>
            </NavLink>
            <NavLink to="/signup" className="navlinks mx-2 text-dark">
              Signup<i className="fa-solid fa-user-plus"></i>
            </NavLink>
            <p>{props.name ? `Welcome -  ${props.name}` : " "}</p>
          </h2>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
