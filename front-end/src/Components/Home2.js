
import {Container,Row,Col} from 'react-bootstrap'
import '../css/home2.css'
import { Sms, Dashboard,SettingsCell } from '@mui/icons-material'
const Home2=()=>{
    return(        
     <div style={{backgroundColor:'#dddddd'}}>        
        <Container fluid className='p-5 '>
            <h1 className='text-center '>Our Features</h1>
            <Row className='d-flex   flex-wrap feature-row s' >
                <Col className='col-md-6 col-lg-3 col-sm-6 feature-col flex-fill'>
                   <div className='featurebox'>
                       <div className='icon'>
                         <Sms size='large' className='material-icons md-36'/>
                       </div>
                     <h2>Incredible infrastructure</h2>
                     <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor 
                      incididunt ut labore dolore magna aliqua.</p>
                    </div>
                </Col>
                <Col className='col-md-6 col-lg-3 col-sm-6 feature-col flex-fill' >
                <div className='featurebox'>
                    <div className='icon'><Dashboard className='material-icons md-36'/></div>
                    <h2>Incredible infrastructure</h2>
                    <p >Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor 
                     incididunt ut labore dolore magna aliqua.</p>
                </div>
                </Col>
                <Col className='col-md-6 col-lg-3  feature-col flex-fill'>
                <div className='featurebox'>
                    <div className='icon'><SettingsCell className='material-icons md-36'/></div>
                    <h2>Incredible infrastructure</h2>
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