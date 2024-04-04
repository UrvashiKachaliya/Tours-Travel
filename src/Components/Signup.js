import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Container,Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';




export default function Signup() {
  const navigate=useNavigate();
  const [validated, setValidated] = useState(false);
  const [username,setusername]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const[phoneno,setphoneno]=useState("");
  const [address,setaddress]=useState("");
  


  async function Register(){
    let data={username,email,password,phoneno,address}
    console.log(data)

    let result=await fetch("http://clickandcall.spectricssolutions.com/apilist/toursapi/user_register.php",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(data)

    })
    result=await result.json()
    console.log("message",result);
    if(result.message=="User registered successfully")
    {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Registered Successfully",
        showConfirmButton: false,
        timer:2000
      });
      navigate("/login")

    }
    else if(result.message=="User already registered")
    {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "User Already Registered",
        showConfirmButton: false,
        timer:2000
      });

    }
    else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  }


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
      <Container fluid  style={{
        backgroundColor: "#e1bbc8",
        height: "38rem",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className='ms-5'>
          <Col lg={7} className=' mx-auto mt-3'  >
          <Card className='w-75 mt-4'>
            <Card.Body>
              <h4 className='mb-3'>Registration<hr className='text-primary rounded-3' style={{width:'40px',  borderBottom: '3px solid' ,margin: '5px 0'}}/></h4>
              {/* Username */}
            <Form.Group as={Col} md="4" controlId="validationCustom01" className='w-100 mb-3'>
            {/* <Form.Label>Enter your name</Form.Label> */}
          <Form.Control
            required
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>{setusername(e.target.value)}}
        
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
              {/*Email  */}
              <Form.Group as={Col} md="4" controlId="validationCustom02" className='w-100 mb-3'>
            {/* <Form.Label>Email Id</Form.Label> */}
          <Form.Control
            required
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
           
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

          {/* Password */}

          <Form.Group as={Col} md="4" controlId="validationCustom03" className='w-100 mb-3'>
            {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            required
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}}
            
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        {/* Phone no */}

        <Form.Group as={Col} md="4" controlId="validationCustom02" className='w-100 mb-3'>
           
          <Form.Control
            required
            type="text"
            placeholder="Enter your phoneno"
            value={phoneno}
            onChange={(e)=>{setphoneno(e.target.value)}}
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>


       <Form.Group as={Col} md="4" controlId="validationCustom04" className="w-100 mb-3">
                    {/* <Form.Label>Address</Form.Label> */}
                    <Form.Control
                      as="textarea"
                      placeholder="Enter your address"
                      required
                      value={address}
                      onChange={(e)=>{setaddress(e.target.value)}}
                
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>

        <Button className='w-100 mb-2'onClick={Register}>Register Now</Button>
        <h6 className='text-center'>Already have an account?<Link to='/login' style={{textDecoration:'none'}}> Login Now</Link></h6>
       


            </Card.Body>
          </Card>
          </Col>
        </Row>
       
        </Form>
      </Container>
      

     
      


    </div>
  )

}
