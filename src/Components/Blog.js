import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import bgblog from './Images2/bgblog.jpg';
import img1 from './Images2/img1.jpg';
import ci1 from './Images2/ln1.jpg';
import ci2 from './Images2/ln2.jpg';
import ci3 from './Images2/ln3.jpg';
import ci4 from './Images2/ln4.jpg';
import Usernavbar from './Usernavbar';
import Footer from './Footer';

export default function Blog() {
  return (
    <div>
      <Container fluid className='ps-0 pe-0 w-100' style={{ overflowX: 'hidden' }}>
        <Usernavbar />
        <Row>
          <Col lg={12}>
            <h1 className='text-center text-white fw-bold fs-1' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${bgblog})`, backgroundPosition: 'center', backgroundSize: 'cover', color: 'white', height: '38rem', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}>Our Blog</h1>
          </Col>
        </Row>
        <Row style={{ backgroundImage: `url(${img1})`, minHeight: '100vh' }}>
        <Col lg={5} className='ms-auto mt-5 pb-3'>
                    <Card className='rounded-3 shadow-lg border-0'>
                        <img className='rounded-3' src={ci1} alt='card-1img'/>
                    </Card>
                        <h3 className='fw-bold mt-4'>Discover the Hidden Gems</h3>
                        <p className='mt-3 w-75 mb-3 fw-semibold'>Benefits of traveling alone, from the freedom to discover new places with new friends.</p>
                        <Button className='border-0 ps-4 pe-4 pt-2 pb-2' style={{backgroundColor:"#D57C4B"}}>Read More</Button>
                </Col>
                <Col lg={5} className='mx-auto mt-5 pb-3'>
                    <Card className='rounded-3 shadow-lg border-0'>
                        <img className='rounded-3' src={ci2} alt='card-2img'/>
                    </Card>
                    <h3 className='fw-bold mt-4'>Must-See Landmarks</h3>
                    <p className='mt-3 w-75 mb-3 fw-semibold'>Iconic landmarks that make Europe one of the world's most popular travel destinations.</p>
                    <Button className='border-0 ps-4 pe-4 pt-2 pb-2' style={{backgroundColor:"#D57C4B"}}>Read More</Button>
                </Col>
                <Col lg={5} className='ms-auto mt-5 pb-5'>
                    <Card className='rounded-3 shadow-lg border-0'>
                        <img className='rounded-3' src={ci3} alt='card-3img'/>
                    </Card>
                    <h3 className='fw-bold mt-4'>Traveling on a Budget</h3>
                    <p className='mt-3 w-75 mb-3 fw-semibold'>Practical advice for travelers who want to see the world without breaking the bank.</p>
                    <Button className='border-0 ps-4 pe-4 pt-2 pb-2' style={{backgroundColor:"#D57C4B"}}>Read More</Button>
                </Col>
                <Col lg={5} className='mx-auto mt-5 pb-5'>
                    <Card className='rounded-3 shadow-lg border-0'>
                        <img className='rounded-3' src={ci4} alt='card-4img'/>
                    </Card>
                    <h3 className='fw-bold mt-4'>Explore the Wonders</h3>
                    <p className='mt-3 w-75 mb-3 fw-semibold'>Must-see destinations and experiences, including wildlife and cultural experiences.</p>
                    <Button className='border-0 ps-4 pe-4 pt-2 pb-2' style={{backgroundColor:"#D57C4B"}}>Read More</Button>
                </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
}
