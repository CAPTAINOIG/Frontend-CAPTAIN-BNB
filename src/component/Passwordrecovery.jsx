import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Passwordrecovery = () => {
  let navigate = useNavigate()
  let endpoint = 'http://localhost:3000/user/password'
  const [data, setdata] = useState({
    email: '',
  })
  const handlechanges = (e) => {
    const {name, value} = e.target;
    setdata({...data,[name]:value})
  }
   const sumit = () => {
    if (data.email.trim === '') {
      console.log('error');
    } else {
      axios.post(endpoint, data)
      .then((res)=>{
        console.log(res);
        navigate("/reset")

      }).catch((err)=>{
        console.log(err);
      })
    }
    console.log(data);
    localStorage.setItem("email", JSON.stringify(data.email))
  }
  return (
    <div>
        <label htmlFor="email">Enter your email</label>
        <input type="text" name='email' onChange={handlechanges} />
        <button onClick={sumit}>submit</button>
    </div>
  )
}

export default Passwordrecovery