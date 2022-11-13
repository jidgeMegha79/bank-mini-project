import {Card,Col,Row,Button,ListGroup} from 'react-bootstrap'
import feature1 from '../images/feature1.png';
import feature2 from '../images/feature2.png';
import feature3 from '../images/feature3.png';
import {Car, CarRental} from '@mui/icons-material'
import '../css/Services.css'
const Services=()=>{
  return(
    <div className='container-fluid p-3'>
      <div className='p-5'>
        <Row className='d-flex'>
          <Col className='col-md-6 col-sm-12 '>
            <h3>Insurance</h3>
            <h6></h6>
            <ul className='ul'>
              <li>Health Insurance</li>
              <li>Life Insurance</li>
              <li>Vehical Insurance</li>
              <li>Travel Insurance</li>
              
            </ul>
            <Button >Know more</Button>
            
          </Col>
          <Col className='col-md-6 col-sm-12'>
           <img src={feature2} alt="" width='100%'/>
          </Col>
        </Row>
      </div>
      <div className='color p-5'>
        <Row className='d-flex '>
          <Col className='col-md-6 col-sm-12'>
           <img src={feature1} alt="" width='100%'/>
          </Col>
          <Col className='col-md-6 col-sm-12'>
            <h3>LOANS</h3>
            <h6>We are providing all types of loan with low rate of interest than others.</h6>
            <ul className='ul'>
              <li>Home Loan</li>
              <li>Personal Loan</li>
              <li><CarRental/>Car Loan</li>
              <li>Loan against securities</li>
            </ul>
            <Button>Know more</Button>
          </Col>
         
        </Row>
  
    </div>
      <div className='p-5 '>
        <Row className='d-flex'>
          <Col className='col-md-6 col-sm-12'>
            <h3>Investment</h3>
          
            <ul className='ul'>
              <li>Fixed Deposit(FD)</li>
              <li>Reccuring Deposit(RD)</li>
              
            </ul>
            <Button>Know more</Button>
          </Col>
          <Col className='col-md-6 col-sm-12'>
           <img src={feature3} alt="" width='100%'/>
          </Col>
        </Row>
      </div>
    </div>


  );
}
export default Services;