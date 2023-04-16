import { Carousel} from "react-bootstrap";
import '../css/Home.css'
import { Outlet } from "react-router";
import CrouselData from "../json/Home.js"
import { useState, useEffect } from "react";


const Home=()=>{
    const[crouselData,setCrouselData]=useState(CrouselData)
    useEffect(()=>{
        setCrouselData(CrouselData)
    },[crouselData])
   
    //console.log(crouselData.image)
 return(
    <div>
       <Carousel className='slidecontainer'>
          {crouselData.map((data)=>{
            return(
                <Carousel.Item className='contain' key={data.id}>
                    <img src={data.image} alt='first slide' className='slide d-block'  />
                    <Carousel.Caption className="content">
                    <h1>{data.heading}</h1>
                    <p>{data.desc}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            );           
       
           })
           }
        </Carousel>
        <Outlet/>
     
    </div>
 );
}
export default Home;