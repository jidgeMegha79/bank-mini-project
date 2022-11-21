import Withdraw from "./Withdraw"
import Deposit from "./Deposit";
import Transaction from './Transaction'
import Viewbalance from './Viewbalance'
import {Button, Navbar,Nav,} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {Context} from '../App'
import {useContext} from 'react'
/****/
const Dashboard=()=>{
  const userdata=useContext(Context)
    return(
      <div className=''>
        <Navbar  bg='primary' expand='lg' variant='dark p-2 '>
          <Navbar.Brand>Welcome {userdata[0].firstname}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' >
            <Nav >
              <Nav.Item>
                <Deposit/>
              </Nav.Item>
              <Nav.Item>
                <Withdraw/>
              </Nav.Item>
              <Nav.Item>
                <Transaction/>
              </Nav.Item>
              <Nav.Item>
                <Viewbalance/>
              </Nav.Item>
              <Nav.Item>
              <NavLink to="/" className="nav-link  ">Logout</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      
      </div>
    );
}
export default Dashboard;