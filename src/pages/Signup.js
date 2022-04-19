import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {Form,Button,Container,Row,Col} from 'react-bootstrap'
import './Signup.css'

import {useSignupUserMutation} from '../services/appApi'

import account_Img from '../assets/me.jpg'


function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const [signupUser,{isLoading,error}] = useSignupUserMutation()
  //useNavigate
  const navigate = useNavigate();

  //image upload states
  const [image,setImage] = useState(null);
  const [uploadingImg,setUploadingImg] = useState(false); //dont upload image by default
  const [imagePreview,setImagePreview] = useState(null);

  function validateImg(e) {
    const file = e.target.files[0];
    if(file.size >= 1048576){
      return alert("Max file size is 1mb")
    } else{
      setImage(file);
      setImagePreview(URL.createObjectURL(file))
    }
    console.log("change img");}
  
  //cloudinary
    async function uploadImage() {
      const data = new FormData();
      data.append('file',image);
      data.append('upload_preset','myUploadPreset');
      try{
        setUploadingImg(true);
        let res = await fetch('https://api.cloudinary.com/v1_1/antoncloudinary/image/upload',{
          method: 'post',
          body: data
        })
        const urlData = await res.json();
        setUploadingImg(false);
        return urlData.url;
      }catch(error){
        setUploadingImg(false);
        console.log(error);
      }
    }
  
  
  async function  handleSignup(e){
  e.preventDefault();
  if(!image) return alert("Please upload your account image")
  const url = await uploadImage(image)
  console.log(url);
  // signup the user
    signupUser({name,email,password,picture:url}).then(({data}) => {
      if(data){
        console.log(data);
        //navigate to the chat
        navigate("/")
      }
    })
  }
  

  return (
    <>
         <Container>
          <Row className="mt-4 login-row">
              
              <Col xs={12} md={4} className="d-flex align-items-center justify-content-center flex-direction-column form_login">
           <Form onSubmit={handleSignup}>
             <h2 className="text-center">Create account</h2>
           <hr/>
     {/* account image */}
           <div className="account-img-box">
             <label htmlFor="image-upload" className="image-upload-label">
             <img src={ imagePreview || account_Img} className="account-img" alt="me"/>
              <i className="fas fa-plus-circle add-picture-icon"></i>
             </label>
             <input type="file" id="image-upload" hidden accept="image/png, image/jpeg" onChange={validateImg}/>
           </div>
     {/* name */}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>*Name</Form.Label>
              <Form.Control type="text" placeholder="Your name " onChange={(e)=>{setName(e.target.value)}} value={name}/>
            </Form.Group>
     {/* email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
              <Form.Text className="text-muted">
               We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
     {/* password */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>*Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
              </Form.Group>
    
      {/* Signup button */}
        <Button variant="primary" type="submit">
            {uploadingImg ? "Signing you up..." : "Signup!"}
        </Button>
      
        <div className="toSingnup">
          <p>
           <span className="span_login">Already have account?</span>   
            <Link to="/login" className="signup_link">
              <Button variant="success">Login</Button> 
            </Link>
          </p>
        </div>
        </Form>
        </Col>
        <Col  hide="true" md={8} className="Signup__bg"></Col>
    </Row>
</Container>
    </>
  )
}

export default Signup