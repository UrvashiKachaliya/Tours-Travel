import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';


export default function Footer() {
  const openGmail = () => {
    const subject = encodeURIComponent('Put the subject here');
    const sender = encodeURIComponent('kachaliyaurvashi@gmail.com');
    const body = encodeURIComponent('E-mail body');
    const url = `https://mail.google.com/mail/?view=cm&fs=1&su=${subject}&to=${sender}&body=${body}`;
    window.open(url, '_blank');
  };

  return (
    <div>
        <Container fluid className='mt-5 ps-0 pe-0' style={{backgroundColor:"#000033",height:"400px",overflowX:"hidden"}}>
            <Row className='ms-3'>
                <Col lg={6}>
                    <h1 className='text-light mt-5' style={{fontSize:"3.8rem"}}>
                    Travel beyond your imagination, with our Travel Agency!
                    </h1>
                </Col>
                <Col lg={3} className='text-light text-center mt-5'>
                    <h3 className='mb-4'>Address</h3>
                    <p >1080 Brickell Ave</p>
                    <p >Miami - Florida</p>
                    <p >U.S. of America</p>
                    <h2><FacebookIcon/><YouTubeIcon className='ms-2'/><InstagramIcon className='ms-2'/></h2>
                </Col>

                <Col lg={3} className='text-light text-center mt-5'>
                <h3 className='mb-4'>Contact</h3>
   
                <Button onClick={openGmail}
                  className=" mt-2 ps-4 pe-4"
                  style={{ backgroundColor: "#D57C48", border: "none" }}
                >
                         info@travel.com
                </Button>
                
                
                
                
                <h2 className='mt-3'>+01 483 593 284</h2>
                
                </Col>
            </Row>
        </Container>
    </div>
  )
}
