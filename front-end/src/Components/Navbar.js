import {NavLink} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import '../css/layout.css'
import {Person3Outlined} from '@mui/icons-material';

function Layout(){
    return(      
      
      <Navbar collapseOnSelect bg='dark' expand='lg' variant='dark p-2 w-100'>
        <Navbar.Brand className='navbar-brand'>Bank Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav " >
            <Nav className='nav-div'>     
              <Nav.Item className=' hover '>
              <Nav.Link 
                
                  as={NavLink} 
                  to='/' eventKey="0" 
                  className="nav-link text-white ">
                  Home 
              </Nav.Link>
              </Nav.Item>
              <Nav.Item className='hover'>
                <Nav.Link as={NavLink} to='/services' eventKey='1' className="nav-link text-white" >Services</Nav.Link>
              </Nav.Item>   
              <Nav.Item className='hover'>
                <Nav.Link to='/contactUs'as={NavLink} eventKey='2' className="nav-link text-white">Contact Us</Nav.Link>
              </Nav.Item>     
              <Nav.Item className='hover'>
                <Nav.Link as={NavLink} to='/login'eventKey='3' className="nav-link text-white"><Person3Outlined/><span>Login</span></Nav.Link>
              </Nav.Item>       
          
            </Nav>
          </Navbar.Collapse>
        
        
      </Navbar>
      
      
    );
}
export default Layout;