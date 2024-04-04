import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Usernavbar from './Usernavbar'
import Card from 'react-bootstrap/Card';
import image from "./Images/background.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Form, FormControl } from 'react-bootstrap';
import Cards from './Cards';
import Footer from './Footer';
import bg from './Images/balloon.jpg'



export default function Package() {
  

  return (
    <div>
        <Container fluid className='ps-0 pe-0 w-100' style={{overflowX:"hidden"}}>
            <Row>
                <Col lg={12}>
                    <Usernavbar/>
                
                </Col>
                <Col lg={12} className='ps-0 pe-0 w-100' style={{overflowX:'hidden'}}>
            <h1 className='text-white text-center' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg})`, color: 'white', height:'40rem',backgroundSize: 'cover',backgroundPosition: 'center',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>OUR PACKAGES</h1>
        </Col>
            
            </Row>
            <Row style={{backgroundImage:`url(${image})`,height:"300px" ,backgroundPosition:"center",backgroundsize:"cover"}}>
                <Col lg={12} className='w-50 mx-auto my-auto'>
                <Card style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',border:"none" }} >
      <Card.Body className='mt-3 mb-3'>
        <Row className='mx-auto'>
            <Col lg={1} className='ms-5' >
                <h1><LocationOnIcon style={{fontSize:"45px",marginRight:"20px",color:"#D57C4B"}}/></h1>
            </Col>
            <Col lg={4}>
            <h5>Destinations</h5>

<select name="cars" id="cars" style={{backgroundColor:"none"}}>
  <option value="volvo">All Destinations</option>
  <option value="saab">Europe</option>
  <option value="mercedes">Asia</option>
  <option value="audi">U.S.A</option>
</select>
            </Col>

            <Col lg={1}>
            <h1><CalendarMonthIcon  style={{fontSize:"45px",marginRight:"20px",color:"#D57C4B"}}/></h1>

            </Col>

            <Col lg={4} >
            <h5>Date</h5>

            <Form>
            <Form.Group controlId="formBasicDate">
        
        <FormControl type="date" placeholder="Enter date" />
    
      </Form.Group>
            </Form>

            </Col>
        
        </Row>
        

      </Card.Body>
    </Card>


                </Col>
            
            </Row>
            <Row>
                
                  <Cards/>
              
              
                <Footer/>
            </Row>
        </Container>
    </div>
  )
}
