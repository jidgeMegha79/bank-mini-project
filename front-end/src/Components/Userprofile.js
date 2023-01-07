import {Form,Row,Col,Container,Button} from 'react-bootstrap'
import {useState,useContext,useEffect} from 'react'
import {Context} from '../App'
import Axios from 'axios'
import '../css/Userprofile.css'
import { Avatar} from '@mui/material';
import {Edit} from '@mui/icons-material'
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal"

const Userprofile=({handleShow})=>{
    const userdata=useContext(Context)
    const [userInfo,setUserinfo]=useState(userdata[0])
    const [isDisabled,setIsDisabled]=useState(true)
    const [formErrors,setFormErrors]=useState({})
    const [status,setStatus]=useState("")
    const[isSubmit,setIssubmit]=useState()
    const [modalShow, setModalShow] = useState(false);
  
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
            setModalShow(true)
           // handleShow(false)
          }else{
            setStatus("something went wrong!error while updating data")
          }
        }).catch((err)=>{
          alert(err)
        })
      }
      },[formErrors,isSubmit]);
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
    <div>
    <Container className='main-container'> 
      <h3 className='title'>Update profile</h3>
      <div className='avatar'>
      <Avatar className='svg-icon'/>
      </div>
     <Form onSubmit={handleSubmit} className='form-container mb-3'>
        <div className='edit-btn-div'>
         <Button className='edit-btn' onClick={()=>setIsDisabled(false)}>
         <span>Edit</span><Edit/></Button>
        </div>
        
       <h3>{status}</h3>      
       <Row className='d-flex mb-3'>
         <Col className='col-6'>
          <Form.Label>Firstname</Form.Label>
          <Form.Control type='text' 
           name='firstname' defaultValue={userdata[0].firstname}
           onChange={handleChange} disabled={isDisabled} autoFocus/>
           <p>{formErrors.firstname} </p>
         </Col>
         <Col className='col-6'>
          <Form.Label>Middlename</Form.Label>
          <Form.Control type='text' 
           name='middlename' defaultValue={userdata[0].middlename}
           onChange={handleChange} disabled={isDisabled}/>
           <p>{formErrors.middlename}</p>
         </Col>
         <Col className='col-6'>
          <Form.Label>Lastname</Form.Label>
          <Form.Control type='text' 
           name='lastname' defaultValue={userdata[0].lastname}
           onChange={handleChange}
           disabled={isDisabled}/>
           <p>{formErrors.lastname}</p>
         </Col>
      </Row>
      <Row className='mb-3'>
        <Col className='col-6'>
          <Form.Label>Email Id</Form.Label>
          <Form.Control type='email' name='emailid'
          defaultValue={userdata[0].emailid} 
          onChange={handleChange}
          disabled={isDisabled}/>
          <p>{formErrors.email}</p>
        </Col>
        <Col className='col-6'>
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type='text' name='phonenumber'
          defaultValue={userdata[0].phonenumber}
          onChange={handleChange}
          disabled={isDisabled}/>
          <p>{formErrors.phoneno}</p>
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col>
         <Form.Label>Address Line 1</Form.Label>
          <Form.Control type='text' name='addressline1'
          defaultValue={userdata[0].addressline1} 
          onChange={handleChange}
          disabled={isDisabled}/>
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col>
         <Form.Label>Address Line 2</Form.Label>
          <Form.Control type='text' name='addressline2'
          defaultValue={userdata[0].addressline2}
           onChange={handleChange}
           disabled={isDisabled}/>
        </Col>
      </Row>
      
      <Row className='mb-3'>
        <Col className='col-6'>
          <Form.Label>Country</Form.Label>
          <Form.Control type='text' name='country'
          defaultValue={userdata[0].country} 
          onChange={handleChange}
          disabled={isDisabled}/>
        </Col>
        <Col className='col-6'>
          <Form.Label>State</Form.Label>
          <Form.Control type='text' name='state'
          defaultValue={userdata[0].state}
           onChange={handleChange}
           disabled={isDisabled}/>
        </Col>
      </Row>
      
      <Row className='mb-5'>
        <Col className='col-6'>
          <Form.Label>City</Form.Label>
          <Form.Control type='text' name='city'
          defaultValue={userdata[0].city}
          onChange={handleChange}
          disabled={isDisabled}/>
        </Col>
        <Col className='col-6'>
          <Form.Label>Zip code</Form.Label>
          <Form.Control type='text' name='zipcode'
          defaultValue={userdata[0].zipcode} 
          disabled={isDisabled}
          onChange={handleChange}/>
        </Col>
      </Row>
      <Row className='submit-row '>
        <Col className='col-4 d-grid'>
          <Button type='submit'  className='update-btn' disabled={isDisabled}>Update</Button>
        </Col>
      </Row>
     </Form>
     </Container>
     <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
    );

}
export default Userprofile;