import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (
   <>   <Navbar className="text-bg-warning" >
         
          <Nav className="p-3">
            <NavLink to="/" className="navlinks mx-3 text-danger"><i className="fa-solid fa-bag-shopping "></i>Primeshop</NavLink>
            <NavLink to="/login" className="navlinks mx-2 text-danger">LogIn<i className="fa-solid fa-right-to-bracket"></i></NavLink>
            <NavLink to="/signup" className="navlinks mx-2 text-danger">Signup<i className="fa-solid fa-user-plus"></i></NavLink>

          </Nav>
          
        
      </Navbar>
     
      </>

  )
}

export default Header;