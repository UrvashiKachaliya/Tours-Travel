import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import bg from '../Components/Images2/ln3.jpg';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Usernavbar from './Usernavbar';
import Footer from './Footer';

export default function Profile() {
    const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <div>
        <Container fluid className='ps-0 pe-0 w-100' style={{ overflowX: 'hidden' }}>
            <Usernavbar/>
            <Row>
            <Col lg={12}>
            <h1 className='text-center text-white fw-bold fs-1' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', color: 'white', height: '38rem', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}>Hello Twinkle</h1>
          </Col>
            </Row>
            <Row>
                <Col lg={9} className='mx-auto'>
                    <Card className='p-4 mt-5 border-1 shadow-lg border-0 mb-5 pb-5'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <h2 className='mb-5 mt-3 ms-5 fs-2' style={{color:'#D57C48',fontFamily: 'Brush Script MT, cursive'}}>My Profile</h2>
                            <Form.Group as={Col} md="8" controlId="validationCustom01" className='mb-4 mx-auto'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Username"
                                style={{ height: '50px' }}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="8" controlId="validationCustom02" className='mb-4 mx-auto'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Email"
                                style={{ height: '50px' }}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="8" controlId="validationCustom03" className='mb-4 mx-auto'>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Phone Number"
                                style={{ height: '50px' }}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="8" controlId="validationCustom04" className='mb-5 mx-auto'>
                            <Form.Label>Address</Form.Label>
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Address"
                                className="mb-3"
                                style={{ height: '50px' }}
                            >
                                <Form.Control as="textarea" placeholder="Leave a comment here" />
                         </FloatingLabel>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        <Button className='mx-auto border-0 shadow-lg' style={{ height: '40px' ,width:'725px',backgroundColor:'#D57C48'}}>Save Changes</Button>
                        </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
            <Footer/>
        </Container>
    </div>
  )
}