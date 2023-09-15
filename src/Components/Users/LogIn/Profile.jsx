import axios from 'axios'
import React, { useEffect } from 'react'

const Profile = () => {
    let url="https://wtsacademy.dedicateddevelopers.us/api/user/profile-details"
    let validToken=window.sessionStorage.getItem("Token")
    let[user,setUser]=useState({
        first_name:'',
        last_name:'',
        email:'',
        register_type:'',
        profle_pic:''
    })
    useEffect(()=>{
        axios.get(url,{
            headers:{
                "x-access-token":validToken,
                "Content-type":"application/x-www-form-urlencoded"
            },
        }).then(res=>{
            if(res.data.status===200){
                let base_path="https://wtsacademy.dedicateddevelopers.us/";
                let folder_path="uploads/user/profile_pic/";
                let profile_pic=res.data.data.profile_pic;
                let img_url=base_path+folder_path+profile_pic;
                // console.log("Image url :",img_url);
                setUser({...user,
                    first_name:res.data.data.first_name,
                    last_name:res.data.data.last_name,
                    email:res.data.data.email,
                    register_type:res.data.data.register_type,
                    profile_pic:img_url
                })
            }      
            else{
                console.log("Error in login");
            }     
        }).catch(err=>{
            console.log("Error :",err);
        })
    },[setUser])
  return (
    <div>
       <h3>{user.first_name}</h3> 
    </div>
  )
}

export default Profile