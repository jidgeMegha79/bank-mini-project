import { Row, Col, Container, CloseButton, Form, Button, Card } from "react-bootstrap"
import Address from "./Address"
import { Link } from 'react-router-dom'
import '../css/Signup.css'
import signupImage from './signupImage.jpg'
import { useState, useEffect } from "react"
import Axios from 'axios'

function Signup() {
  //useState for all user data
  const [userInfo,setUserInfo]=useState({})
  //useState for form errors
   const [formErrors,setFormErrors]=useState({})
   const [formErrorsflag,setFormErrorsflag]=useState(false)
   const [formsubmitflag,setFormsubmitflag]=useState(false)
   
   
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
   
     if(Object.keys(formErrors).length ===0 && formErrorsflag){
     setFormsubmitflag(true)
     }
      },[formErrors,formsubmitflag,formErrorsflag]);

   //form submit handler
  const dataSubmitHandler=(event)=>{
    setFormErrors(()=>validate(userInfo));
    const userdata=JSON.stringify(userInfo);  
    setFormErrorsflag(true);
    if(formsubmitflag){
      Axios.post('http://localhost:3010/api/userdata',{userdata}
      ).then((response)=>{
        if(response){
        alert(response.data.message)
        }else{
          alert("something went wrong")
        }
      })
    }else{
      event.preventDefault()
    }

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
    <Container fluid className='  d-flex parent' > 
       <img src={signupImage} alt='img' className='image'></img>    
       <Form className='child p-3 ' onSubmit={dataSubmitHandler}>
        <div className='heading '  >
        <Link to='/'><CloseButton className='float-end' /></Link>
        <h1 >Sign Up</h1>
        <p className='text-muted'>Please fill in this field to create account!</p>
        </div>
          {/* <Name onNameSave={nameSaveHandler} /> */}
    <Card>
     <Card.Title className='m-2'>Name:</Card.Title>
     <Card.Body>
        <Row>
          <Col className='col'>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control type='text' placeholder='First Name'
               name='fname'onChange={dataHandler} required/>
               <p className='error'>{formErrors.firstname}</p> 
            </Form.Group>
            
          </Col>
          <Col>
            <Form.Group>
                <Form.Label>Middle Name</Form.Label>
                <Form.Control type='text' placeholder='Middle Name' name='mname' 
                onChange={dataHandler} required />
               
            </Form.Group>
            <p className='error'>{formErrors.middlename}</p>
          </Col>
        </Row>
        <Row>
          <Col className='col-lg-6'>
          <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type='text' placeholder='Last Name' name='lname' 
               onChange={dataHandler} required/>
               <p className='error'>{formErrors.lastname}</p> 
          </Form.Group>
          </Col>
        </Row>
        </Card.Body>
    </Card> 
     <Address onAddressSave={addressHandler} />
     <Card className='mt-2 p-3'>
      <Row className='mt-2 mb-3'>
        <Col >
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='text' placeholder='Email Address' name='email' onChange={dataHandler} required/>
        </Col>
        <p className='error'>{formErrors.email}</p>
        <Col>
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type='number' placeholder='Mobile Number' name='mobilenumber'onChange={dataHandler} required/>
        </Col>
        <p className='error'>{formErrors.phoneno}</p>
      </Row>
      <Row className='mb-3'>
        <Col className='col-lg-6'>
          <Form.Select name='account' onChange={dataHandler} required>        
            <option value=''>Select Your Account Type</option>
            <option value="saving">Saving Account</option>
            <option value="current">Current Account</option>
            <option value="NRI">NRI Account</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
         <Form.Group className="mb-5" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' onChange={dataHandler} required/>
          <p className="error">{formErrors.password}</p>
          </Form.Group>
          
        </Col>
        <Col>
        <Form.Group className="mb-5" >
          <Form.Label>Re-enter Password</Form.Label>
          <Form.Control type="password" placeholder="Re-enter Password" name='repassword' onChange={dataHandler} required/>
          <p className="error">{formErrors.repassword}</p>
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
        <Col className='col-sm-6' >
         <Button type='submit' variant='success btn-lg w-100' >Signup</Button>
        </Col>
      </Row>
    </Card>
      <p className='mt-2' style={{ textAlign: 'center' }}>
        Already Have An Account? <Link to='/login'>Sign In</Link>
       </p>
  </Form>         
               
</Container>
  );
}
export default Signup;