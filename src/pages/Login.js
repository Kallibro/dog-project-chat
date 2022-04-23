import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Form,Button,Container,Row,Col} from 'react-bootstrap'
import "./Login.css"
import {useLoginUserMutation} from '../services/appApi'


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
//appApi
const [loginUser,{isLoading,error}] = useLoginUserMutation();

const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault();
    //login logic
loginUser({email,password}).then(({data}) => {
  if(data){
    console.log(data);
    //socket work
    
    //navigete to the main after login
    navigate("/")
  }
})
  }

  return (
      <Container>
          <Row className="mt-4 login-row">
              <Col  hide="true" md={8} className="login__bg"></Col>
              <Col xs={12} md={4} className="d-flex align-items-center justify-content-center flex-direction-column form_login">
                
           <Form onSubmit={handleLogin}>
           <h2 className="text-center">Login</h2>
           <hr/>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} value={email} required/>

              <Form.Text className="text-muted">
               We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} value={password} required/>
              </Form.Group>
          
        <Button variant="primary" type="submit">
            Login
        </Button>
      
        <div className="toSingnup">
          <p>
           <span className="span_login">Dont have account?</span>   
            <Link to="/signup" className="signup_link">
              <Button variant="success">Signup</Button> 
            </Link>
          </p>
        </div>
        </Form>
        </Col>
    </Row>
</Container>
  )
}

export default Login;