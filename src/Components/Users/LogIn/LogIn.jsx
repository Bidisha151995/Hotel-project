import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { sign_in } from '../../Redux/Slice/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './LogIn.css'
const SignIn = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [data, setData] = useState(
    {
      email: '',
      pwd: '',
      isError: {
        email: '',
        pwd: ''
      }
    })
  let handleChange = (event) => {
    event.persist();
    let { name, value } = event.target;
    // console.log("Name :",name,"Value :",value);
    let err = { ...data.isError }
    switch (name) {
      case 'email':
        if (value.length <= 0)
          err.email = "*Required";
        else
          err.email = "";
        break;
        case 'pwd':
          if (value<=0)
          err.pwd="*Required";
        else
        err.pwd="";
        break;
        default:break;
    }
    setData({ ...data, [name]: value,isError:err })
  }
  let handleSubmit = (event) => {
    event.preventDefault();
    let formdata = new FormData();
    formdata.append('email', data.email)
    formdata.append('password', data.pwd)
    dispatch(sign_in(formdata))
    navigate('/');
    window.location.reload();

  }
  return (
    <div className='container-fluid loginMainDiv'>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6} xl={6} className='py-5 mt-3'>
            <p className='display-2 text-center text-white py-5 userCaption'><br />Be a part of us!</p>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <Container className='px-5'>
              <Form onSubmit={handleSubmit} className='mt-5 mb-5 py-5 px-5 logInFormDiv'>
                <h2 className='text-center mt-2'>Log In</h2>
                <Form.Group className="mb-3 py-3" controlId="email">
                  <Form.Control type="email" name='email' className='formInput' 
                  placeholder="Enter email id" onChange={handleChange} />
                  {data.isError.email.length>0?
                  <p className='text-danger'>{data.isError.email}</p>:""}
                </Form.Group>
                <Form.Group className="mb-3 py-3" controlId="pwd">
                  <Form.Control type="password" name='pwd' className='formInput' 
                  placeholder="Enter Password" onChange={handleChange} />
                  {data.isError.pwd.length>0?
                  <p className='text-danger'>{data.isError.pwd}</p>:""}
                </Form.Group>
                <Button type="submit" className='logInBtn'>Submit</Button>
                <h6 className='text-center mt-5'>Don't have an account ? &nbsp;
                  <Link to='/signup'><span className='linkWord'>Sign up</span></Link>
                </h6>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SignIn