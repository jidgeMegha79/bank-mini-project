import {NavLink, Outlet} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import '../css/layout.css'
import {Person3Outlined} from '@mui/icons-material';

function Layout(){
    return(      
      <div>
      <Navbar bg='dark' expand='lg' variant='dark p-2 w-100'>
        <Navbar.Brand className='navbar-brand'>Bank Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav collapse-nav" >
            <Nav className='nav-div'>     
              <Nav.Item className=' hover '>
              <NavLink to="/" className="nav-link " activeClassName='is-active'>Home </NavLink>
              </Nav.Item>
              <Nav.Item className='hover'>
                <NavLink to='/services' className="nav-link text-white " activeClassName='is-active'>services</NavLink>
              </Nav.Item>   
              <Nav.Item className=' hover'>
                <NavLink to='/contactUs' className="nav-link text-white ">Contact Us</NavLink>
              </Nav.Item>     
              <Nav.Item className=' hover'>
                <NavLink to='/login' className="nav-link text-white "><Person3Outlined/><span>Login</span></NavLink>
              </Nav.Item>       
          
            </Nav>
          </Navbar.Collapse>
        
        
      </Navbar>
      {/* <Outlet/> */}
      </div>
    );
}
export default Layout;