import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Paystack from '../component/Paystack';


const Dashboard = () => {
  let navigate = useNavigate()
  let token = localStorage.token
  let userDetails = JSON.parse(localStorage.getItem("real_estate"))
  // console.log(userDetails.firstName);
  let leaseDetails = JSON.parse(localStorage.getItem('lease'))
  

  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  }, [])
  

 
  // console.log(token);

  const [firstName, setFirstName] = useState("")
  

  let endpoint = 'http://localhost:3000/user/dashboard'
  // let endpoint = 'https://captain-bnb.onrender.com/user/dashboard'

  useEffect(() => {
    axios.get(endpoint, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then((response)=>{
      // console.log(response);
      setFirstName(response.data.userDetail.firstName)
      if(!response.data.status)
      // localStorage.removeItem("token")
        navigate("/login")
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])
  
  return (
    <div> 
    Welcome {firstName}
      <Paystack/>
    </div>
    
  )
}

export default Dashboard