
import { Navbar,Nav,Offcanvas} from 'react-bootstrap'
import {NavLink,useLocation} from 'react-router-dom'
import {Context} from '../App'
import {useContext,useState} from 'react'
import { Avatar } from '@mui/material';
import '../css/dashboard.css'
import Userprofile from "./Userprofile"
import { Container } from "react-bootstrap";
import Dashbody from './Dashbody'

import {Outlet} from 'react-router-dom'
/****/
const Dashboard=()=>{
  const userdata=useContext(Context)
  const [show, setShow] = useState(false);  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let location=useLocation();
    return(
      <div className=''>
        <Navbar  bg='dark' expand='lg' variant='dark p-2 '>
          <Navbar.Brand className='d-flex align-items-center'>           
              <Avatar src="/broken-image.jpg" onClick={handleShow} />
              <h5 className='p-2' > Welcome {userdata[0].firstname}</h5>
              <Offcanvas show={show} onHide={handleClose} backdrop="static" style={{width:'50%'}}>
                <Container>
                 <Offcanvas.Header closeButton>
                  <Offcanvas.Title></Offcanvas.Title>
                 </Offcanvas.Header>
                 <Offcanvas.Body>
                    <Userprofile handleShow={setShow}/>
                 </Offcanvas.Body>
                </Container>
              </Offcanvas>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' >
            <Nav className=''>
              <Nav.Item className='dashnav'>
              <NavLink to="deposit" className="nav-link ">Deposit Money</NavLink>
              </Nav.Item>
              <Nav.Item className='dashnav'>
              <NavLink to="withdraw" className="nav-link ">Withdraw Money</NavLink>
              </Nav.Item>
              <Nav.Item className='dashnav'>
              <NavLink to="transaction" className="nav-link ">View Transaction</NavLink> 
              </Nav.Item>
              <Nav.Item className='dashnav'>
              <NavLink to="viewbalance" className="nav-link ">View Account Balance</NavLink>
              </Nav.Item>
              <Nav.Item>
              <NavLink to="/" className="nav-link bg-success text-white   ">Logout</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {location.pathname ==="/dashboard" ? <Dashbody/>:null}
        <Outlet/>
       
      </div>
    );
}
export default Dashboard;