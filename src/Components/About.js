import React from 'react'
import {Container, Row, Col,Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import bg from './Images/aboutbg.jpg';
import bg2 from './Images/bg2.png';
import bg3 from './Images/bg3.png';
import bg4 from './Images/bg4.jpg';
import p1 from './Images/p1.jpg';
import p2 from './Images/p2.jpg';
import ln1 from './Images/ln1.jpg'
import ln2 from './Images/ln2.jpg'
import ln3 from './Images/ln3.jpg'
import ln4 from './Images/ln4.jpg'
import img1 from './Images/img1.jpg';
import Carousel from 'react-bootstrap/Carousel';
import imgs1 from './Images/imgs1.jpeg';
import ic1 from './Images/ic1.png'
import ic2 from './Images/ic2.png'
import ic3 from './Images/ic3.png'
import ic4 from './Images/ic4.png'
import ic5 from './Images/ic5.png'
import ic6 from './Images/ic6.png'
import c1 from './Images/c1.jpg'
import { Hidden } from '@mui/material';
import Usernavbar from './Usernavbar';
import Footer from './Footer';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export default function About() {
  return (
   <Container fluid className='ps-0 pe-0 w-100' style={{overflowX:"hidden"}}>
    <Usernavbar/>
    <Row>
        <Col lg={12} className='ps-0 pe-0 w-100' style={{overflowX:'hidden'}}>
            <h1 className='text-white text-center' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg})`, color: 'white', height:'40rem',backgroundSize: 'cover',backgroundPosition: 'center',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>ABOUT US</h1>
        </Col>
    </Row>
    <Row className='pb-5' style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${bg2})`}}>
        <Col lg={5} className=' mt-5 mb-5 ms-3'>
            <h5 className='fs-2' style={{color:"#D57C4B",fontFamily: 'Brush Script MT, cursive'}}>Explore the world with us, one adventure at a time.</h5>
            <h1 className='w-100 mt-3 fw-bold' style={{ fontSize: '3.5rem' }}>The perfect <span  style={{color:"#D57C4B"}}> vacation</span> come true with our Travel Agency</h1>
            <p className='mt-3'>We are a team of experienced travel experts who specialize in planning and organizing unforgettable travel experiences for our clients with a wide range of travel services, including flight bookings, hotel reservations and more.</p>
            <Button className='text-white border-0 mt-2 ps-4 pe-4 pt-2 pb-2' style={{backgroundColor:"#D57C4B"}}>MORE INFO</Button>

        </Col>
        <Col lg={6} className='ms-auto mt-5'>
            <img src={img1} alt="img1" className='h-75 w-75 mt-5  ps-3'/>
        </Col>
    </Row>
    <Row className='pb-5'>
        <Col lg={11} className='mx-auto mt-5'>
        <Carousel>
      <Carousel.Item style={{height:'85vh'}}>
        <img src={img1} alt="First slide"/>

      </Carousel.Item>
      <Carousel.Item style={{height:'85vh'}}>
        <img src={imgs1} alt="Second slide"/>

      </Carousel.Item>
    </Carousel>
        </Col>
    </Row>

    <Row style={{backgroundImage:`linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${bg2})`,backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',}}>

    {/* <Row> */}
    <Col lg={5} className=' mt-5 mb-5  ms-3'>
            <h5 className='fs-2' style={{color:"#D57C4B",fontFamily: 'Brush Script MT, cursive'}}>Let us help you plan your next adventure</h5>
            <h1 className='w-100 mt-3 fw-bold' style={{ fontSize: '3.5rem' }}>The perfect <span  style={{color:"#D57C4B"}}> vacation</span> come true</h1>



        </Col>
        <Col lg={5} className='ms-3 mt-4 pt-5 '>
        <p className='mt-3 fw-semibold fs-5'>Various destinations around the world. With our knowledge and expertise in the travel industry, we ensure that all aspects of your trip are tailored to your preferences and budget and make it an experience of a lifetime.</p>
        </Col>


        <Col lg={3} className='mx-auto mb-5'>
            <img src={ic1} alt='icon1' className='h-50 w-25 mb-4'/>
            <h4 className='fw-bold'>Airline Tickets</h4>
            <p>Our travel agency specializes in providing our customers with the best deals on airline tickets.</p>
        </Col>
        <Col lg={3} className='mx-auto mb-5'>
        <img src={ic2} alt='icon1' className='h-50 w-25 mb-4'/>
            <h4 className='fw-bold'>Ocean Cruisess</h4>
            <p>Luxurious and comfortable way of travel, and passengers can enjoy stunning views of the sea.</p>
        </Col>
        <Col lg={3} className='mx-auto ms-5 mb-5'>
        <img src={ic3} alt='icon1' className='h-50 w-25 mb-4'/>
            <h4 className='fw-bold'>Means of Transport</h4>
            <p>Our travel agency offers a variety of means of transport to get you around your destination safely.</p>
        </Col>
        <Col lg={3} className='mx-auto pb-5'>
            <img src={ic4} alt='icon1' className='h-50 w-25 mb-4'/>
            <h4 className='fw-bold'>Travel itineraries</h4>
            <p>Our team of experts will take care of all the planning and logistics, providing you with a detailed itinerary.</p>
        </Col>
        <Col lg={3} className='mx-auto pb-5'>
        <img src={ic5} alt='icon1' className='h-50 w-25 mb-4'/>
            <h4 className='fw-bold'>Travel Insurance</h4>
            <p>Travel insurance is an essential part of any trip, providing peace of mind and protection.</p>
        </Col>
        <Col lg={3} className='mx-auto pb-5'>
        <img src={ic6} alt='icon1' className='h-50 w-25 mb-4'/>
            <h4 className='fw-bold'>Local Guide</h4>
            <p>We can connect you with guides who will take you off the best path and show you their city.</p>
        </Col>
    </Row>



    <Row style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${bg4})`,backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',}}>

        <Col lg={12} className='pt-5 text-center'>
            <h5 className='fs-2 mt-5' style={{color:"#D57C4B",fontFamily: 'Brush Script MT, cursive'}}>Happy Travelers Share Their Experiences</h5>
            <h1 className='w-100 mt-3 fw-bold' style={{ fontSize: '3rem' }}>Stories from<span  style={{color:"#D57C4B"}}> Satisfied</span> Customers</h1>
        </Col>
        <Col lg={5} className='mt-5 ms-3 pb-5'>
        <img src={c1} alt="img" className='h-100 w-100'/>
        </Col>
        <Col lg={5}>
        <Carousel className='mt-5 ms-5 ps-5 pt-4'>
      <Carousel.Item>
        <p className='fs-4 fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur aliquid inventore quos delectus molestiae sed eaque voluptatum, sunt vel? Officiis voluptatibus natus libero eius magni repellat dolorem et ducimus mollitia.</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>

        <div> <img src={p1} alt='img' className='rounded-circle' style={{width:"100px",height:"90px"}}/></div>
        <div>
            <h5 className='ms-3 mt-2'>Jasper</h5>
            <p className='ms-3'>New York</p>
            </div>
      </div>

      </Carousel.Item>
      <Carousel.Item >
<p className='fs-4 fw-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero maxime expedita, illum voluptatum, saepe praesentium eveniet delectus consequatur laboriosam sunt explicabo? Corrupti quibusdam harum nisi, beatae recusandae pariatur error!</p>
<div style={{ display: 'flex', alignItems: 'center' }}>
<div><img src={p2} alt='img' className='rounded-circle' style={{width:"100px",height:"90px"}}/></div>
<div><h5 className='ms-3 mt-2'>Jasper</h5>
    <p className='ms-3'>New York</p></div>
    </div>
      </Carousel.Item>
    </Carousel>
        </Col>
    </Row>

    <Row>
    <Col lg={12} className='pt-5 text-center'>
            <h5 className='fs-2 mt-5' style={{color:"#D57C4B",fontFamily: 'Brush Script MT, cursive'}}>True Roaming Tales</h5>
            <h1 className='w-100 mt-3 mb-5 fw-bold' style={{ fontSize: '3rem' }}>Latest<span  style={{color:"#D57C4B"}}> Useful</span> News</h1>
    </Col>
    <Col lg={5} className='ms-4 pb-5'>
            <Card className='border-0  rounded-4 shadow-lg' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),url(${ln1})`,height:"25rem",width:"38rem",backgroundSize: 'cover',
            backgroundPosition: 'center',display: 'flex',
            justifyContent: 'flex-end'}}>
            <div style={{ marginTop: 'auto', padding: '1rem' }}>
            <p className='text-white ms-3'>April 7, 2023</p>
            <h3 className='text-white ms-3'>Discover the Hidden Gems</h3>
            <p className='text-white w-75 ms-3'>Benefits of traveling alone, from the freedom to discover new places with new friends.</p></div>
            </Card>
    </Col>
    <Col lg={5} className='ms-5 ps-4 pb-5'>
            <Card className='ms-5 border-0  rounded-4 shadow-lg' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),url(${ln2})`,height:"25rem",width:"38rem",backgroundSize: 'cover',
            backgroundPosition: 'center',display: 'flex',
            justifyContent: 'flex-end'}}>
            <div style={{ marginTop: 'auto', padding: '1rem' }}>
            <p className='text-white ms-3'>April 7, 2023</p>
            <h3 className='text-white ms-3'>Discover the Hidden Gems</h3>
            <p className='text-white w-75 ms-3'>Benefits of traveling alone, from the freedom to discover new places with new friends.</p></div>
            </Card>
    </Col>
    <Col lg={5} className='ms-4 pb-5'>
            <Card className='border-0 rounded-4 mx-auto shadow-lg' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),url(${ln3})`,height:"25rem",width:"38rem",backgroundSize: 'cover',
            backgroundPosition: 'center',display: 'flex',
            justifyContent: 'flex-end'}}>
            <div style={{ marginTop: 'auto', padding: '1rem' }}>
            <p className='text-white ms-3'>April 7, 2023</p>
            <h3 className='text-white ms-3'>Discover the Hidden Gems</h3>
            <p className='text-white w-75 ms-3'>Benefits of traveling alone, from the freedom to discover new places with new friends.</p></div>
            </Card>
    </Col>
    <Col lg={5} className='ms-5 ps-4 pb-5'>
            <Card className='ms-5 border-0  rounded-4 shadow-lg' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),url(${ln4})`,height:"25rem",width:"38rem",backgroundSize: 'cover',
            backgroundPosition: 'center',display: 'flex',
            justifyContent: 'flex-end'}}>
            <div style={{ marginTop: 'auto', padding: '1rem' }}>
            <p className='text-white ms-3'>April 7, 2023</p>
            <h3 className='text-white ms-3'>Discover the Hidden Gems</h3>
            <p className='text-white w-75 ms-3'>Benefits of traveling alone, from the freedom to discover new places with new friends.</p></div>
            </Card>
    </Col>
    </Row>
    <Footer/>
   </Container>
  )
}
