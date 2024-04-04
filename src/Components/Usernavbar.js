import React from 'react';
import { Container, Nav, Navbar,NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from './Images/logo.png';
import wplogo from './Images/whatsapp.png';
import { Logout } from '@mui/icons-material';
import Swal from 'sweetalert2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useDispatch, useSelector } from 'react-redux';
import { DEL } from '../Redux/Actions/action';

function UserNavbar() {
const getdata=useSelector((state)=>state.cartreducer.carts);
console.log(getdata);



  const navigate = useNavigate();
  const user=JSON.parse(localStorage.getItem('userdata'));


  const whatsappIconStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '150000',
    width: '50px',
  };

  const navLinkStyle = {
    color: 'navy',
    fontWeight: 'bold',
    textDecoration: 'none',
    padding: '10px',
    borderRadius: '5px',
  };

  function handleLogout() {
    localStorage.clear();
    Swal.fire({
      title: "Are you leaving?",
      text: "Are you sure want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout!",
          text: "Log out successfully",
          icon: "success"
        }).then(()=>{
          navigate("/login")
        });
      }
    });
  }

  return (
    <Container fluid className='w-100 ps-0 pe-0' >
      <Navbar expand="lg" className="bg-body-white sticky-top">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Your Logo Alt Text"
            height="30"
            className="d-inline-block align-top ms-3"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mt-2 me-3">
            <Link to='/' style={navLinkStyle}>
              Home
            </Link>
            <Link to='/package' style={navLinkStyle}>
              Package
            </Link>
            <Link to='/destination' style={navLinkStyle}>
              Destination
            </Link>
            <Link to='/about' style={navLinkStyle}>
              About Us
            </Link>
            <Link to='/contact' style={navLinkStyle}>
              Contact Us
            </Link>
            <Link to='/blog' style={navLinkStyle}>
              Blog
            </Link>
            <Link to='/registration' style={navLinkStyle}>
              Registration
            </Link>
            <Link to='/login' style={navLinkStyle}>
              Login
            </Link>
            <Link to='/cart' style={navLinkStyle}>
              {getdata.length}
              
            </Link>
     
            <NavDropdown title={<AccountCircleIcon/>} id="basic-nav-dropdown" align="end" className='p-0 ms-2' style={navLinkStyle}>
              <NavDropdown.Item><Link to="/profile" style={{textDecoration:"none",color:"inherit"}}><PersonIcon/> Your Profile</Link> </NavDropdown.Item>
             <NavDropdown.Item><ShoppingBagIcon/> My Booking</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}> <LogoutIcon/> Logout</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="https://wa.me/9924351355?text=How can I help you?" target="_blank" style={navLinkStyle}>
              <img src={wplogo} style={whatsappIconStyle} alt="WhatsApp Icon" />
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default UserNavbar;
