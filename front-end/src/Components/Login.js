import {Button,Row,Col,Card, Form, CloseButton, InputGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../css/Login.css';
import {useState} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Person,Lock,Google,Facebook,Twitter, ArrowCircleLeft} from '@mui/icons-material';
import { Avatar } from '@mui/material';
import signupImage from '../images/login.jpg'

function Login(props){
 const navigate=useNavigate()
 const[username,setUsername]=useState('')
 const[password,setPassword]=useState('')
 const[status,setStatus]=useState('')
 //onchage event for username
  const handleUsername=(e)=>{
    setUsername(e.target.value)
  }
 //onchange event for user password
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(username && password){
         Axios.post("http://localhost:3010/api/userlogin",{
         username:username,
         password:password
         }).then((response)=>{
             if(response.data.err){
             alert(response.data.err)
             }
             if(response.data.message){
                 setStatus(response.data.message)
             }else{
                 navigate('/dashboard')            
                 props.setId(response.data)            
             }
            })
        }else{
        setStatus('Please Enter All The Detail')
        }         
    };
  return( 
   <div className='container-fluid'>
       <Row className='m-0 d-flex '>
            <Col className='col-12 col-lg-6 imgdisplay order-2 order-lg-1'>
             <img src={signupImage} alt="login" width="100%"/>
            </Col>
            <Col className='col-12 col-lg-6 d-flex justify-content-center div order-1 order-lg-2'>               
                <Card className='cards'>
                   <Card.Header>
                     <Link to="/" className='text-black'><ArrowCircleLeft/>Go To Home</Link>
                   </Card.Header>                 
                  <Card.Body className='p-5 text-center'>                   
                      <Card.Title className='mb-4 d-flex justify-content-center' >
                        <Avatar src="/broken-image.jpg"  sx={{ width: 80, height: 80 }}/>                     
                      </Card.Title>                    
                      <div>
                        <h1 className="text-center">Welcome Back</h1>
                        <p style={{textAlign:'center'}} className='para'>
                          Don't Have An Account? <Link to='/signup'>sign up</Link> 
                        </p>              
                        <h4 style={{color:'red'}}>{status}</h4>
                        </div>
                      <Form onSubmit={handleSubmit}>
                        <InputGroup className='mb-5'>
                         <InputGroup.Text><Person/></InputGroup.Text>
                         <Form.Control type='text' placeholder='Username' size='lg' onChange={handleUsername}/>
                        </InputGroup>
                        <InputGroup className='mb-5'>
                         <InputGroup.Text><Lock/></InputGroup.Text>
                         <Form.Control type='password' placeholder='Password' size='lg' onChange={handlePassword}/>
                        </InputGroup>
                         <Form.Check type='checkbox' label='Remember Me' className='mb-4 text-start text-black' />  
                         <Button className='d-grid w-100 mb-5 btn ' type='submit' size='lg' >LOGIN</Button> 
                         <Link to='#' className=' text-danger'>Forgot Password?</Link>                                                                 
                      </Form>                  
                    </Card.Body>
                    <Card.Footer className='mb-2'>
                     <p className='para' >Or Login with</p>
                     <div className='d-flex justify-content-center'>
                       <Google className='icon1 material-icons md-48' />
                       <Facebook className='icon2 material-icons md-48'/>
                       <Twitter className='icon3 material-icons md-48'/>
                     </div>       
                    </Card.Footer>
                </Card>           
           
            </Col>
        </Row>
    </div>            
   );
}
export default Login;