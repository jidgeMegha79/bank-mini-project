
import {Container,Row,Col} from 'react-bootstrap'
import '../css/home2.css'
import ContactUs from './ContactUs'
const Home2=()=>{
    return(
        
        <div style={{backgroundColor:'#dddddd'}}>
        
        <Container className='pt-5 pb-5'>
            <h1 className='text-center mb-3'>Why Join Us?</h1>
            <Row className='d-flex  flex-row justify-content-around pt-3' style={{overflowWrap:'break-word'}}>
                <Col className='col-md-6 col-lg-3 p-3 hovereffect'>
                   <div>
                    <h4>Incredible infrastructure</h4>
                    <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor 
                    incididunt ut labore dolore magna aliqua.</p>
                   </div>
                </Col>
                <Col className='col-md-6 col-lg-3 p-3  hovereffect' >
                <div className='me-2 '>
                    <h4>Incredible infrastructure</h4>
                    <p >Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor 
                     incididunt ut labore dolore magna aliqua.</p>
                </div>
                </Col>
                <Col className='col-md-6 col-lg-3 p-3 hovereffect'>
                <div>
                    <h4>Incredible infrastructure</h4>
                    <p >Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor 
                    incididunt ut labore dolore magna aliqua.
                    </p>
                </div>
                </Col>
            
              
             
            </Row>
        </Container>
        
        
        </div>
        
    
    );
}
export default Home2;