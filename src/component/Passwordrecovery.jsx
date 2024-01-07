import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
import gif from '../assets/image/gif.gif'


const Passwordrecovery = () => {
  let navigate = useNavigate()
  // let endpoint = 'http://localhost:3000/user/password'
  let endpoint = 'https://captain-bnb.onrender.com/user/password'

  const [data, setdata] = useState({
    email: '',
  })
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const handlechanges = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value })
  }
  const sumit = () => {
    setLoading(true)
    if (data.email === '') {
      alert('Input cannot be empty');
    } else {
      axios.post(endpoint, data)
        .then((res) => {
          console.log(res.data.message);
          setMessage(res.data.message)
          setLoading(false)
          navigate("/reset")

        }).catch((err) => {
          console.log(err.response.data.message);
          setMessage(err.response.data.message)
          setLoading(false)
        })
    }
    // console.log(data);
    localStorage.setItem("email", JSON.stringify(data.email))
  }
  return (



    <section className='p-4' id='passrec'>
      <div className='border font-serif bg-white shadow-lg lg:w-[35%] w-[90%] p-5 lg:mt-[10%] mt-[40%]  rounded-md mx-auto'>
        <div>{message}</div>
        <h3 className='text-center'>Forgotten your password?</h3>
        <div className='flex my-3 lg:ms-[30%] ms-[20%]'>
          <IoIosArrowRoundBack className='arr' size={25} />
          <div><Link to="/login">back to Login</Link></div>
        </div>
        <label className='font-bold' htmlFor="email">Email Address</label>
        <input className='border border-pink-500 h-[33px] mt-3 w-full rounded lg:w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent' placeholder='e.g johndoe@gmail.com' type="text" name='email' onChange={handlechanges} />
        <button onClick={sumit} className='bg-pink-800 text-white rounded h-[35px] lg:mt-5 mt-6 lg:w-[100%] w-[100%]'>
          {
            loading ? <img src={gif} alt="" width={25} className='mx-auto' /> : 'SUBMIT'
          }
        </button>

      </div>
    </section>
  )
}

export default Passwordrecovery