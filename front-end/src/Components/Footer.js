import '../css/footer.css'
import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Footer=()=>{
    return(
        <Container fluid className='footer-area'>
            <Container className='p-2'>
            <Row className='footer-row'>
                <Col className='col-md-4 col-12 '>
                <div>
                    <h3>Links</h3>
                    <hr/>
                    <ul className='footer-ul' >
                        <li><Link to='/about'>About </Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to ='#'>Features</Link></li>
                        <li><Link to='/'>Home</Link></li>
                    </ul>
                </div>
                </Col>
                <Col className='col-md-4 col-12'>
                <div>
                <h3>Support</h3>
                <hr/>
                    <ul className='footer-ul'>
                        <li><Link to='#'>FAQ's</Link></li>
                        <li><Link to='#'>Terms and conditions</Link></li>
                        <li><Link to ='#'>Privacy Policy</Link></li>
                        <li><Link to='/contactUs'>Contact Us</Link></li>
                    </ul>

                </div>
                </Col>
                <Col className='col-md-4 col-12'>
                <div>
                <h3>Address</h3>
                <hr/>
                    <ul className='footer-ul'>
                        <li>Location : Shivaji Nagar, Aurangabad</li>
                        <li>Email : xyz@gmail.com</li>
                        <li>Phone : XXXXXXXXXX</li>
                        
                    </ul>

                </div>
                </Col>
            </Row>
            <hr></hr>
            <div className='text-center'>@ 2022- All Rights Reserved By xyx.com</div>
            </Container>
        </Container>
    );
}
export default Footer;