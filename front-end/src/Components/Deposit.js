import {Modal,Form,Button} from 'react-bootstrap'
import {useState,useContext} from 'react'
import Axios from 'axios'
import {Context} from '../App'
const Deposit=(props)=>{
    const userdata=useContext(Context)
    const [show, setShow] = useState(false);
    const [amount,setAmount]=useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit=()=>{
      if(amount>0){
      Axios.post('http://localhost:3010/api/deposit',{
        amount:amount,
        id:userdata[0].id
      }).then((response)=>{
         alert(response.data.message)
      }).catch((err)=>{
        alert("can not connect to server")
      })
      setShow(false)//close modal
      setAmount()
      
    }else alert("please enter valid amount")
    
  }
    return(
        <div>
        <Button  onClick={handleShow}>
        Deposit Money
      </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deposit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          
              <Form.Control
                type="text"
                placeholder="Enter amount here"
                autoFocus
                value={amount}
                onChange={(event)=>setAmount(event.target.value)}
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>          
          <Button variant="primary" onClick={handleSubmit}>
            Deposit
          </Button>
        </Modal.Footer>
      </Modal>
</div>
    );
}
export default Deposit;
