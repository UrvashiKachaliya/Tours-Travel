import React from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import bg from "./Images2/bg.jpg";
import bg2 from "./Images2/bg2.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Usernavbar from "./Usernavbar";
import Footer from "./Footer";
import { useState } from "react";
import Swal from 'sweetalert2';

export default function Contact() {
  const [FullName, setfullname] = useState("");
  const [EmailId, setemailid] = useState("");
  const [MobileNumber, setmobilenumber] = useState("");
  const [Subject, setsubject] = useState("");
  const [Description, setdescription] = useState("");

  async function Addquery(){
    let data={FullName,EmailId,MobileNumber,Subject,Description}
    console.log(data)

    let result=await fetch("http://clickandcall.spectricssolutions.com/apilist/toursapi/equery_add.php",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
      },
      body:JSON.stringify(data)
    })

    result=await result.json();
    console.log("message:",result);
    if(result.message=="Add operation successful")
    {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Messgae Sent",
        showConfirmButton: false,
        timer:2000
      });
      

    }
    else{
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Your Message is not sent..please try again",
        showConfirmButton: false,
        timer:2000
      });
    }
  }

  return (
    <div>
      <Container
        fluid
        className="ps-0 pe-0 w-100"
        style={{ overflowX: "hidden" }}
      >
        <Usernavbar />
        <Row>
          <Col lg={12} className="ps-0 pe-0">
            <h1
              className="text-white text-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${bg})`,
                color: "white",
                height: "40rem",
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              CONTACT US
            </h1>
          </Col>
        </Row>
        <Row
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)),url(${bg2})`,
          }}
        >
          <Col lg={3} className="ms-5 ps-5 mt-5">
            <div className="d-flex">
              <LocationOnIcon
                className="rounded-5 mb-3"
                style={{
                  fontSize: "50px",
                  padding: "10px",
                  backgroundColor: "#BD9292",
                }}
              />
              <p className="ms-3 fw-bold fs-5 mt-2">Location</p>
            </div>
            <p className="fw-bold fs-5">Travel Agency</p>
            <p className="w-75">
              1626 Michigan Ave, Miami Beach FL 33139, United States
            </p>
            <p className="fw-bold fs-5">Travel Operator</p>
            <p className="w-75">
              2001 Biscayne Blvd, Miami FL 33137, United States
            </p>
          </Col>
          <Col lg={3} className="mx-auto ps-5 mt-5">
            <div className="d-flex">
              <CallIcon
                className="rounded-5 mb-3"
                style={{
                  fontSize: "50px",
                  padding: "10px",
                  backgroundColor: "#BD9292",
                }}
              />
              <p className="ms-3 fw-bold fs-5 mt-2">Give us a call</p>
            </div>
            <p className="fw-bold fs-5">Mobile Number</p>
            <p className="w-75">
              Paul Davis "Tour Consultant" : +1 629 592 593 Amy Moore "Local
              Guide" : +1 483 842 205
            </p>
            <p className="fw-bold fs-5">Office Number</p>
            <p className="w-75">
              Administration : +1 184 016 482 Technical Office +1 963 935 836
            </p>
          </Col>
          <Col lg={3} className="mx-auto ps-5 mt-5">
            <div className="d-flex">
              <EmailIcon
                className="rounded-5 mb-3"
                style={{
                  fontSize: "50px",
                  padding: "10px",
                  backgroundColor: "#BD9292",
                }}
              />
              <p className="ms-3 fw-bold fs-5 mt-2">Write for anything</p>
            </div>
            <p className="fw-bold fs-5">Quotes</p>
            <p className="w-75">
              Write to this email for a detailed quotation quote@travel.com and
              information.
            </p>
            <p className="fw-bold fs-5">Consulting</p>
            <p className="w-75">
              Our free consultation service can be requested here
              info@travel.com every day.
            </p>
          </Col>
          <Col lg={10} className="mx-auto pt-5">
            <Card
              className="p-5 mb-5 border-0 rounded-3"
              style={{ backgroundColor: "#F9F4F0" }}
            >
              <h4
                className="text-center fs-2 mb-3 mt-3"
                style={{
                  color: "#D57C4B",
                  fontFamily: "Brush Script MT, cursive",
                }}
              >
                Plan your Next Trip
              </h4>
              <h1 className="text-center fw-bold mb-2">Get in Touch</h1>
              <p className="mx-auto text-center w-50 fw-semibold mb-5">
                Write to us for personalized travel advice or for information on
                group travel and last minute travel, all travel is insured and
                safe.
              </p>
              <Form>
                <Form.Group
                  className="mb-3 w-75 mx-auto"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className="p-3"
                    type="text"
                    placeholder="Type Your Name"
                    value={FullName}
                    onChange={(e)=>{setfullname(e.target.value)}}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 w-75 mx-auto"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className="p-3"
                    type="email"
                    placeholder="Email address"
                    value={EmailId}
                    onChange={(e)=>{setemailid(e.target.value)}}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 w-75 mx-auto"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className="p-3"
                    type="text"
                    placeholder="Phone number"
                    value={MobileNumber}
                    onChange={(e)=>{setmobilenumber(e.target.value)}}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 w-75 mx-auto"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className="p-3"
                    type="text"
                    placeholder="Subject"
                    value={Subject}
                    onChange={(e)=>{setsubject(e.target.value)}}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 w-75 mx-auto"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    className="p-3 mb-4"
                    as="textarea"
                    placeholder="Your Message"
                    rows={3}
                    value={Description}
                    onChange={(e)=>{setdescription(e.target.value)}}
                  />
                  <Button
                    className="w-100 border-0 p-3"
                    style={{ backgroundColor: "#D57C4B" }}
                    onClick={Addquery}
                  >
                    Submit
                  </Button>
                </Form.Group>
              </Form>
                       
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
}
