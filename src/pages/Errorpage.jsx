import React from 'react'
import error from '../assets/image/error.png'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div>
    <Link to="/">Go Back</Link>
        <img className='lg:w-[50%] text-center mx-auto' src={error} alt="" />
    </div>
  )
}

export default Errorpage