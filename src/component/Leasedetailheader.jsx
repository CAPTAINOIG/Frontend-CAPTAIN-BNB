import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaUserCircle, FaBars, FaConnectdevelop } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Leasedetailheader = () => {
    return (
        <div className='p-4 text-[90%] flex justify-between border mb-4 border-gray-200 font-bold'>
            <Link to="/" className='flex items-center gap-1'>
                <FaConnectdevelop size={25} className='text-pink-600' />
                <span className='font-bold text-xl text-pink-600 '>captainbnb</span>
            </Link>
            <div id='week' className='lg:ms-10 flex gap-2 border border-gray-300 rounded-full py-2 px-4 dark:shadow-md shadow-md shadow-gray-300'>
                <div>Anywhere</div>
                <div className='border-1 border-gray-300'>
                    <div>Any week</div>
                </div>
                <div className='border-1 border-gray-300'>
                    <div>Add guests</div>
                </div>
                <button className='text-white p-2 bg-pink-600  rounded-full'><AiOutlineSearch /></button>
            </div>
            <div className='flex'>
                <div className='flex lg:me-5 font-bold font-serif lg:gap-2 mt-3'>
                    <span id='Captainbnb'>Captainbnb your home </span>


                </div>
                <Link to="/" className='flex gap-2 border items-center border-gray-300 rounded-full py-2 px-4'>
                    <div>
                        <FaBars className='cursor-pointer' />
                    </div>
                    <div className='bg-gray-500 text-white rounded-full border cursor-pointer border-gray-500 relative overflow-hidden'>
                        <FaUserCircle />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Leasedetailheader