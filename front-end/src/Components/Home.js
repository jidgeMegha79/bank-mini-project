import { Carousel} from "react-bootstrap";
import firstSlide from './firstSlide.jpg'
import secondSlide from './secondSlide.jpg'
import thirdSlide from './thirdSlide.jpg'
import '../css/Home.css'
import { Outlet } from "react-router";


const Home=()=>{
    return(
    <div>
        <Carousel className='slidecontainer'>
            <Carousel.Item >
                <img src={firstSlide} alt='first slide' className='slide d-block'  />
                <Carousel.Caption>
                 <h3>We are here for you</h3>
                 <p>We are in this together,and here to help our customers.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item > 
                <img src={secondSlide} alt='second slide' className='slide d-block'/>
                <Carousel.Caption>
                    <h3>Online Banking</h3>
                    <p>Start Here Get There</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={thirdSlide} alt='third slide' className='slide d-block'/>
                <Carousel.Caption>
                    <h3>New Bank For New Age</h3>
                    <p> Discover why we are the best bank for everyone.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Outlet/>
    
    </div>
    );
}
export default Home;