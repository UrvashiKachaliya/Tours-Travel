import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Signin() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  async function Login() {
    let data = { username, password };
    console.log(data);

    let result = await fetch(
      "http://clickandcall.spectricssolutions.com/apilist/toursapi/user_login.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    result = await result.json();
    console.log("message", result);
    if (result.message == "Login successfull") {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "User Login Successfully",
        showConfirmButton: false,
        timer:1000,
      });
      localStorage.setItem("userdata",JSON.stringify(result))
      navigate("/");
    } else if (result.message == "Invalid username or password") {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Invalid Username or Password",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  
  }

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#e1bbc8",
        height: "38rem",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="ms-5">
          <Col lg={6} className=" mx-auto mt-5">
            <Card className="w-75 border-0 mt-5" style={{ height: "22rem" }}>
              <Card.Body className="mt-3">
                <h4 className="mb-3">
                  Login
                  <hr
                    className="text-primary rounded-3"
                    style={{
                      width: "40px",
                      borderBottom: "3px solid",
                      margin: "5px 0",
                    }}
                  />
                </h4>
                {/* Username */}
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
                  className="w-100 mb-3"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => {
                      setusername(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                {/* Password */}
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom03"
                  className="w-100 "
                >
                  <Form.Control
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                  <i
                    onClick={handleTogglePassword}
                    className={`${
                      showPassword ? "bi bi-eye-slash" : "bi bi-eye"
                    } password-icon`}
                  ></i>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                {/* Remember Me Checkbox */}
                <Form.Group
                  className=" d-flex mt-3"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check type="checkbox" label="Remember Me" checked />
                </Form.Group>

                {/* Forgot Password Link */}
                <Button
                  variant="link"
                  className="w-100 text-end"
                  style={{ marginTop: "-55px" }}
                >
                  Forgot Password?
                </Button>

                <Button className="w-100 p-2 mb-3" onClick={Login}>
                  Login Now
                </Button>

                <h6 className="text-center mb-2">
                  Don't have an account?
                  <Link to="/" style={{ textDecoration: "none" }}>
                    {" "}
                    Register Now
                  </Link>
                </h6>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
