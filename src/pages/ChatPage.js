import React from 'react'
import {Row,Button,Col,Container} from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'

//components
// import ChatSidebar from '../components/ChatSidebar'
// import MessageForm from '../components/MessageForm'

function ChatPage() {
  return (
    <Container>
    <Row>
        <Col md={4} className="d-flex flex-direction-column align-items-center justify-content-center">
            <div>
                <h1>Lets chat together!</h1>
                <p>Chat App - real time chat that saves unreaded messages</p>
                <LinkContainer to="/chat">
                    <Button variant="warning">
                        Lets CHAT<i className="fas fa-comments home-message-icon text-danger"></i>
                    </Button>
                    
                </LinkContainer>
            </div>
        </Col>
        <Col md={8} className="home__bg"></Col>
    </Row></Container>
  )
}

export default ChatPage