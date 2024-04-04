import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import ln1 from "./Images/ln1.jpg"

export default function Des1() {
  return (
    <div>
        <Container>
            <Row>
               
           
            <Col lg={5} className='ms-4 pb-5 mt-3'>
            <Card className='border-0  rounded-4 shadow-lg' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),url(${ln1})`,height:"25rem",width:"38rem",backgroundSize: 'cover',
            backgroundPosition: 'center',display: 'flex',
            justifyContent: 'flex-end'}}>
            <div style={{ marginTop: 'auto', padding: '1rem' }}>
            <p className='text-white ms-3'>April 7, 2023</p>
            <h3 className='text-white ms-3'>Discover the Hidden Gems</h3>
            <p className='text-white w-75 ms-3'>Benefits of traveling alone, from the freedom to discover new places with new friends.</p></div>
            </Card>
             </Col>
        
            </Row>
        </Container>

    </div>
  )
}
