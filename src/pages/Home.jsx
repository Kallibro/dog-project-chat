import React from 'react'
import {Row,Button,Col,Container} from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
import './Home.css'

function Home() {
  return (
      <Container>
    <Row>
        {/* <Col md={4} className="d-flex flex-direction-column align-items-center justify-content-center">
            <div>
                <h1>Lets chat together!</h1>
                <p>Chat App real time that saves unreaded</p>
                <LinkContainer to="/chatPage">
                    <Button variant="warning">
                        Lets CHAT<i className="fas fa-comments home-message-icon text-danger"></i>
                    </Button>
                    
                </LinkContainer>
            </div>
        </Col>
        <Col md={8} className="home__bg"></Col> */}
        <Container>
           <h1 className='text-center mt-5'>WELCOME TO THE PROJECT HOME PAGE</h1>
        </Container>
    </Row>
    </Container>
  )
}

export default Home