import {Container,Form,Button,CloseButton} from 'react-bootstrap'
import {useState,useContext} from 'react'
import Axios from 'axios'
import {Context} from '../App'
import {NavLink} from 'react-router-dom'
const Deposit=(props)=>{
    const userdata=useContext(Context)
    const [amount,setAmount]=useState('')
    const [status,setStatus] = useState('')
    const handleSubmit=()=>{
      if(amount>0){
      Axios.post('http://localhost:3010/api/deposit',{
        amount:amount,
        id:userdata[0].id
      }).then((response)=>{
         setStatus(response.data.message)
      }).catch((err)=>{
        alert("can not connect to server")
      })
      setAmount()
      
    }else setStatus("please enter valid amount")
    
  }
    return(
    <Container className='dashhero-container'> 
       
      <div>
      <NavLink to='/dashboard'><CloseButton className='float-end p-3'/></NavLink>
          <h1>Deposit Form</h1>
      </div>
      <div className=''>
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
      {status}
      <div>
        <Button className='dashhero-btn' onClick={handleSubmit}>
             Deposit amount
        </Button>
      </div>
 
      
     </Container>

    );
}
export default Deposit;
