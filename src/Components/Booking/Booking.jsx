import React, { useEffect, useState } from 'react'
import './Booking.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
const Booking = () => {
  let userToken = window.sessionStorage.getItem("userEmail")
  console.log("User Token :", userToken);
  // let loginUrl='https://wtsacademy.dedicateddevelopers.us/api/user/signin'
  let url = 'http://localhost:1000/data'
  let navigate = useNavigate()
  let [inputData, setData] = useState({
    fullName: '',
    email: '',
    contact: '',
    checkIn: '',
    checkOut: '',
    adults: '',
    children: '',
    room_type: '',
    isError:{
      fullName: '',
    email: '',
    contact: '',
    checkIn: '',
    checkOut: '',
    adults: '',
    children: '',
    room_type: ''
    }
  })
  let handleChange = (event) => {
    event.persist();
    let { name, value } = event.target
    // console.log("name :", name, "value :", value);
    setData({ ...inputData, [name]: value });
    let err={...inputData.isError}
    switch(name){
      case 'fullName':
        if(value<=0)
        err.fullName="*Required";
      else
      err.fullName="";
    break;
    case 'email':
        if(value<=0)
        err.email="*Required";
      else
      err.email="";
    break;
    case 'contact':
        if(value<=0)
        err.contact="*Required";
      else
      err.contact="";
    break;
    case 'check_in_date':
        if(value<=0)
        err.checkIn="*Required";
      else
      err.checkIn="";
    break;
    case 'check_out_date':
        if(value<=0)
        err.checkOut="*Required";
      else
      err.checkOut="";
    break;
    case 'adults':
        if(value<=0)
        err.adults="*Required";
      else
      err.adults="";
    break;
    case 'children':
        if(value<0)
        err.children="*Required";
      else
      err.children="";
    break;
    case 'room_type':
        if(value<=0)
        err.room_type="*Required";
      else
      err.room_type="";
    break;
    default:break;
    }
    setData({...inputData,[name]:value,isError:err})
  }
  let handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputData, "submitted value");
    let data = {
      fullname: inputData.fullName,
      email: inputData.email,
      contact_no: inputData.contact,
      check_in_date: inputData.checkIn,
      check_out_date: inputData.checkOut,
      adults: inputData.adults,
      children: inputData.children,
      room_type: inputData.room_type
    }
    // console.log("data to be submitted", data);
    if (data.check_in_date > data.check_out_date) {
      alert('Check out is earlier than check in date');
    }
    else if (data.check_in_date === data.check_out_date) {
      alert('Both dates can not be same');
    }
    else {
      axios.post(url, data).then(res => {
        // console.log("Axios in res :", res.data);
        navigate(`receipt/${res.data.email}`)
      })
        .catch(err => {
          alert(err.message)
        })
    }
  }
  return (
    <div className='bookingMainDiv'>
      <Container>
        <div className="booking">
          <Row>
            <Col sm={12} md={6} lg={6} xl={6}>
              <div className='img_Div'>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} xl={6}>
              <div className='formDiv '>
                <h5 className='text-light mb-2 text-center'>Fill Up Details</h5>
                <form onSubmit={handleSubmit}>
                  <input type='name' name='fullName' className='form-control mt-2'
                    placeholder='Full Name' onChange={handleChange} />
                    {inputData.isError.fullName.length>0 ?
                    <p className='text-warning'>{inputData.isError.fullName}</p>:""}
                    <br />
                  <input type='email' name='email' className='form-control'
                    placeholder='Email id' onChange={handleChange} />
                    {inputData.isError.email.length>0 ?
                    <p className='text-warning'>{inputData.isError.email}</p>:""}
                    <br />
                  <input type='text' name='contact' className='form-control'
                    placeholder='Contact No.' onChange={handleChange} />
                    {inputData.isError.contact.length>0 ?
                    <p className='text-warning'>{inputData.isError.contact}</p>:""}
                    <br />
                  <Row>
                    <Col>
                      <label htmlFor='date' className='text-white'>Check In :</label><br />
                      <input type='date' name='checkIn' className='form-control'
                        onChange={handleChange} />
                        {inputData.isError.checkIn.length>0 ?
                          <p className='text-warning'>{inputData.isError.checkIn}</p>:""}
                          <br />
                    </Col>
                    <Col>
                      <label htmlFor='date' className='text-white'>Check Out :</label><br />
                      <input type='date' name='checkOut' className='form-control'
                        onChange={handleChange} />
                        {inputData.isError.checkOut.length>0 ?
                          <p className='text-warning'>{inputData.isError.checkOut}</p>:""}
                          <br />
                    </Col></Row>
                  <Row>
                    <Col>
                      <input type='number' name='adults' className='form-control'
                        placeholder='No of Adults' onChange={handleChange} />
                        {inputData.isError.adults.length>0 ?
                          <p className='text-warning'>{inputData.isError.adults}</p>:""}
                          <br />
                    </Col>
                    <Col>
                      <input type='number' name='children' className='form-control' 
                      placeholder='No of Children' onChange={handleChange} />
                      {inputData.isError.children.length>0 ?
                          <p className='text-warning'>{inputData.isError.children}</p>:""}
                          <br />
                    </Col>
                  </Row>
                  <label htmlFor='room' className='text-white'>Select Room Type :</label><br />
                  <select class="form-select" name='room_type' onChange={handleChange}>
                    <option>Ocean View Room</option>
                    <option>Beach Villa</option>
                    <option>Premium Room</option>
                    <option>Royal Family Suite</option>
                    <option>Honeymoon Suite</option>
                  </select>
                  {inputData.isError.room_type.length>0 ?
                          <p className='text-white'>{inputData.isError.room_type}</p>:""}
                          <br />
                  <input className="btn btn-primary " type="submit" value="Submit" />
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Booking