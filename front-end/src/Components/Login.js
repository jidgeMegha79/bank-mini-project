import {Button,Row,Col,Card, Form,InputGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../css/Login.css';
import {useState} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Person,Lock, ArrowCircleLeft} from '@mui/icons-material';
import { Avatar } from '@mui/material';
import signupImage from '../images/login.jpg'

function Login(props){
 const navigate=useNavigate()
 const[username,setUsername]=useState('')
 const[password,setPassword]=useState('')
 const[status,setStatus]=useState('')
 //const[userdata,setUserdata]=useState([])
 
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
      const mail=/^[a-zA-Z0-9]+@+gmail.com$/i
        if(!(username && password)){
          setStatus("Enter all the details")
        }else{
        if((mail.test(username)) && (password.length>=4 && password.length<8)){
         Axios.post("http://localhost:3010/api/userlogin",{
         username:username,
         password:password
         }).then((response)=>{
             if(response.data.length>0){
              console.log('welcome')
              navigate('/dashboard')            
              //setUserdata(response.data)
              sessionStorage.setItem("userdata",JSON.stringify(response.data))
             }else{
                 setStatus("user not found")
             }
            }).catch((err)=>{
              alert("server not responding")
            }) 
          }else{
            setStatus("Incorrect username and password combination") 
          }     
        }   
          
    };
  return( 
   <div className='container-fluid'>
       <Row className='m-0 d-flex '>
            <Col className='col-12 col-lg-6 imgdisplay order-2 order-lg-1'>
             <img src={signupImage} alt="login" width="100%"/>
            </Col>
            <Col className='col-12 col-lg-6 d-flex justify-content-center div order-1 order-lg-2 p-0'>               
                <Card className='cards'>
                   <Card.Header className='header'>
                     <Link to="/" className='text-black'><ArrowCircleLeft/><span>Back</span></Link>
                   </Card.Header>                 
                  <Card.Body className='p-5 text-center'>                   
                      <Card.Title className='mb-4 d-flex justify-content-center' >
                        <Avatar src="/broken-image.jpg"  sx={{ width: 80, height: 80 }}/>                     
                      </Card.Title>                    
                      <div>
                        <h1 className="text-center">Welcome</h1>
                                    
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
                         <Button className='d-grid w-100 mb-5 loginbtn ' type='submit' size='lg' >LOGIN</Button> 
                         <Link to='#' className=' text-danger para '>Forgot Password?</Link>                                                                 
                      </Form> 
                      {/* <p className='para' >Or Login with</p>
                      <div className='d-flex justify-content-center'>                       
                       <Google className='icon1 material-icons md-48' />
                       <Facebook className='icon2 material-icons md-48'/>
                       <Twitter className='icon3 material-icons md-48'/>                       
                      </div>                   */}
                    </Card.Body>
                    
                     
                       
                     <Card.Footer className='mb-2'>   
                       <p style={{textAlign:'center'}} className='para'>
                          Don't Have An Account? <Link to='/signup'>sign up</Link> 
                        </p>  
                    </Card.Footer>
                </Card>           
           
            </Col>
        </Row>
    </div>            
   );
}
export default Login;