// import React from 'react'

// const Nav = () => {
//   return (
//     <div>Nav</div>
//   )
// }

// export default Nav

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { IoSunny } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
import { useContext } from 'react';
import { PageTheme } from '../contexts/ThemeContexts';

function Menu() {

  // use theme context
  const { theme, toggleTheme } = useContext(PageTheme);
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <NavLink to="/">
        <Navbar.Brand>📚</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link>
          <NavLink to="/" style={{textDecoration: "none"}}>
              Home
            </NavLink>
          </Nav.Link>
            <Nav.Link>
            <NavLink to="/about" style={{textDecoration: "none"}}>
            About
            </NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to="/products" style={{textDecoration: "none"}}>
            Product
            </NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to="/fetch" style={{textDecoration: "none"}}>
            Blogs
            </NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to="/register" style={{textDecoration: "none"}}>
            Register
            </NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to="/login" style={{textDecoration: "none"}}>
            Login
            </NavLink>
            </Nav.Link>
            {/* <Nav.Link>
            <NavLink to="/details" style={{textDecoration: "none"}}>
            DetailPage
            </NavLink>
            </Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <div className="text-dark" onClick={toggleTheme}>
            {theme === "light" ? (
                <IoSunny className='icon'/>
              ) : (
                <FaRegMoon className='icon'/>
              )}
              
              
            </div>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;