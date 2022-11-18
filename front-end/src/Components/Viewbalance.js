import {Button,Modal} from 'react-bootstrap'
import React, { useState,useContext } from 'react';
import Axios from 'axios'
import {Context} from '../App'

const Viewbalance=()=>{
const userdata=useContext(Context)
const [show, setShow] = useState(false);
const [balance,setBalance]=useState()

const handleClose = () => setShow(false);
const handleShow = () => {
 setShow(true);
 Axios.post("http://localhost:3010/api/viewbalance",{
  id:userdata[0].id
 }).then((response)=>{
     setBalance(response.data[0].balance)
 }).catch((err)=>{
   alert("can not connect to server")
 })
 setBalance()
}
return(  

    <div>
      <Button  onClick={handleShow}>
        View Account Balance
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Your Account Balance </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <h5>₹ {balance}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Viewbalance;