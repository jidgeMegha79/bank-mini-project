
import { Navbar,Nav,Offcanvas} from 'react-bootstrap'
import {NavLink,useLocation} from 'react-router-dom'
import {Context} from '../App'
import {useContext,useState} from 'react'
import { Avatar } from '@mui/material';
import Userprofile from "./Userprofile"
import { Container } from "react-bootstrap";
import Dashbody from './Dashbody'
import {Edit} from '@mui/icons-material'
import {Outlet} from 'react-router-dom'
/****/
const Dashboard=()=>{
  //const userdata=useContext(Context)
  const userdata=(JSON.parse(sessionStorage.getItem("userdata")));
  console.log(userdata)
  const [show, setShow] = useState(false);  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let location=useLocation();
    return(
      <div className=''>
        <Navbar  bg='dark' expand='lg' variant='dark p-2 '>
          <Navbar.Brand className='d-flex align-items-center'>           
              <Avatar src="/broken-image.jpg"  />
              <h4 className='p-2' >{userdata[0].firstname}</h4>
              <button><span><Edit onClick={handleShow}/></span></button>
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
            <Nav >
              <Nav.Item className='dashnav hover'>
              <NavLink to="deposit" className="nav-link text-white">Deposit Money</NavLink>
              </Nav.Item>
              <Nav.Item className='dashnav hover'>
              <NavLink to="withdraw" className="nav-link text-white">Withdraw Money</NavLink>
              </Nav.Item>
              <Nav.Item className='dashnav hover'>
              <NavLink to="transaction" className="nav-link text-white">View Transaction</NavLink> 
              </Nav.Item>
              <Nav.Item className='dashnav hover'>
              <NavLink to="viewbalance" className="nav-link text-white">View Account Balance</NavLink>
              </Nav.Item>
              <Nav.Item className='hover'>
              <NavLink to="/" className="nav-link  link-color text-white  ">Logout</NavLink>
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