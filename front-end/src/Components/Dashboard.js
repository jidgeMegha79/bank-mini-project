import Withdraw from "./Withdraw"
import Deposit from "./Deposit";
import Transaction from './Transaction'
import Viewbalance from './Viewbalance'
import { Navbar,Nav,Offcanvas} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {Context} from '../App'
import {useContext,useState} from 'react'
import { Avatar } from '@mui/material';
import '../css/dashboard.css'
import Userprofile from "./Userprofile"
import { Container } from "react-bootstrap";
/****/
const Dashboard=()=>{
  const userdata=useContext(Context)
  const [show, setShow] = useState(false);  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
      <div className=''>
        <Navbar  bg='dark' expand='lg' variant='dark p-2 '>
          <Navbar.Brand className='d-flex align-items-center'>           
              <Avatar src="/broken-image.jpg" onClick={handleShow} />
              <h5 className='p-2' > Welcome</h5>
              <Offcanvas show={show} onHide={handleClose} backdrop="static" style={{width:'50%'}}>
                <Container>
                 <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Edit Profile</Offcanvas.Title>
                 </Offcanvas.Header>
                 <Offcanvas.Body>
                    <Userprofile/>
                 </Offcanvas.Body>
                </Container>
              </Offcanvas>
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
      
        <Userprofile/>
      
      </div>
    );
}
export default Dashboard;