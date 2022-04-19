import React from 'react'
import "./Navigation.css"
import {useSelector} from "react-redux" //use it to hide and show 
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

import logo from '../assets/chatLogo.jpg'
function Navigation() {
//useSelector
const user = useSelector((state) => state.user)
  return (
    
<Navbar bg="dark" variant="dark" expand="lg" className="nav-all">
  <Container>
      <LinkContainer to="/chatPage">
    <Navbar.Brand >
        <img src={logo} style={{width:70,height:50,borderRadius:20}} alt="logo"/>Live chat
    </Navbar.Brand>
    
      </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
          <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/aboutUs">
        <Nav.Link>About Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/dogWalkers">
        <Nav.Link>DogWalkers</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/trainers">
        <Nav.Link>Trainers</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/chatPage">
        <Nav.Link>Chat</Nav.Link>
          </LinkContainer>
          {!user && (

            <LinkContainer to="/Signup">
        <Nav.Link>Signup</Nav.Link>
          </LinkContainer>
            )}
        
      
        {/* if the is no user --hide login */}
        {!user && (
           <LinkContainer to="/login">
        <Nav.Link>Login</Nav.Link>
          </LinkContainer>
        )}
        {user && (
          <LinkContainer to="/">
            <Nav.Link style={{color:'aqua'}}>{user.name}</Nav.Link>
          </LinkContainer>
        )}
          {user &&(
              <NavDropdown title={
          <>
          <img src={user.picture} alt={user.name} className="user_picture"/>
          </>
        } id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
          )}
         
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navigation