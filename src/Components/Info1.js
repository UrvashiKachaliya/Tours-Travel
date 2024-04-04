import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import image1 from './Images/mountain1.jpg';
import image2 from './Images/beach1.jpg';
import image3 from './Images/adventure1.jpg'
import bg from './Images/background.png'
import { Link } from "react-router-dom";


export default function Info1() {
  return (
    <div>
      <Container fluid className='w-100 ps-0 pe-0' style={{overflowX:'hidden'}}>
      <Row
    
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundAttachment:"fixed",
            marginBottom:"50px"
          }}
         
        >
          <Col lg={7} className="mt-5 mb-5 ms-3" >
          
            <p
              className="mt-5 mb-0"
              style={{
                fontFamily: "cursive",
                fontSize: "1.2rem",
                color: "#D57C48",
              }}
            >
              Dream Vacation Destination
            </p>
            <h1 style={{ fontSize: "3.5rem", color: "black" }}>
              Plan the Trip of a Lifetime with Ease
            </h1>
            <p
              className="text-secondary mt-3"
              style={{ fontSize: "1.2rem" }}
            >
              Whether you're looking for a romantic getaway, a family-friendly
              adventure, or a solo journey to explore the world, a travel
              agency can provide you with a custom-tailored itinerary that
              exceeds your expectations.
            </p>
           <Link to="/about"> <Button
              className="ps-4 pe-4 pt-2 pb-2"
              style={{ backgroundColor: "#D57C48", borderStyle: "none" }}
            >
              More Info
            </Button></Link>
            {/* </div> */}
          </Col>
        </Row>

       
        <Row className="ms-3 me-3">
          <Col lg={4}>
            <Card className="mb-5 rounded-5">
              <div
                style={{
                  backgroundImage: `url(${image1})`,
                  backgroundSize: "cover",
                  height: "100px",
                  filter:"brightness(70%)",
                  borderRadius:"15px"

                }}
              >
                <h2 className="mt-4 text-center" style={{ color: "white"}}>Mountains View</h2>
              </div>
             
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="mb-5 rounded-5">
              <div
                style={{
                  backgroundImage: `url(${image2})`,
                  backgroundSize: "cover",
                  height: "100px",
                  filter:"brightness(80%)",
                  borderRadius:"15px"
                }}
              >
                <h2 className="mt-4 text-center" style={{ color: "white"}}>Beach View</h2>
              </div>
             
            </Card>
          </Col>


          <Col lg={4}>
            <Card className="mb-5 rounded-5">
              <div
                style={{
                  backgroundImage: `url(${image3})`,
                  backgroundSize: "cover",
                  height: "100px",
                  filter:"brightness(70%)",
                  borderRadius:"15px"
                }}
              >
                <h2 className="mt-4 text-center" style={{ color: "white"}}>Adventure View</h2>
              </div>
             
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
