import React, { useState, useEffect } from 'react';
import axios from 'axios';
import gif from '../assets/image/gif.gif'
import {IoIosArrowRoundBack} from 'react-icons/io'
import { Link } from 'react-router-dom';



const ResetPassword = () => {

    let userEmail = JSON.parse(localStorage.getItem("email"))
    // console.log(userEmail);
const email = userEmail;
    const [data, setData] = useState({
        email: email,
        otp: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)




    const handleChanges = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.otp || !data.newPassword || !data.confirmPassword) {
          setError('Please fill in all fields');
        } else if (data.newPassword !== data.confirmPassword) {
          setError('Passwords do not match');
        } else {
          setError('');
          setLoading(true);
    
          axios.post('https://captain-bnb.onrender.com/user/reset', data)
            .then((res) => {
              console.log(res);
              setMessage('Password reset successful');
              setLoading(false);
            })
            .catch((err) => {
              setLoading(false);
              if (err.response && err.response.data && err.response.data.error) {
                setError(err.response.data.error);
              } else {
                setError('Something went wrong');
              }
            });
        }
    }

    return (
        



        <section className='p-4' id='passrec'>
        <form className='border font-serif bg-white shadow-lg lg:w-[35%] w-[90%] p-5 lg:mt-[5%] mt-[40%]  rounded-md mx-auto' onSubmit={handleSubmit}>
        <div>{message}</div>
            <h5 className=' mb-4'>A token has been sent to your email, use it to reset your password</h5>
            <label className='font-bold' htmlFor="otp">Otp</label>
            <input className='border border-pink-500 mb-4 h-[33px] w-full rounded lg:w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent' type="password" name='otp' onChange={handleChanges} />
            <label className='font-bold' htmlFor="newPassword">New Password</label>
            <input className='border  mb-4 border-pink-500 h-[33px] w-full rounded lg:w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent' type="password" name='newPassword' onChange={handleChanges} />
            <label className='font-bold' htmlFor="confirmPassword">Confirm Password</label>
            <input className='border  mb-4 border-pink-500 h-[33px] w-full rounded lg:w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent' type="password" name='confirmPassword' onChange={handleChanges} />
            <div className='flex lg:ms-[30%] my-3'>
            <IoIosArrowRoundBack className='arr' size={25} />
            <div id='backtoLogin' className='text-center'><Link to="/login">back to Login</Link></div>
          </div>
            {error && <div className="text-red-800">{error}</div>}
            <button type='submit' className='bg-pink-800 text-white rounded h-[35px] lg:mt-5 lg:w-[100%] w-[100%]'>
            {
                loading ? <img src={gif} alt="" width={25} className='mx-auto' /> : 'SUBMIT'
            }
            </button>
        </form>
    </section>
    );
};

export default ResetPassword;
