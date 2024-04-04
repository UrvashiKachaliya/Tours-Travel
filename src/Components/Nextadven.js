import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import image1 from "./Images/next1.jpg";
import image2 from "./Images/next2.jpg";
import image3 from "./Images/next3.jpg";
import image4 from "./Images/next4.jpg";
import bg from "./Images/background.png";
import { Link } from "react-router-dom";


export default function Nextadven() {
  return (
    <div>
      <Container fluid className='w-100 ps-0 pe-0' style={{overflowX:'hidden'}}>
        <Row
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundAttachment: "fixed",
            marginBottom: "50px",
          }}
        >
          <Col lg={7} className="mt-5 mb-5 ms-3">
            <p
              className=" mb-0"
              style={{
                fontFamily: "cursive",
                fontSize: "1.2rem",
                color: "#D57C48",
              }}
            >
              Next Adventure
            </p>
            <h1 style={{ fontSize: "3.5rem", color: "black" }}>
              Travel Destinations Available Worldwide
            </h1>
            <p className="text-secondary mt-3" style={{ fontSize: "1.2rem" }}>
              We have compiled a list of top destinations across the globe,
              scoured the world for the most alluring and fascinating places to
              visit. From the beautiful beaches of the Caribbean to the majestic
              mountains of Europe and the vibrant cities of Asia, our
              destination list has something for everyone.
            </p>

            {/* </div> */}
          </Col>
        </Row>

        <Row className="mb-5 ms-3 me-3">
          <Col lg={3}>
            <Card className="mb-5 rounded-5">
              <div
                style={{
                  backgroundImage: `url(${image1})`,
                  backgroundSize: "cover",
                  height: "400px",
                  filter: "brightness(70%)",
                  borderRadius: "15px",
                  backgroundPosition:"center",
                }}
              >
                <h2
                  className=" text-center"
                  style={{ color: "white", marginTop: "290px" }}
                >
                  U.S.A
                </h2>
                <Link to="/package"> <Button
                  className=" mt-2 ps-4 pe-4"
                  style={{ backgroundColor: "#D57C48", border: "none",marginLeft:"90px" }}
                >
                         All Packages
                </Button></Link>
               
              </div>
            </Card>
          </Col>

          <Col lg={3}>
            <Card className="mb-5 rounded-5">
              <div
                style={{
                  backgroundImage: `url(${image2})`,
                  backgroundSize: "cover",
                  height: "400px",
                  filter: "brightness(70%)",
                  borderRadius: "15px",
                  backgroundPosition:"center",
                }}
              >
                <h2
                  className=" text-center"
                  style={{ color: "white", marginTop: "290px" }}
                >
                  Japan
                </h2>
                <Link to="/package"> <Button
                  className=" mt-2 ps-4 pe-4"
                  style={{ backgroundColor: "#D57C48", border: "none",marginLeft:"90px" }}
                >
                         All Packages
                </Button></Link>
              </div>
            </Card>
          </Col>

          <Col lg={3}>
            <Card className="mb-5 rounded-5">
              <div
                style={{
                  backgroundImage: `url(${image3})`,
                  backgroundSize: "cover",
                  height: "400px",
                  filter: "brightness(70%)",
                  borderRadius: "15px",
                  backgroundPosition:"center",
                }}
              >
                <h2
                  className=" text-center"
                  style={{ color: "white", marginTop: "290px" }}
                >
                  California
                </h2>
                <Link to="/package"> <Button
                  className=" mt-2 ps-4 pe-4"
                  style={{ backgroundColor: "#D57C48", border: "none",marginLeft:"90px" }}
                >
                         All Packages
                </Button></Link>
              </div>
            </Card>
          </Col>

          <Col lg={3}>
            <Card className="mb-5 rounded-5">
              <div
                style={{
                  backgroundImage: `url(${image4})`,
                  backgroundSize: "cover",
                  height: "400px",
                  filter: "brightness(70%)",
                  borderRadius: "15px",
                  backgroundPosition:"center",
                }}
              >
                <h2
                  className=" text-center"
                  style={{ color: "white", marginTop: "290px" }}
                >
                  Italy
                </h2>
                <Link to="/package"> <Button
                  className=" mt-2 ps-4 pe-4"
                  style={{ backgroundColor: "#D57C48", border: "none",marginLeft:"90px" }}
                >
                         All Packages
                </Button></Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
