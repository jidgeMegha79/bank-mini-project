import React, { useState,useContext, useEffect } from 'react';
import {Button,Modal,Table,CloseButton} from 'react-bootstrap';
import Axios from 'axios'
import {Context} from '../App'
import {NavLink} from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import '../css/transaction.css'
import moment from "moment"

function Transaction() {
  const userdata=useContext(Context)
  const [transaction,setTransaction] =useState([])
  //for selected page number
  const[pageNumber,setPageNumber] = useState(0)
  const userPerPage = 10;
  const pageVisited = pageNumber * userPerPage;
  const pageCount = Math.ceil(transaction.length/userPerPage)
  //console.log(pageCount);
  const changePage=({selected})=>{
    setPageNumber(selected);
  }

  useEffect(()=> {
    Axios.post('http://localhost:3010/api/transaction',{
      id:userdata[0].id
    }).then((response)=>{
      setTransaction(response.data)
      console.log(transaction.length)
    }).catch((err)=>{
      alert("can not connect to server")
    })
    
  },[])

  return (
    <div>
      <NavLink to='/dashboard'><CloseButton className='float-end p-3'/></NavLink>
      
      <h1 className='text-center'>Transactions</h1>
      <div className='p-3'>
         <Table striped hover bordered responsive variant='dark'>
             <thead>
                 <tr>
                 <th>Activity</th>
                 <th>Amount</th>
                 <th>Remaining Balance</th>
                 <th>Date</th>
                 </tr>
             </thead>
             <tbody>
               {transaction.slice(pageVisited,pageVisited + userPerPage).map((transaction)=>(
                 <tr>                 
                  <td>{transaction.activity}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.accountbalance}</td>
                  <td>{moment(transaction.txdate).format("DD-MM-YYYY" )}</td>
                 </tr>
               ))
               }
                 
             </tbody>
         </Table>
        </div>
      <ReactPaginate
        previousLabel={"<< Prev"}
        pageCount={pageCount}
        onPageChange={changePage}
        nextLabel ={"Next >>"}
        containerClassName={"pagination-container"}
        previousLinkClassName={"previous-btn"}
        nextLinkClassName = {"next-btn"}
        activeClassName = {"pagination-active"}
        disabledClassName = {"pagination-disabled"}

      />
    
      
    </div>
  );
}

export default Transaction;