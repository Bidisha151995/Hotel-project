import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Receipt.css'
import { useParams } from 'react-router-dom'
const Receipt = () => {
   let userToken=window.sessionStorage.getItem("userEmail")
      console.log("User Token :",userToken);
  let { book_mail } = useParams()
  console.log("Used booking mail: ", book_mail);
  let url = `http://localhost:1000/data`
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get(url).then(res => {
      // console.log("Axios in response :",res.data);
      let booking_details = res.data.filter((booking) => booking.email === book_mail)
      console.log("Booking Details: ", booking_details);
      setData(booking_details)
    }).catch(err => {
      console.log("Error :", err)
    })
  }, [setData])
  return (
    <div className='rcptMainDiv'>
      <div className='container-fluid receiptDiv text-white'>
        <h1 className='receipth1 text-center mt-4'>Thank you for choosing us!</h1>
        <h3 className='text-center'>Check out your booking details</h3>
        <hr />
      </div >

      {data.map(u => (
        <div key={u.id} className='container tableDiv px-5'>
          <table className='table'>
            <tr>
              <th scope='col'>Name : </th>
              <th scope='col'>{u.fullname} </th>
            </tr>
            <tr>
              <th scope='col'>Email Id </th>
              <th scope='col'>{u.email} </th>
            </tr>
            <tr>
              <th scope='col'>Contact No : </th>
              <th scope='col'>{u.contact_no} </th>
            </tr>
            <tr>
              <th scope='col'>Check In Date : </th>
              <th scope='col'>{u.check_in_date} </th>
            </tr>
            <tr>
              <th scope='col'>Check Out Date : </th>
              <th scope='col'>{u.check_out_date} </th>
            </tr>
            <tr>
              <th scope='col'>No of Adults : </th>
              <th scope='col'>{u.adults} </th>
            </tr>
            <tr>
              <th scope='col'>No of Children : </th>
              <th scope='col'>{u.children} </th>
            </tr>
            <tr>
              <th scope='col'>Room Type : </th>
              <th scope='col'>{u.room_type} </th>
            </tr>
          </table>
        </div>
      ))
      }
    </div>

  )
}

export default Receipt