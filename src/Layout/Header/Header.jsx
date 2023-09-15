import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  let navigate = useNavigate()
  let handleLogOut = () => {
    window.sessionStorage.clear();
    alert("Logged out successfully")
    navigate('/')
  }
    let authToken = window.sessionStorage.getItem('token')
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img src='../../../../../assets/Logo.png' className='logo' />
            &nbsp;
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-5" navbarScroll>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/gallery">About</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/allreviews">Reviews</Nav.Link>
              <Nav.Link as={Link} to="/booking"><button className='book_btn'>Book Now</button></Nav.Link>
              {
                authToken ?
                  <Nav.Link ><button className='logOut_btn px-3' onClick={handleLogOut}>Log Out</button></Nav.Link>
                  : <></>
              }
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header