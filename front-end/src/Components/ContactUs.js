import {AddLocationAlt,Email,Phone} from '@mui/icons-material';
import {Form} from 'react-bootstrap'
import Contactimage from '../images/services.jpg'
import '../css/contactus.css'
import Button from '@restart/ui/esm/Button';

const ContactUs=()=>{
  const handleSubmit=(event)=>{
   event.preventDefault()
   alert("Your message send successfully")
  }
  return(
    <div> 
      <div className='imagecontainer'>
        <img src={Contactimage} width="100%" alt='contactUs img'></img>
        <div className='centered'>
          <h1>Contact Us</h1>
          <p>Get touch in with us</p>
        </div>
      </div>  
          
      <div className="container mb-5 p-5">
        <div className='text-center mb-5'>
          <h1>Drop Us A Message For Any Query</h1>
        </div>
        <div className="row d-flex">
          <div className='col-md-12 col-lg-5 '>
            <div className='d-flex  p-2 border border-2 mb-4'>
              <AddLocationAlt color='primary' fontSize='large' />  
                <div>                    
                  <div>Address:</div> 
                  <div>Shivaji Nagar,Aurangabad</div>  
                </div>
            </div>
            <div className='d-flex p-2 border border-2 mb-4 '>
              <Phone color='primary'fontSize='large'/>
                <div>                    
                  <div>Phone:</div> 
                  <div>+91-XXXXXXXXXX</div>  
                </div>
            </div>
            <div className='d-flex  p-2 border border-2 mb-4 '>
              <Email color='primary' fontSize='large'/>
                <div className='p-2'>                    
                  <div>Email:</div> 
                  <div>xyz@gmail.com</div>  
                </div>
            </div>
          </div>  {/* first column closed */}

          <div className='col-md-12 col-lg-7'>
            <Form onSubmit={handleSubmit}>
              <div className='row d-flex'>
                <div className='col-lg-6 col-md-6 mb-4'>
                  <Form.Control type='text' placeholder='Name' />
                </div>
                <div className='col-lg-6 col-md-6 mb-4'>
                  <Form.Control type='text' placeholder='Email' />
                </div>
                <div className='col-lg-6 col-md-6 mb-4'>
                  <Form.Control type='text' placeholder='Phone' />
                </div>
                <div className='col-lg-6 col-md-6 mb-4'>
                  <Form.Control type='text' placeholder='Subject' />
                </div>
                <div className=' col-md-12 mb-4'>
                  <Form.Control as='textarea' placeholder='Write your message...' style={{height:'100px'}}/>
                            
                </div>
                <div className=' col-12 d-grid text-end' >
                  <Button className="buttons" as='input' type='submit' value='Send Message' size='lg'/>                  
                </div>
              </div>
            </Form>
          </div>
        </div>{/* row closed */}

      </div> {/* container closed*/}
    </div>
  );
}
export default ContactUs;