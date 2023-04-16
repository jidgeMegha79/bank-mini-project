import { Form,Col,Row } from "react-bootstrap";
import {getCountries, getStates} from 'country-state-picker'
import {useState, useEffect} from 'react'
import React from 'react'

 function Address(props){
     const[country,setCountry]=useState([])
     const[countrycode,setCountrycode]=useState('')
     const[state,setState]=useState(['in'])
     const[address1,setAddress1]=useState('')
     const[address2,setAddress2]=useState('')
     const[city,setCity]=useState('')
     const[zipcode,setZipcode]=useState('')
     const[selectedState,setSelectedState]=useState('')
       //following code return all country list     
      useEffect(()=>{
      const getcountry=()=>{
      const countryOption=getCountries();
      setCountry(countryOption);
      }
      getcountry()
      },[]);
      //following code get state list depending on country code
      useEffect(()=>{
          const getstates=()=>{
              const stateOption=getStates(countrycode);
              setState(stateOption)
              
          }
          getstates()
      },[countrycode]);
    
     //when user select any country,this get countryCode for selected country
     const countryChangeHandler=(event)=>{
         const a=event.target.value;
         setCountrycode(a)
     }
     //object for storing all data
    const userAddress={
        addressline1:address1,
        addressline2:address2,
        City:city,
        Zipcode:zipcode,
        countryname:countrycode,
        statename:selectedState
    }    
     props.onAddressSave(userAddress)
    
    return(
     <div>    
        <Row className='mb-3'>
          <Col className='col-4'>
            <Form.Label>Address Line 1</Form.Label>
          </Col>
          <Col className='col-8'>
            <Form.Control type='text' 
            onChange={(e)=>setAddress1(e.target.value)} required
            placeholder="Enter Address Line 1"/>
          </Col>   
          
        </Row>
        <Row className='mb-3' >
          <Col className='col-4'>
            <Form.Label>Address Line 2</Form.Label>
          </Col>
          <Col className='col-8'>  
            <Form.Control type='text' 
            onChange={(event)=>setAddress2(event.target.value)}
            placeholder='Enter Address Line 2'/>            
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col className='col-4'>        
            <Form.Label>Country</Form.Label>
          </Col>
          <Col className='col-8'>
            <Form.Select  onChange={countryChangeHandler} required >
                <option value="">select country</option>                              
                {
                    country.map((countryget)=>(
                        //for every child shoud have unique key error value is important
                        <React.Fragment key={countryget.code}>
                         <option value={countryget.code} >{countryget.name}</option>
                         </React.Fragment>
                         ))             
                }
               
            </Form.Select>           
            
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col className='col-4'>
            <Form.Label>State</Form.Label>
          </Col>
          <Col className='col-8'> 
            <Form.Select onChange={(e)=>setSelectedState(e.target.value)} required>
                <option value="">select state</option>
                {
                    state && state.map((stateget)=>(
                        <React.Fragment key={stateget.toString()}>
                        <option >{stateget}</option>
                        </React.Fragment>
                    ))
                };
            </Form.Select>
          </Col>       
        
        </Row>
        <Row className='mb-3'>
          <Col className='col-4'>         
            <Form.Label>City</Form.Label>
          </Col>
          <Col className='col-8'>
            <Form.Control type='text' 
            onChange={(e)=>setCity(e.target.value)} required
            placeholder='Enter City'/>        
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col className='col-4'>        
            <Form.Label>Zip Code</Form.Label>
          </Col>
          <Col className='col-8'>
            <Form.Control type='number'
             onChange={(e)=>setZipcode(e.target.value)} required
             placeholder='Enter zip code'/>        
          </Col>
        </Row>    
         
      </div>
    );
}
export default Address;