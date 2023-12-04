import React from 'react'
import digital from '../assets/image/digital.jpg'
import host3 from '../assets/image/host3.png'

const Intro = () => {
  return (
    <div>
        <div className='grid lg:grid-cols-2 font-serif'>
        <div className='text-center'>
        <img src={host3} alt="" className='mx-auto mt-28' />
        <h1 className='text-4xl font-bold'>Get started with Captain BNB</h1>
        <p className='text-2xl my-3'>Are you looking to sell a property?</p>
        <span>New to Captain bnb?</span>
        <div className='bg-pink-800 w-[10%] text-center mx-auto p-2 my-2 rounded hover:bg-pink-500'>
        <a href="/hosting">Host</a>
        </div>
        </div>
        <div>
        <img src={digital} alt="" className='h-screen' />
        </div>
        </div>
    </div>
  )
}

export default Intro