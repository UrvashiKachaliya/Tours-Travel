import React, { useEffect } from 'react'
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import image1 from "./Images/next1.jpg";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Usernavbar from './Usernavbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function Details() {
    const user=JSON.parse(localStorage.getItem('userdata'));
    console.log(user.user.id);
    

    const [pack,setpack]=useState([]);

    useEffect(()=>{
        Fetchdata()
    },[])

    async function Fetchdata(){
        let result=await fetch("http://clickandcall.spectricssolutions.com/apilist/toursapi/admin_packages_fetch.php",{
            method:"GET",  
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            

        });

        result=await result.json()
        console.log("message",result);
        if(result.message=="Data Fetch successful")
        {
            console.log(result.details);
            setpack(result.details);

        }
    }

  return (
    <div>
        <Container fluid className='ps-0 pe-0' style={{overflowX:'hidden'}}>
            <Usernavbar/>
            {
                pack.map((details)=>
                <>
            <Row>
                
                <Col lg={12}>
                    <img className='w-100' src ={`http://clickandcall.spectricssolutions.com/apilist/toursapi/${details.PackageImage}`} alt='img1' style={{backgroundSize:'cover',backgroundPosition:'center',height:'40rem'}}/>
                </Col>
            </Row>
            <Row className='p-5' style={{backgroundColor:'#F9F4F0'}}>
                
                <Col lg={4} className='ms-3'>
                    <h1>{details.PackageName}</h1>
                    <h3> <FmdGoodIcon style={{color:'#D57C48'}}/> {details.PackageLocation}</h3>
                </Col>
                <Col lg={4} className='d-flex'>
                   <AccessTimeIcon className='mt-3 me-3 p-2 rounded-5' style={{backgroundColor:'#D57C48',fontSize:'50px'}}/>
                    <div className='ms-2'>
                    <h4>Package Type</h4>
                    <h2>{details.PackageType}</h2>
                    </div>
                </Col>
                <Col lg={3} className='d-flex'>
                   <MonetizationOnIcon className='mt-3 me-3 p-2 rounded-5' style={{backgroundColor:'#D57C48',fontSize:'50px'}}/>
                    <div className='ms-2'>
                    <h4>Price</h4>
                    <h2>{details.PackagePrice} $</h2>
                    </div>
                </Col>
            </Row>
<Row>
            <Col lg={7} className="mt-5 mb-5 ms-3 p-5" >
                    <p
                    className="mt-5 mb-0"
                    style={{
                        fontFamily: "cursive",
                        fontSize: "1.2rem",
                        color: "#D57C48",
                    }}
                    >
                    Dream Vacation Destination Details
                    </p>
                    <h1 style={{ fontSize: "3.5rem", color: "black" }}>
                    Enjoy the Adventure
                    </h1>
                    <p
                    className="text-secondary mt-3 w-75"
                    style={{ fontSize: "1.2rem" }}
                    >
                   {details.PackageDetails}
                    </p>
                    <p
                    className="text-secondary mt-3 w-75"
                    style={{ fontSize: "1.2rem" }}
                    >
                   {details.PackageFetures}
                    </p>
            </Col>
            <Col lg={4} className="mt-5 mb-5 ms-3 p-5" >
                <Card className='mt-5 pt-3 pb-3 shadow-lg border-0'>
                        <Card.Body className=''>
                            <div>
                                <h3 className='text-muted'>Price</h3>
                                <h2>From</h2>
                            </div>
                                <div>
                                    <h1 style={{display:'flex',justifyContent:'flex-end',alignItems:'flex-end', marginTop:"-70px"}}>$78</h1>
                                </div>
                                <hr className='mt-4'/>
                                <Link to={user.user.id? "/confirm/" + user.user.id:"something went wrong" }>
                                <Button className='border-0 w-100' style={{backgroundColor:'#D57C48'}}>Book Now</Button>
                                </Link>
                        </Card.Body>
                </Card>
            </Col>
            </Row>
            <Footer/>
            </> )}
        </Container>
    </div>
  )
}