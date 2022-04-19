import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
//components
import ChatSidebar from '../components/ChatSidebar'
import MessageForm from '../components/MessageForm'

function Chat() {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          advrtisements & other shit
        </Col>

        <Col md={4}>
          <ChatSidebar/>
        </Col>

        <Col md={6}> 
          <MessageForm/>
        </Col>
      </Row>
    </Container>
  )
}

export default Chat

//rfce- react function component export