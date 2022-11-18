import React, { useState,useContext } from 'react';
import {Button,Modal,Table} from 'react-bootstrap';
import Axios from 'axios'
import {Context} from '../App'

function Transaction() {
  const userdata=useContext(Context)
  const [show, setShow] = useState(false);
  const [transaction,setTransaction] =useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    Axios.post('http://localhost:3010/api/transaction',{
      id:userdata[0].id
    }).then((response)=>{
      setTransaction(response.data)
    }).catch((err)=>{
      alert("can not connect to server")
    })
    
  }
  return (
    <div>
      <Button  onClick={handleShow}>
       View Transaction
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        fullscreen={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Table>
             <thead>
                 <tr>
                 <th>Activity</th>
                 <th>Amount</th>
                 <th>Remaining Balance</th>
                 <th>Date</th>
                 </tr>
             </thead>
             <tbody>
               {transaction.map((transaction)=>(
                 <tr>                 
                  <td>{transaction.activity}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.accountbalance}</td>
                  <td>{transaction.txdate}</td>
                 </tr>
               ))
               }
                 
             </tbody>
         </Table>
        </Modal.Body>
    
      </Modal>
    </div>
  );
}

export default Transaction;