import { Row, Col, Container, CloseButton, Form, Button, Card } from "react-bootstrap"
import Address from "./Address"
import { Link, Outlet, useNavigate } from 'react-router-dom'
import '../css/Signup.css'
import signupImage from './signupImage.jpg'
import { useState, useEffect } from "react"
import Axios from 'axios'
import {ArrowCircleLeft} from '@mui/icons-material'

function Signup() {
  const navigate=useNavigate()
  //useState for all user data
  const [userInfo,setUserInfo]=useState({})
  //useState for form errors
   const [formErrors,setFormErrors]=useState({})
   const [status,setStatus]=useState("")
   const[isSubmit,setIssubmit]=useState()
   
  //data lifting from Address component
  let address={}
  const addressHandler=(userAddress)=>{
    address={...userAddress}
}
 //onchange event handler for user information
   const dataHandler=(e)=>{
     setUserInfo({...userInfo,...address,[e.target.name]:e.target.value})
    }    
   useEffect(()=>{   
    const userdata=JSON.stringify(userInfo);
    if(Object.keys(formErrors).length ===0 && isSubmit){
      Axios.post('http://localhost:3010/api/signup',{userdata}
      ).then((response)=>{
 
        if(response.err){
          console.log(response.err)
        }
        if(response){
          navigate('/signup/signupsuccess')
        }else{
          setStatus("something went wrong!error while submitting data")
        }
      }).catch((err)=>{
        alert(err)
      })
    }
    },[formErrors]);
   

   //form submit handler
  const dataSubmitHandler=(event)=>{
    event.preventDefault()
    setFormErrors(()=>validate(userInfo));
     setIssubmit(true)

  };
   const validate=(values)=>{
     const errors={}
     const text=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/
     const mail=/^[a-zA-Z0-9]+@+gmail.com$/i
     const phoneno=/^(?!0)\d{10}$/
    if(!text.test(values.fname)){
    errors.firstname='Invalid firstname'  
     }
     if(!text.test(values.lname)){
     errors.lastname='Invalid lastname'  
    }
    if(!text.test(values.mname)){
     errors.middlename='Invalid middlename'  
     }
   
    if(!mail.test(values.email)){
     errors.email='Invalid email address'  
    }
    if(!(values.password.length>=4 && values.password.length<8) ){
      errors.password='password  should contain minimum 4 and maimum 8 character'  
     }
     if(!phoneno.test(values.mobilenumber)){
      errors.phoneno='Invalid mobile number'  
     }
     if(values.password!==values.repassword){
      errors.repassword='password does not match'  
     }
     return errors;
   };
  
  return (
    <Container fluid className='p-0 cardbody'>
      <Row className='d-flex m-0'>
        <Col className='col-12 col-lg-6 order-2 order-lg-1 p-0'>
         <img src={signupImage} alt='img' className='image w-100 h-100' /> 
        </Col>
        <Col className='col-12 col-lg-6 order-1 order-lg-2 p-0'>
          <Card className='signupcard'>
            <Card.Header>          
              <Link to='/login'><ArrowCircleLeft/><span>Back</span></Link>
            </Card.Header>
            <div className='heading ' >
             <h1 >Sign Up</h1>
             <p className='text-muted'>Please fill in this field to create account!</p>
            </div>        
            <Card.Body >
              {status}
              <Form className=' p-3 ' onSubmit={dataSubmitHandler}>                      
                <Row>
                  <Col className="col-4">
                   <Form.Label>First Name</Form.Label>
                  </Col>
                  <Col className="col-8">
                    <Form.Group>              
                      <Form.Control type='text' placeholder='First Name'
                       name='fname'onChange={dataHandler} required/>
                      <p className='error'>{formErrors.firstname}</p> 
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-4">
                   <Form.Label>Middle Name</Form.Label>
                  </Col>
                  <Col className="col-8">
                    <Form.Group>              
                      <Form.Control type='text' placeholder='Middle Name'
                       name='mname'onChange={dataHandler} required/>
                      <p className='error'>{formErrors.middlename}</p> 
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-4">
                   <Form.Label>Last Name</Form.Label>
                  </Col>
                  <Col className="col-8">
                    <Form.Group>              
                      <Form.Control type='text' placeholder='Last Name'
                       name='lname'onChange={dataHandler} required/>
                      <p className='error'>{formErrors.lastname}</p> 
                    </Form.Group>
                  </Col>
                </Row>            
           
                <Address onAddressSave={addressHandler} />

           
                <Row>
                  <Col className="col-4">
                   <Form.Label>Email Address</Form.Label>
                  </Col>
                  <Col className="col-8">
                    <Form.Group>              
                      <Form.Control type='text' placeholder='Email Address'
                       name='email'onChange={dataHandler} required/>
                      <p className='error'>{formErrors.email}</p> 
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-4">
                   <Form.Label>Mobile Number</Form.Label>
                  </Col>
                  <Col className="col-8">
                    <Form.Group>              
                      <Form.Control type='text' placeholder='Mobile Number'
                       name='mobilenumber'onChange={dataHandler} required/>
                      <p className='error'>{formErrors.phoneno}</p> 
                    </Form.Group>
                  </Col>
                </Row>
                <Row className='mb-3'>
                  <Col className='col-4'>
                   <Form.Label>Account Type</Form.Label>
                  </Col>
                  <Col className='col-8'>
                    <Form.Select name='account' onChange={dataHandler} required>        
                      <option value=''>Select Your Account Type</option>
                      <option value="saving">Saving Account</option>
                      <option value="current">Current Account</option>
                      <option value="NRI">NRI Account</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-4">
                   <Form.Label>Password</Form.Label>
                  </Col>
                  <Col className="col-8">
                    <Form.Group>              
                      <Form.Control type='text' placeholder='Enter Password'
                       name='password'onChange={dataHandler} required/>
                      <p className='error'>{formErrors.password}</p> 
                    </Form.Group>
                  </Col>
                </Row>
                <Row className='mb-5'>
                  <Col className="col-4">
                   <Form.Label>Re-enter Password</Form.Label>
                  </Col>
                  <Col className="col-8">
                    <Form.Group>              
                      <Form.Control type='text' placeholder='Re-Enter Password'
                       name='repassword'onChange={dataHandler} required/>
                      <p className='error'>{formErrors.repassword}</p> 
                    </Form.Group>
                  </Col>
                </Row>
                <Row className='mb-3'>
                 <Col>
                  <Form.Check>
                   <Form.Check.Input type='checkbox' required/ >
                    <Form.Check.Label>I accept the <Link to='#'>Terms Of Use </Link> and
                     <Link to='#'> Privacy Policy</Link></Form.Check.Label>
                  </Form.Check>
                 </Col>
                </Row>
                <Row className=' mb-3 justify-content-center ' >
                  <Col className='col-sm-12 d-grid' >
                   <Button type='submit' size='lg' className='submitbtn' >Signup</Button>
                  </Col>
                </Row>               

            
              </Form>
            </Card.Body>
            <Card.Footer>
              <p className='mt-2' style={{ textAlign: 'center' }}>
              Already Have An Account? <Link to='/login'>Sign In</Link>
             </p> 
            </Card.Footer> 
         </Card>        
        </Col>
      </Row>
      
    </Container>
   
  );
}         
export default Signup;