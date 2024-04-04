import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Usernavbar from './Usernavbar'
import Des1 from './Des1'
import bg from "./Images/balloon.jpg"
import Footer from './Footer'

export default function Destination() {
  return (
    <div>
        <Container fluid className='ps-0 pe-0 w-100' style={{overflowX:'hidden'}}>
            <Row>
                <Col lg={12}>
                    <Usernavbar/>
                    
                </Col>
                <Col lg={12} className='ps-0 pe-0 w-100' style={{overflowX:'hidden'}}>
            <h1 className='text-white text-center' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg})`, color: 'white', height:'40rem',backgroundSize: 'cover',backgroundPosition: 'center',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>DESTINATION</h1>
        </Col>

            <Col lg={6}>
            <Des1/>
            </Col>
            <Col lg={6}>
            <Des1/>
            </Col>
            <Col lg={6}>
            <Des1/>
            </Col>
            <Col lg={6}>
            <Des1/>
            </Col>

                
            </Row>
            <Footer/>
        </Container>

    </div>
  )
}
