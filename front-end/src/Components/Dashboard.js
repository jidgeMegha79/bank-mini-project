import Withdraw from "./Withdraw"
import Deposit from "./Deposit";
import Transaction from './Transaction'
import Viewbalance from './Viewbalance'
import {Button, Navbar,Nav,} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {Context} from '../App'
import {useContext} from 'react'
import { Avatar } from '@mui/material';
import '../css/dashboard.css'
/****/
const Dashboard=()=>{
  const userdata=useContext(Context)
    return(
      <div className=''>
        <Navbar  bg='dark' expand='lg' variant='dark p-2 '>
          <Navbar.Brand className='d-flex align-items-center'>           
              <Avatar src="/broken-image.jpg" />
              <h5 className='p-2' > Welcome, {userdata[0].firstname}</h5>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' >
            <Nav className=''>
              <Nav.Item className='dashnav'>
                <Deposit/>
              </Nav.Item>
              <Nav.Item className='dashnav'>
                <Withdraw/>
              </Nav.Item>
              <Nav.Item className='dashnav'>
                <Transaction/>
              </Nav.Item>
              <Nav.Item className='dashnav'>
                <Viewbalance/>
              </Nav.Item>
              <Nav.Item>
              <NavLink to="/" className="nav-link bg-success text-white   ">Logout</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      
      </div>
    );
}
export default Dashboard;