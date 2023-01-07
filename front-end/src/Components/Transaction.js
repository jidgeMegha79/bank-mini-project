import React, { useState,useContext, useEffect } from 'react';
import {Button,Modal,Table,CloseButton} from 'react-bootstrap';
import Axios from 'axios'
import {Context} from '../App'
import {NavLink} from 'react-router-dom'

function Transaction() {
  const userdata=useContext(Context)
  const [transaction,setTransaction] =useState([])

  useEffect(()=> {
    Axios.post('http://localhost:3010/api/transaction',{
      id:userdata[0].id
    }).then((response)=>{
      setTransaction(response.data)
    }).catch((err)=>{
      alert("can not connect to server")
    })
    
  },[])
  return (
    <div>
      <NavLink to='/dashboard'><CloseButton className='float-end p-3'/></NavLink>
      
      <h1 className='text-center'>Transactions</h1>
      <div className='p-3'>
         <Table striped hover bordered responsive>
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
        </div>
    
      
    </div>
  );
}

export default Transaction;