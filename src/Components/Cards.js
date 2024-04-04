import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image1 from "./Images/card1.jpg";
import image2 from "./Images/card2.jpg";
import image3 from "./Images/card3.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD } from "../Redux/Actions/action";

export default function Cards() {
  const [show, setShow] = useState([]);
  const { PackageId } = useParams();

  const dispatch=useDispatch();

  const send = (details) => {
    alert(`${details.PackageName} added to cart`);
    dispatch(ADD(details));
  }

  useEffect(() => {
    Showpackage();
  }, []);

  async function Showpackage() {
    let result = await fetch(
      "http://clickandcall.spectricssolutions.com/apilist/toursapi/admin_packages_fetch.php",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    result = await result.json();
    console.log("message", result);
    if (result.message == "Data Fetch successful") {
      console.log(result.details);
      setShow(result.details);
    }
  }

  return (
    <div>
      <Container
        fluid
        className="w-100 ps-0 pe-0"
        style={{ overflowX: "hidden" }}
      >
        <Row className="mt-3 mb-5 ms-3 me-3">
          {show.map((details) => (
            <Col lg={4}>
              <Card className="rounded-5 mt-3">
                <Card.Img
                  variant="top"
                  src={`http://clickandcall.spectricssolutions.com/apilist/toursapi/${details.PackageImage}`}
                  style={{
                    borderTopRightRadius: "20px",
                    borderTopLeftRadius: "20px",
                    maxHeight: "250px",
                    maxWidth: "500px",
                  }}
                />
                <Card.Body>
                  <Card.Title className="mb-2">
                    <Row>
                      <Col lg={8}>
                        <h3>{details.PackageName}</h3>
                        <h5
                          className="text-muted "
                          style={{ lineHeight: "0.9rem" }}
                        >
                          <LocationOnIcon style={{ color: "#D57C48" }} />{" "}
                          {details.PackageLocation}
                        </h5>
                      </Col>
                      <Col lg={4} className="mt-4">
                        <p>
                          <AccessTimeIcon style={{ color: "#D57C48" }} /> 5 Days{" "}
                          <br />
                        </p>
                      </Col>
                    </Row>
                  </Card.Title>
                  <hr />
                  <Card.Text className="mb-2">
                    <p
                      className="p-1"
                      style={{ fontSize: "18px", textDecorationStyle: "bold" }}
                    >
                      {details.PackageFetures}
                    </p>
                  </Card.Text>
                  <hr />
                  <Row>
                    <Col lg={9}>
                      <Button onClick={()=>send(details)}
                        className="mt-3 ps-4 pe-4"
                        style={{ backgroundColor: "#D57C48", border: "none" }}
                      >
                        Add to Cart
                      </Button>
                    </Col>
                    <Col lg={3} className="mt-1">
                      <h5 className="text-muted ps-3">From</h5>
                      <h3
                        className="text-black"
                        style={{ lineHeight: "1.2rem" }}
                      >
                        {details.PackagePrice}$
                      </h3>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
