import { Row,Form,Card,Col } from "react-bootstrap";
import {useState} from 'react'


function Name(props){
  //define useState for all input field
  const[userName,setUserName]=useState({}) //create empty object
  //onchange handler
  const handleInput=(event)=>{
    //following statement return previous state of userName object
    // and dynamically add key value pairs to the userName object
   setUserName({...userName,[event.target.name]:event.target.value})
   
  }
  //this is lift data from child to its parent
  props.onNameSave(userName)
 
  return(
    <Card>
     <Card.Title className='m-2'>Name:</Card.Title>
     <Card.Body>
        <Row>
          <Col className='col'>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' placeholder='First Name' name='fname'
                 onChange={handleInput}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
                <Form.Label>Middle Name</Form.Label>
                <Form.Control type='text' placeholder='Middle Name' name='mname' 
                onChange={handleInput} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className='col-lg-6'>
          <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type='text' placeholder='Last Name' name='lname' 
               onChange={handleInput}/>
          </Form.Group>
          </Col>
        </Row>
        </Card.Body>
    </Card>
    );
}
export default Name;