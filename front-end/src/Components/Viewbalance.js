import {NavLink} from 'react-router-dom'
import React, { useState,useContext, useEffect } from 'react';
import Axios from 'axios'
import {Context} from '../App'
import {CloseButton,Container} from 'react-bootstrap'

const Viewbalance=()=>{
const userdata=useContext(Context)
const [balance,setBalance]=useState()
useEffect(() => {
 Axios.post("http://localhost:3010/api/viewbalance",{
  id:userdata[0].id
 }).then((response)=>{
     setBalance(response.data[0].balance)
 }).catch((err)=>{
   alert("can not connect to server")
 })
 setBalance()
},[])

return( 
    <Container className='dashhero-container'>
      <div className='dashhero-div'>
        <div>
          <NavLink to='/dashboard'><CloseButton  className='float-end p-3'/></NavLink>
          <h2>Your account balance is:</h2>
        </div>
        <hr/>
        <div>
          <h4>₹ {balance}</h4>      
        </div>
      </div>
    </Container>
  );
}
export default Viewbalance;