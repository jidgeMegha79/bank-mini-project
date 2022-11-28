import {Modal,Form,Button} from 'react-bootstrap'
import {useState,useContext} from 'react'
import {Context} from '../App'
import Axios from 'axios'
const Withdrow=()=>{
  const userdata=useContext(Context) //capture data from login component
  const [show, setShow] = useState(false); // for show and hide modal
  const[amount,setAmount]=useState() // for amount to be widthdraw
  const [status,setStatus] =useState('')

  const handleClose = () => {
   setShow(false);  //to close modal
   setStatus('')
  }
  //post amount withdraw request 

  const handleSubmit=()=>{
    if(amount>0){ //for checking user entered valid amount or not
    Axios.post("http://localhost:3010/api/withdraw",{
        amount:amount,
        id:userdata[0].id //captured from login
    }).then((response)=>{   
       setStatus(response.data.message)
    }).catch((err)=>{
      alert("can not connect to the server")
    })         
  }else setStatus("Please enter valid Amount")
  }
  return(
    <div>
      <Button  onClick={()=>setShow(true)}>
         Withdraw Money
      </Button>
      <Modal show={show} onHide={handleClose}  backdrop="static">
        <Modal.Header closeButton>
           <Modal.Title>Withdraw Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                placeholder="Enter amount here"
                autoFocus
                onChange={(event)=>setAmount(event.target.value)}
              />
              <h6 className='text-danger mt-3'>{status}</h6>
            </Form.Group>           
          </Form>
        </Modal.Body>
        <Modal.Footer>          
          <Button variant="primary" onClick={handleSubmit}>
            Withdrow
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Withdrow;
