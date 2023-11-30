import React, { useState } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import gif from '../assets/image/gif.gif'


const Login = () => {
  let navigate = useNavigate()
  
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string()
    .required()
      .matches(/[a-z]/, 'Must include lowercase letter')
      .matches(/[A-Z]/, 'Must include uppercase letter')
      .matches(/[0-9]/, 'Must include a number')
      .min(8, 'Must be at least 8 characters long')
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });



  const sweetAlertSuccess =()=>{
    swal({
      title: "Congratulations",
      text: "You signed in successfully",
      icon: "success",
      button: "Ok"
    });
  }

  const sweetAlertError =(message)=>{
    swal({
      title: "Error",
      text: message,
      icon: "error",
      button: "Ok"
    });
  }


  let endpoint = 'http://localhost:3000/user/login'
  // let endpoint = 'https://captain-bnb.onrender.com/user/login'
  


const onSubmit = (data) => {
  setLoading(true)
  console.log(data);
    axios.post(endpoint, data)
    .then((response)=>{
      console.log(response.data.user);
      localStorage.setItem("real_estate", JSON.stringify(response.data.user))
      localStorage.emails = data.email

      localStorage.token = response.data.token
      setMessage(response.data.message)
      setLoading("")
      if(response.data.status){
        sweetAlertSuccess()
        navigate("/dashboard")
      } else{
        console.log(response.data.message);
        sweetAlertError(response.data.message)
        setLoading(false)
      }
    })
    .catch((err)=>{
      console.log(err);
      if(err.response.status == 401){
        console.log('Wrong password, please type the correct password');
        sweetAlertError('Wrong password, please type the correct password')
      } else if(err.response.status == 404){
        console.log('Wrong email, please type the correct email');
        sweetAlertError('Wrong email, please type the correct email')
      }
      setLoading(false)
    })
    
}
return (
<section>

<div className='login'>
<form className='border bg-white shadow-lg lg:w-[35%] w-[90%] p-5 lg:mt-[10%] mt-[40%]  rounded-md mx-auto' action="" onSubmit={handleSubmit(onSubmit)}>
<h1 className='text-3xl text-center text-pink-800 font-bold font-sans'>SIgn in</h1>
    
    <div className='my-2'>
    <label className='font-bold text-pink-800' htmlFor="">Email Address</label>
    <input
        {...register("email")}
        type="text"
        className={`border border-pink-500 h-[35px] mt-3 w-full rounded lg:w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${errors.email?.message && 'error'}`}
    />
    <p className='text-red-600 text-sm'>{errors.email?.message}</p>
</div>

<div className='my-2'>
<label className='font-bold text-pink-800' htmlFor="">Password</label>
<input
    {...register("password")}
    type="text"
    className={`border border-pink-500 h-[35px] mt-3 w-full rounded lg:w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${errors.password?.message && 'error'}`}
/>
<p className='text-red-600 text-sm'>{errors.password?.message}</p>
</div>


    <button type='submit' className='bg-pink-800 text-white rounded mt-2 lg:p-3 p-2 lg:w-[100%] w-[100%]'>
    {
      loading ? <img src={gif} alt="" width={25} className='mx-auto'  /> : "SUBMIT"
    }</button>
    <div className='flex lg:gap-[3%] gap-5 font-bold mt-3 text-pink-800'>
          <p>Don't have an Account?</p>
          <Link to="/password">Forgot Password</Link>
          <Link to="/signup">Sign up now</Link>
        </div>
</form>

</div>
</section>
)
}

export default Login