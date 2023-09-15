import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div className='footerDiv mt-4 py-5'>
        <Container>
          <Row>
            <Col>
              <h4>Quick Links</h4>
              <ul>
                <li><Link to='/about' className='link'>About Us</Link></li>
                <li><Link to='/activities' className='link'>Sports Acivities</Link></li>
                <li><Link to='/contact' className='link'>Contact Us</Link></li>
                <li><Link to='/reviews' className='link'>Reviews</Link></li>
              </ul>
            </Col>
            <Col>
              <h4 className='text-left'>&nbsp;&nbsp;&nbsp;&nbsp;Follow Us On</h4>
              <ul className='socialnetwork'>
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-pinterest"></i></li>
              </ul>
            </Col>
          </Row>
          <hr/>
          <Row>
           <Col>
            <h6 className='text-center'>All copyrights reserved by paradise resort , 2023</h6>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Footer