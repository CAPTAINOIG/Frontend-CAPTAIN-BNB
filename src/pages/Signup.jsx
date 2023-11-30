import React, { useState } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import swal from 'sweetalert';
import gif from '../assets/image/gif.gif'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
  let navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    otp:"",
    password: yup
      .string()
      .required()
      .matches(/[a-z]/, 'Must include lowercase letter')
      .matches(/[A-Z]/, 'Must include uppercase letter')
      .matches(/[0-9]/, 'Must include a number')
      .min(8, 'Must be at least 8 characters long')
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });


  const sweetAlertSuccess = () => {
    swal({
      title: "Congratulations",
      text: "You signed up successfully",
      icon: "success",
      button: "Ok"
    });
  }

  const sweetAlertError = (message) => {
    swal({
      title: "Error",
      text: message,
      icon: "error",
      button: "Ok"
    });
  }


  // let endpoint = 'http://localhost:3000/user/signup'

  let endpoint = 'https://captain-bnb.onrender.com/user/signup';

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true)
    axios.post(endpoint, data)
      .then((response) => {
        console.log(response.data);
        // setMessage(response)
        if (response.data.status) {
          sweetAlertSuccess()
          navigate("/login")
        }
        else {
          sweetAlertError(response.data.message)
          setLoading(false)
        }
      })
      .catch((err)=>{
        console.log(err);
        if(err.response.status == 409){
          console.log('Duplicate user found');
          sweetAlertError('Duplicate user found')
        } else if(err.response.status == 400){
          console.log('Fill in appropriately');
          sweetAlertError('Fill in appropriately')
        }
        setLoading(false)
      })

  }
  return (
    <section>

      <div className='background'>
        <form className='border bg-white lg:w-[35%] w-[90%] p-5 mt-5 mx-auto rounded-lg' action="" onSubmit={handleSubmit(onSubmit)}>
          <h1 className='text-3xl text-center text-pink-800 font-bold font-sans'>SIgn up</h1>
          <div className='my-2'>
            <label className='font-bold text-pink-800' htmlFor="">firstname</label>
            <input {...register("firstName")} type="text" className={`border border-pink-500 h-[35px] mt-3 w-full rounded lg:w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${errors.firstName?.message && 'error'}`}
            />
            <p className='text-red-600 text-sm'>{errors.firstName?.message}</p>
          </div>

          <div className='my-2'>
            <label className='font-bold text-pink-800' htmlFor="">lastname</label>
            <input {...register("lastName")} type="text" className={`border border-pink-500 h-[35px] mt-3 w-full rounded lg:w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${errors.lastName?.message && 'error'}`}
            />
            <p className='text-red-600 text-sm'>{errors.lastName?.message}</p>
          </div>

          <div className='my-2'>
            <label className='font-bold text-pink-800' htmlFor="">Email Address</label>
            <input {...register("email")} type="text" className={`border border-pink-500 h-[35px] mt-3 w-full rounded lg:w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${errors.email?.message && 'error'}`}
            />
            <p className='text-red-600 text-sm'>{errors.email?.message}</p>
          </div>

          <div className='my-2'>
            <label className='font-bold text-pink-800' htmlFor="">Phone Number</label>
            <input {...register("phone")} type="text" className={`border border-pink-500 h-[35px] mt-3 w-full rounded lg:w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${errors.phone?.message && 'error'}`}
            />
            <p className='text-red-600 text-sm'>{errors.phone?.message}</p>
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
          <button type='submit' className='bg-pink-800 text-white rounded  lg:mt-2 lg:p-3 p-2 lg:w-[100%] w-[100%]'>
            {
              loading ? <img src={gif} alt="" width={25} className='mx-auto' /> : 'SUBMIT'
            }
          </button>

        </form>

      </div>
    </section>
  )
}

export default Signup