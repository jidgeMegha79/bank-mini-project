import {Card,Col,Row,Button,ListGroup} from 'react-bootstrap'
import feature1 from '../images/feature1.png';
import feature2 from '../images/feature2.png';
import feature3 from '../images/feature3.png';
import {Car, CarRental} from '@mui/icons-material'
import '../css/Services.css'
import services from '../images/services.jpg'
const Services=()=>{
  return(
    <div className='container-fluid '>
      <Row className='imagecontainer' >
        <Col className='p-0'>
         <img src={services} alt="contactus" width='100%'/>
         <div className='centered'>
         <h1>Our Services</h1>
         <p></p>
         </div>
        </Col>
      </Row>   
      <Row className='d-flex rows'>
        <Col className='col-md-6 col-12 '>
          <h3>Insurance</h3>            
          <ul className='ul'>
            <li>Health Insurance</li>
            <li>Life Insurance</li>
            <li>Vehical Insurance</li>
            <li>Travel Insurance</li>              
          </ul>
          <Button >Know more</Button>            
        </Col>
        <Col className='col-md-6 col-12'>
           <img src={feature2} alt="" width='80%'/>
        </Col>
      </Row>     
      
      <Row className='d-flex color rows '>
        <Col className='col-md-6 col-12 order-sm-2 order-lg-1' >
           <img src={feature3} alt="" width='80%'/>
        </Col>
        <Col className='col-md-6 col-12 order-sm-1 order-lg-2' >
            <h3>LOANS</h3>
            <h6>We are providing all types of loan with low rate of interest than others.</h6>
            <ul className='ul'>
              <li>Home Loan</li>
              <li>Personal Loan</li>
              <li>Car Loan</li>
              <li>Loan against securities</li>
            </ul>
            <Button>Know more</Button>
        </Col>
         
      </Row> 
          
      <Row className='d-flex rows'>
        <Col className='col-md-6 col-12'>
            <h3>Investment</h3>
          
            <ul className='ul'>
              <li>Fixed Deposit(FD)</li>
              <li>Reccuring Deposit(RD)</li>
              
            </ul>
            <Button>Know more</Button>
        </Col>
        <Col className='col-md-6 col-12'>
           <img src={feature1} alt="" width='80%'/>
        </Col>
      </Row>
      
    </div>


  );
}
export default Services;