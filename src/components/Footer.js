import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import './Footer.css'

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="footer-all" fixed="bottom">
    <Container>
    <Navbar.Brand href="/pricing">Pricing</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/About">About the project</Nav.Link>
      <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default Footer