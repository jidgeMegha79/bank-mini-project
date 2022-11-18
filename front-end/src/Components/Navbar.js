import {NavLink, Outlet} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import '../css/layout.css'

function Layout(){
    return(      
      <div>
      <Navbar bg='dark' expand='lg' variant='dark p-2'>
        <Navbar.Brand>Bank Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav>     
              <Nav.Item className='me-3 hover '>
              <NavLink to="/" className="nav-link ">Home </NavLink>
              </Nav.Item>
              <Nav.Item className='me-3 hover'>
                <NavLink to='/services' className="nav-link text-white ">services</NavLink>
              </Nav.Item>   
              <Nav.Item className='me-3 hover'>
                <NavLink to='/contactUs' className="nav-link text-white ">Contact Us</NavLink>
              </Nav.Item>     
              <Nav.Item className='me-3 hover'>
                <NavLink to='/signup' className="nav-link text-white ">Signup</NavLink>
              </Nav.Item>     
              <Nav.Item className='me-3 hover'>
                <NavLink to='/login' className="nav-link text-white ">Login</NavLink>
              </Nav.Item>       
          
            </Nav>
          </Navbar.Collapse>
        
        
      </Navbar>
      {/* <Outlet/> */}
      </div>
    );
}
export default Layout;