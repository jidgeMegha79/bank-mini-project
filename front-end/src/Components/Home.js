import { Carousel} from "react-bootstrap";
import firstSlide from '../images/home2.jpg'
import secondSlide from '../images/home1.jpg'
import thirdSlide from '../images/home3.jpg'
import '../css/Home.css'
import { Outlet } from "react-router";


const Home=()=>{
    return(
    <div>
        <Carousel className='slidecontainer'>
            <Carousel.Item className='contain'>
                <img src={firstSlide} alt='first slide' className='slide d-block'  />
                <Carousel.Caption className="content">
                 <h1>We are here for you</h1>
                 <p>We are in this together,and here to help our customers.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='contain'> 
                <img src={secondSlide} alt='second slide' className='slide d-block'/>
                <Carousel.Caption className='content'>
                    <h1>Online Banking</h1>
                    <p className='text-start'>Start Here Get There</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='contain'>
                <img src={thirdSlide} alt='third slide' className='slide d-block'/>
                <Carousel.Caption className='content'>
                    <h1>New Bank For New Age</h1>
                    <p> Discover why we are the best bank for everyone.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Outlet/>
    
    </div>
    );
}
export default Home;