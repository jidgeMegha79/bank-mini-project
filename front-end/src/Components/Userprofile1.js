import {Row,Col,Form} from 'react-bootstrap'
import user from '../json/ProfileEdit'
import { useState,useContext } from 'react';
import {Context} from '../App'
const Userprofile1=()=>{
   const [formdata,setFormdata]=useState(user)
   const userdata=useContext(Context)
   const [userInfo,setUserinfo]=useState(userdata[0])
    return(   
    <div>
        {
         formdata.map((formvalue)=>{
            return(
             <>
             <Form>
             <Row>
                <Col className="col-6">
                 <h1>hii</h1> 
                 <Form.Label>{formvalue.lable}</Form.Label>  
                 <Form.Control type='text' 
                 defaultValue={formvalue.value}/>
            
                
               </Col>
            </Row>
            </Form>
            </>
            );
         })
                    
               
           
        }
    </div>
       
    );
}
export default Userprofile1;