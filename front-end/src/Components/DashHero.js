import {Container,Form,Button} from 'react-bootstrap'
import {useState} from 'react'
import dashhero from '../css/dashhero.css'
const DashHero=(props)=>{
  const[amount,setAmount]=useState(0);
  const[submit,setSubmit]=useState(false);
  const userdata={
    amt:amount,
    sbt:submit
  }
  props.onDataSubmit(userdata)
  console.log()

 return(
   <Container className='dashhero-container'> 
    <div className='dashhero-div'> 
     <div>
         <h1>{props.name}</h1>
     </div>
     <div >
        <Form>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                placeholder="Enter amount here"
                autoFocus
                onChange={(event)=>setAmount(event.target.value)}
              />
              <h6 className='text-danger mt-3'></h6>
            </Form.Group>           
        </Form>
     </div>
     {props.status}
     <div>
       <Button className='dashhero-btn' onClick={(e)=>setSubmit(true)}>
            {props.button}
       </Button>
     </div>

    </div>
    </Container>
 );
}
export default DashHero;