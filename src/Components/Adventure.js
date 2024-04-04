import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import image1 from "./Images/ad.avif";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import slider1 from "./Images/carousel1.jpg";
import slider2 from "./Images/carousel2.jpg";
import { Link } from "react-router-dom";


export default function Adventure() {
  return (
    <div>
      <Container
        fluid className='w-100 ps-2 pe-0' 
        style={{
          backgroundImage: `url( ${image1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          filter: "brightness(80%) opacity(0.9)",
          overflowX:"hidden"
        }}
      >
        <Row className="ms-3">
          <Col lg={5}>
            <Carousel>
              <Carousel.Item>
                <Image
                  src={slider1}
                  alt="First slide"
                  fluid
                  className="mt-5"
                  style={{
                    height: "410px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={slider2}
                  alt="First slide"
                  fluid
                  className="mt-5"
                  style={{
                    height: "410px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={6} className="ms-5">
            <p
              className="mb-0"
              style={{
                fontFamily: "cursive",
                fontSize: "1.8rem",
                color: "#fff", // Change text color to white or a suitable color
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow
                marginTop: "80px",
              }}
            >
              Adventure Travel
            </p>
            <h1
              className="mb-3"
              style={{ fontSize: "3.6rem", color: "#fff" }} // Change text color to white or a suitable color
            >
              Embrace the Thrill of the Unknown
            </h1>
            <p className="text-light mt-3 " style={{ fontSize: "1.2rem" }}>
              Are you tired of the typical tourist destinations and looking to
              step out of your comfort zone? Adventure travel may be the perfect
              solution for you! Here are four reasons why you should book an
              adventure travel experience :
            </p>
            <Link to="/contact"> <Button
              className=" mt-2 ps-4 pe-4"
              style={{ backgroundColor: "#D57C48", border: "none" }}
            >
              Contact Us
            </Button></Link>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
}
