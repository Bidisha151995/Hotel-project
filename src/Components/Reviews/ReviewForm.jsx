import React, { useState } from 'react'
import './ReviewForm.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const ReviewForm = () => {
    let userToken=window.sessionStorage.getItem("token")
    console.log("user token :",userToken);
    let userEmail=window.sessionStorage.getItem("userEmail")
    console.log("user email :",userEmail);
    let url='http://localhost:2000/reviews' 
    let navigate=useNavigate()
    let [inputData, setData] = useState({ name: '',msg: '' })
    let handleChange =(event)  => {
        event.persist();
        let { name, value } = event.target;
        // console.log("Name :", name, "Value :", value);
        setData({ ...inputData, [name]: value })
    }
let handleSubmit=(event)=>{
    event.preventDefault();
    console.log("Submitted Data :",inputData);
    let data={
        name:inputData.name,
        msg:inputData.msg,
        email:userEmail
    }
    console.log("data to be submitted", data);  
    axios.post(url,data).then(res=>{
        console.log("Axios in res :",res.data);
        navigate(`/reviews/${res.data.email}`)
    }).catch(err=>{
        console.log("Axios error :",err);
    })

}
    return (
        <div className="container-fluid py-5 mb-5 reviewMainDiv">
            <h2 className='display-5 text-white text-center mb-5 reviewTag'>Share Your Experience With Us</h2>
            <form className='container w-50 border border-info p-3 reviewFormdiv' onSubmit={handleSubmit}>
                <input type="text" className="form-control mt-5 mb-3" name="name" placeholder="Your Name" onChange={handleChange}
                 /><br />
                <textarea className="form-control mb-3 py-5" name='msg' placeholder="Share your experience" onChange={handleChange} /><br />
                <input type="submit" className="btn btn-warning" value='Share' />
            </form>
        </div>
    )
}

export default ReviewForm