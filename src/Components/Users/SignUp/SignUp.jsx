import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Col, Container,Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { sign_up } from '../../Redux/Slice/AuthSlice';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {
  let navigate = useNavigate()
  let dispatch = useDispatch();
  let [inputData, setInputState] = useState({
    fname: '',
    lname: '',
    email: '',
    pwd: ''
  })
  let [imgData, setImgState] = useState()
  let handleChange = (event) => {
    event.persist();
    let { name, value } = event.target
    setInputState({ ...inputData, [name]: value })
  }
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Data :", inputData);
    console.log("Files :", imgData);
    let formData = new FormData();
    formData.append("first_name", inputData.fname)
    formData.append("last_name", inputData.lname)
    formData.append("email", inputData.email)
    formData.append("password", inputData.pwd)
    formData.append("profile_pic", setImgState)
    // console.log(setState);       
    dispatch(sign_up(formData))
    navigate('/login')
  }
  return (
    <div className='container-fluid signUpMainDiv'>
      <Container>
        <Row>
        <Col sm={12} md={6} lg={6} xl={6}>
        <p className='display-2 text-center text-white py-5 mt-5 userCaption'><br/>Be a part of us!</p>
        </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <Container className='px-5'>
              <Form onSubmit={handleSubmit} className='mt-4 mb-5 py-5 px-5 signUpFormDiv'>
              <h2 className='text-center'>Sign Up Form</h2>
                <Form.Group className="mb-3 py-2" controlId="fname">
                  <Form.Control type="text" name='fname' placeholder="Enter first name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3 py-2" controlId="lname">
                  <Form.Control type="text" name='lname' placeholder="Enter last name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3 py-2" controlId="email">
                  <Form.Control type="text" name='email' placeholder="Enter email id" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3 py-2" controlId="pwd">
                  <Form.Control type="password" name='pwd' placeholder="Enter Password" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3 py-2">
                  <Form.Control type="file" name='profile_pic' onChange={(event) => setImgState(event.target.files[0])} accept='image/*' />
                </Form.Group>
                <Button type="submit" className='signUpBtn'>Submit</Button>
              </Form>
      </Container>
      </Col>
      </Row>
      </Container>
    </div>
  )
}

export default SignUp