import React, { useEffect, useState } from 'react';
import './Reviews.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Reviews = () => {
    const { uEmail } = useParams();
    const url = 'http://localhost:2000/reviews';
    const [data, setData] = useState([]);
    const [reviewData, setReviewData] = useState({});
    const [show, setShow] = useState(false);
    let navigate=useNavigate()
    const fetchReview = () => {
        axios.get(url)
            .then(res => {
                const user = res.data.filter(users => users.email === uEmail);
                setData(user);
            })
            .catch(err => {
                console.log("Axios error:", err);
            });
    };

    useEffect(() => {
        fetchReview();
    }, [uEmail]);

    const handleClose = () => setShow(false);

    const handleShow = (reviewId) => {
        setShow(true);
        const singleReview = data.find(review => review.id === reviewId);
        setReviewData(singleReview);
    };

    const deleteItem = (reviewId) => {
        axios.delete(`http://localhost:2000/reviews/${reviewId}`)
            .then(res => {
                alert("Data deleted successfully");
                fetchReview();
            })
            .catch(err => {
                console.log("Axios error", err);
            });
    };
    const handleSubmit = (event, reviewId) => {
        event.preventDefault();
        axios.put(`http://localhost:2000/reviews/${reviewId}`, reviewData)
            .then(res => {
                alert("Data updated successfully");
                console.log("Update response:", res.data);
                window.location.reload();
            })
            .catch(err => {
                alert("Error updating data");
                console.log("Update error", err);
            });
    };
    return (
        <div className='container-fluid reviewBack py-5'>
            <h1 className='text-center text-white reviewHead'>Visit Again</h1>
            <hr className='text-white' />
            <div className="container-fluid">
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            {data.map(u => (
                                <Col key={u.email} >
                                    <Card border="info" className='mt-5 py-2'>
                                        <Card.Body>
                                            <Card.Title>{u.name}</Card.Title>
                                            <Card.Text>{u.msg}</Card.Text>
                                            <button className="btn btn-warning editBtn px-4 mt-3" onClick={() => { handleShow(u.id) }}>
                                                <span className='text-white'>Edit</span>
                                            </button>
                                            <button className="btn btn-warning editBtn px-3 mt-3 mx-3" onClick={() => { deleteItem(u.id) }}>
                                                <span className='text-white'>Delete</span>
                                            </button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <img src='../../../../assets/thanku.jpg' className='img-fluid py-5' alt='Thank You' /><br />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Modal part */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton />
                <Modal.Body>
                    <Form onSubmit={(event) => handleSubmit(event, reviewData.id)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Edit your comment</Form.Label>
                            <Form.Control as="textarea" rows={3} value={reviewData.msg} 
                                onChange={(event) => setReviewData({ ...reviewData, msg: event.target.value })} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Save Changes</Button>
                        <Button variant="primary mx-3" onClick={handleClose}>Close</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Reviews;
