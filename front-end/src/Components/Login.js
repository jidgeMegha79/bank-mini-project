import {Button,Row,Col,Card, Form, CloseButton} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../css/Login.css';
import {useState} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'

// import signupImage from './signupImage.jpg'

function Login(props){
    const navigate=useNavigate()
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[status,setStatus]=useState([])
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
            //    props.onUserlogin({name:response.data[0].firstname,id:response.data[0].id})
                 props.setId(response.data)
                 console.log(response.data)
             }
        })
    }else{
        alert("enter all detail")
    }
         
    };


return(    
    
        <div className=' div justify-content-center d-flex'>
        {/* <img src={signupImage} alt='img' className='image'></img> */}
        <Row className='justify-content-center  m-0 align-items-center d-flex container'>
        <Col className='col-md-4 col-sm-12 p-0' >
        <Card className=''>
            <Card.Body>
              <Link to='/'><CloseButton className='float-end'/></Link>
              <Card.Title className='mb-3 text-center' style={{fontSize:'2rem'}}>Login</Card.Title>
              <Card.Text>
                <h4 style={{color:'red'}}>{status}</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-4'>
                    <Form.Control type='text' placeholder='Username' onChange={handleUsername}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-4'>
                    <Form.Control type='password' placeholder='Password' onChange={handlePassword}></Form.Control>
                </Form.Group>
                <Form.Check type='checkbox' label='Remember Me' className='mb-3 text-start' ></Form.Check>
               
             <Button className='d-grid w-100 mb-3 btn-success ' type='submit' >LOG IN</Button> 
             <Link to='#' className='text-center'>Forgot Password?</Link>                                                                 
             </Form>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p style={{textAlign:'center'}}>
               Don't Have An Account? <Link to='/signup'>sign up</Link> 
            </p></Card.Footer>
        </Card>  
        </Col>
        </Row> 
         
    </div>
    
        
);
}
export default Login;