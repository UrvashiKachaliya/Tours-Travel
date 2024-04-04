import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import bannerImage from "./Images/slider1.jpg";
import bannerImage2 from "./Images/slider2.jpg";
import bannerImage3 from "./Images/pic3.avif";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function Userslider() {
  return (
    
    <Carousel>
      <Carousel.Item>
        <Image
          src={bannerImage}
          alt="First slide"
          fluid
          style={{
            height: "550px",
            width: "100%",
            objectFit: "cover",
            filter: "brightness(60%)",
          }}
        />
        <Carousel.Caption
          style={{
            textDecoration: "bolder",
            textAlign: "left",
            marginBottom: "60px",
          }}
        >
          <h1 style={{ fontSize: "6rem" }}>
            Explore The <br />
            <span style={{ color: "#D57C48" }}>World</span> Now
          </h1>
          <p style={{ fontSize: "1.2rem" }}>
            Our team of experienced travel experts will help you plan your trip
            <br /> from start to finish,ensuring your dream vacation becomes
            <br /> a reality. Don't wait any longer
          </p>
       <Link to="/package"><Button className="ps-3 pe-3 pt-2 pb-2" style={{backgroundColor:'#1E2D58',borderStyle:'none'}}>View Trips</Button></Link>  
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={bannerImage2}
          alt="First slide"
          fluid
          style={{
            height: "550px",
            width: "100%",
            objectFit: "cover",
            filter: "brightness(60%)",
          }}
        />
        <Carousel.Caption
          style={{
            textDecoration: "bolder",
            textAlign: "left",
            marginBottom: "30px",
          }}
        >
          <h1 style={{ fontSize: "6rem", lineHeight: "1" }}>
            Start a <br />
            New
            <br />
            <span style={{ color: "#D57C48" }}>Journey</span>
          </h1>
          <p style={{ fontSize: "1.2rem" }}>
            Our team of experienced travel experts will help you plan your trip
            <br /> from start to finish,ensuring your dream vacation becomes{" "}
            <br /> a reality. Don't wait any longer
          </p>
       <Link to="/package"><Button className="ps-3 pe-3 pt-2 pb-2" style={{backgroundColor:'#1E2D58',borderStyle:'none'}}>View Trips</Button></Link>   
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Userslider;
