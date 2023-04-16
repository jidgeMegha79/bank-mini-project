
import { Navbar,Nav,Offcanvas} from 'react-bootstrap'
import {NavLink,useLocation} from 'react-router-dom'
//import {Context} from '../App'
import {useState} from 'react'
import { Avatar } from '@mui/material';
import Userprofile from "./Userprofile"
import { Container } from "react-bootstrap";
import Dashbody from './Dashbody'
import {Edit} from '@mui/icons-material'
import {Outlet} from 'react-router-dom'
import Footer from '../Components/Footer';
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
        <Navbar collapseOnSelect bg='dark' expand='lg' variant='dark p-2 '>
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
              <Nav.Link  as={NavLink} eventKey='0' to="deposit" className="nav-link text-white">Deposit Money</Nav.Link>
              </Nav.Item>
              <Nav.Item className='dashnav hover'>
              <Nav.Link as={NavLink} eventKey='1' to="withdraw" className="nav-link text-white">Withdraw Money</Nav.Link>
              </Nav.Item>
              <Nav.Item className='dashnav hover'>
              <Nav.Link as={NavLink} eventKe='2' to="transaction" className="nav-link text-white">View Transaction</Nav.Link> 
              </Nav.Item>
              <Nav.Item className='dashnav hover'>
              <Nav.Link as={NavLink} eventKey='3' to="viewbalance" className="nav-link text-white">View Account Balance</Nav.Link>
              </Nav.Item>
              <Nav.Item className='hover'>
              <Nav.Link as={NavLink} eventKey='4' to="/" className="nav-link  link-color text-white  ">Logout</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {location.pathname ==="/dashboard" ? <Dashbody/>:null}
        <Outlet/>
       <Footer/>
      </div>
    );
}
export default Dashboard;