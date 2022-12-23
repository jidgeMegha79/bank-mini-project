import {Form,Row,Col,Container} from 'react-bootstrap'
import {useState,useContext,useEffect} from 'react'
import {Context} from '../App'
import Axios from 'axios'
import '../css/Userprofile.css'
const Userprofile=()=>{
    const userdata=useContext(Context)
    const [userInfo,setUserinfo]=useState(userdata[0])
   
    const [formErrors,setFormErrors]=useState({})
    const [status,setStatus]=useState("")
    const[isSubmit,setIssubmit]=useState()
    //event for storing user information
     const handleChange=(e)=>{
      setUserinfo({...userInfo,[e.target.name]:e.target.value})
      console.log(userInfo)
     }
     useEffect(()=>{   
      const userinfor=JSON.stringify(userInfo);
      if(Object.keys(formErrors).length ===0 && isSubmit){
        Axios.put('http://localhost:3010/api/updateprofile',{userinfor}
        ).then((response)=>{
          if(response){
            alert("success")
          }else{
            setStatus("something went wrong!error while updating data")
          }
        }).catch((err)=>{
          alert(err)
        })
      }
      },[formErrors]);
     //event for handling submit button
     const handleSubmit=(e)=>{
      e.preventDefault()
      setFormErrors(()=>validate(userInfo));
      setIssubmit(true)
      console.log(formErrors)
     }

     const validate=(values)=>{
      const errors={}
      const text=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/
      const mail=/^[a-zA-Z0-9]+@+gmail.com$/i
      const phoneno=/^(?!0)\d{10}$/
     if(!text.test(values.firstname)){
     errors.firstname='Invalid firstname'  
      }
      if(!text.test(values.lastname)){
      errors.lastname='Invalid lastname'  
     }
     if(!text.test(values.middlename)){
      errors.middlename='Invalid middlename'  
      }
    
     if(!mail.test(values.emailid)){
      errors.email='Invalid email address'  
     }
      if(!phoneno.test(values.phonenumber)){
       errors.phoneno='Invalid mobile number'  
      }
      return errors;
    };
    return(
    <Container className=''> 
     <Form onSubmit={handleSubmit} className='form-container'>
       <h3>{status}</h3>      
       <Row className='d-flex'>
         <Col className='col-6'>
          <Form.Label>Firstname</Form.Label>
          <Form.Control type='text' 
           name='firstname' defaultValue={userdata[0].firstname}
           onChange={handleChange}/>
           <p>{formErrors.firstname}</p>
         </Col>
         <Col className='col-6'>
          <Form.Label>Middlename</Form.Label>
          <Form.Control type='text' 
           name='middlename' defaultValue={userdata[0].middlename}
           onChange={handleChange}/>
           <p>{formErrors.middlename}</p>
         </Col>
         <Col className='col-6'>
          <Form.Label>Lastname</Form.Label>
          <Form.Control type='text' 
           name='lastname' defaultValue={userdata[0].lastname}
           onChange={handleChange}/>
           <p>{formErrors.lastname}</p>
         </Col>
      </Row>
      <Row>
        <Col className='col-6'>
          <Form.Label>Email Id</Form.Label>
          <Form.Control type='email' name='emailid'
          defaultValue={userdata[0].emailid} onChange={handleChange}/>
          <p>{formErrors.email}</p>
        </Col>
        <Col className='col-6'>
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type='text' name='phonenumber'
          defaultValue={userdata[0].phonenumber} onChange={handleChange}/>
          <p>{formErrors.phoneno}</p>
        </Col>
      </Row>
      <Row>
        <Col>
         <Form.Label>Address Line 1</Form.Label>
          <Form.Control type='text' name='addressline1'
          defaultValue={userdata[0].addressline1} onChange={handleChange}/>
        </Col>
      </Row>
      <Row>
        <Col>
         <Form.Label>Address Line 2</Form.Label>
          <Form.Control type='text' name='addressline2'
          defaultValue={userdata[0].addressline2} onChange={handleChange}/>
        </Col>
      </Row>
      
      <Row>
        <Col className='col-6'>
          <Form.Label>Country</Form.Label>
          <Form.Control type='text' name='country'
          defaultValue={userdata[0].country} onChange={handleChange}/>
        </Col>
        <Col className='col-6'>
          <Form.Label>State</Form.Label>
          <Form.Control type='text' name='state'
          defaultValue={userdata[0].state} onChange={handleChange}/>
        </Col>
      </Row>
      
      <Row>
        <Col className='col-6'>
          <Form.Label>City</Form.Label>
          <Form.Control type='text' name='city'
          defaultValue={userdata[0].city}
          onChange={handleChange}/>
        </Col>
        <Col className='col-6'>
          <Form.Label>Zip code</Form.Label>
          <Form.Control type='text' name='zipcode'
          defaultValue={userdata[0].zipcode} onChange={handleChange}/>
        </Col>
      </Row>
      <Form.Control type='submit' value='update' />
      
     </Form>
     </Container>
    );

}
export default Userprofile;