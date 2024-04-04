import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import bg from './Images/vacation.avif'
import Info1 from './Info1'

export default function Vacation() {
  return (
    <div>
        <Container fluid className='mb-5' style={{
            backgroundImage:`url(${bg})`,
            backgroundSize:'cover',
            backgroundPosition:"center-center",
            backgroundRepeat:'no-repeat',
            transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
            height:"300px",
            width: "100%",
            opacity:'0.8'
    
           
    }}>
            <Row>
                <Col lg={12}>
                <h1
              className="mt-5 text-center  mb-0"
              style={{
                fontFamily: "cursive",
                fontSize: "1.5rem",
                color: "#D57C48",
              }}
            >
              Choose Your Trip
            </h1>
            <h1 className='text-center mt-3'>Start your Vacation Now</h1>
            <p className='text-center mt-3' style={{fontSize:"18px"}}>Looking for your dream vacation destination but don't know where to start? 
            With the help <br/>  of experienced and knowledgeable travel agents, you can plan the trip of a lifetime with ease.</p>

                </Col>
            </Row>
            
        </Container>
    </div>
  )
}
