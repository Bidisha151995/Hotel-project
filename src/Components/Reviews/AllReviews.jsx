import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Reviews.css'
const AllReviews = () => {
    let url = 'http://localhost:2000/reviews'
    let [data, setData] = useState([])
    useEffect(() => {
        axios.get(url).then(res => {
            console.log("Axios in res :", res.data);
            setData(res.data)
        }).catch(err => {
            console.log("Axios error :", err);
        })
    }, [setData])
    return (
        <div className='container-fluid reviewBack py-5'>
            <h1 className='text-center text-white reviewHead'>Happy Clients</h1>
            <hr className='text-white'/>
            <div className="container-fluid">
            <Row>
                <Col sm={12} md={6} lg={6}>
            <div className='container'>
                {data.map(user => (
                    <Row>
                        <Col key={user.id}>
                            <Card border="info" className='mt-5 py-2'>
                                <Card.Body>
                                    <Card.Title>{user.name}</Card.Title>
                                    <Card.Text> {user.msg}</Card.Text>
                                </Card.Body><br />
                            </Card>
                        </Col>
                    </Row>
                ))}
                </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <img src='../../../../assets/thanku.jpg' className='img-fluid py-5'/><br/>
                </Col>
                </Row>
            </div>
            <Link to='/reviewform' className='reviewBtnLink'>
                <button className="btn btn-warning reviewBtn p-3 mt-5"><span className='text-white'>Post your review</span></button>
            </Link>
        </div>
    )
}

export default AllReviews