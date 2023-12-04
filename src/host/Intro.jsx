import React from 'react'
import digital from '../assets/image/digital.jpg'
import host3 from '../assets/image/host3.png'

const Intro = () => {
  return (
    <div>
        <div className='grid lg:grid-cols-2 grid-cols-1 font-serif'>
        <div className='text-center'>
        <img src={host3} alt="" className='mx-auto lg:mt-28 mt-20 lg:p-0 p-5' />
        <h1 className='text-4xl font-bold'>Get started with Captain BNB</h1>
        <p className='lg:text-2xl my-3'>Are you looking to sell a property?</p>
        <span>New to Captain bnb?</span>
        <div className='bg-pink-800 lg:w-[10%] w-[20%] text-center mx-auto p-2 my-2 rounded hover:bg-pink-500'>
        <a href="/hosting">Host</a>
        </div>
        </div>
        <div>
        <img src={digital} alt="" className='hidden lg:block h-screen' />
        </div>
        </div>
    </div>
  )
}

export default Intro