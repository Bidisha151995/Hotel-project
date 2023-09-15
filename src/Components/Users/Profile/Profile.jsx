import React from 'react'
import { useSelector } from 'react-redux'
import {user} from '../../Redux/Slice/AuthSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
const User = () => {
    const {first_name,last_name,email,profile_pic}=useSelector(state=>state);
    console.log("First Name :",first_name,
"\n Last Name :",last_name,
    "\nEmail :", email,
   "\nProfile :", profile_pic);

  return (
    <div>Profile</div>
  )
}

export default User