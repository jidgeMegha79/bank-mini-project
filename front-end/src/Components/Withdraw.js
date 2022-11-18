import {Modal,Form,Button} from 'react-bootstrap'
import {useState,useContext} from 'react'
import {Context} from '../App'
import Axios from 'axios'
const Withdrow=()=>{
  const userdata=useContext(Context) //capture data from login component
  const [show, setShow] = useState(false); // for show and hide modal
  const[amount,setAmount]=useState() // for amount to be widthdraw

  const handleClose = () =>  setShow(false);  //to close modal
  //post amount withdraw request 

  const handleSubmit=()=>{
    if(amount>0){ //for checking user entered valid amount or not
    Axios.post("http://localhost:3010/api/withdraw",{
        amount:amount,
        id:userdata[0].id //captured from login
    }).then((response)=>{   
       alert(response.data.message)
    }).catch((err)=>{
      alert("can not connect to the server")
    })
    setShow(false) //to close modal      
  }else alert("Please enter valid Amount")
  }
  return(
    <div>
      <Button  onClick={()=>setShow(true)}>
         Withdraw Money
      </Button>
      <Modal show={show} onHide={handleClose}>
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
