import React, { useContext, useState } from 'react'
import { GrKey } from 'react-icons/gr'
import { FaTree, } from 'react-icons/fa'
import { MdOutlineSurfing } from 'react-icons/md'
import { BsHouseDoor, BsFillHouseFill } from 'react-icons/bs'
import { GiFarmer } from 'react-icons/gi'
import { MdCheckroom, MdOutlineViewComfyAlt, MdOutlineFilterFrames } from 'react-icons/md'
import { SiMaterialdesign, SiNiconico } from 'react-icons/si'
import { LiaUmbrellaBeachSolid } from 'react-icons/lia'
import { TbDiscountCheckFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom'


const Display = () => {
    return (
        <>
            <section id='displaysec' className='grid grid-cols-2 gap-20 mt-[-10px]  p-7'>
                <div className='grid grid-cols-10 lg:gap-10 gap-9'>
                    <Link to="">
                        <div className=''>
                            <BsFillHouseFill size={20} className='lg:ms-3' />
                            <h3 id='display'>House</h3>
                        </div>
                    </Link>

                    <Link to="">
                        <FaTree size={20} className='lg:ms-4' />
                        <div className='card-body text-sm me-7'>
                            <h3 id='display'>Tropical</h3>
                        </div>
                    </Link>

                    <Link to="">
                        <MdOutlineSurfing size={20} className='lg:ms-4' />
                        <div className='text-sm'>
                            <h3 id='display'>Surfing</h3>
                        </div>
                    </Link>

                    <Link to="">
                        <BsHouseDoor size={20} className='lg:ms-4' />
                        <div className='text-sm'>
                            <h3 id='display'>Rooms</h3>
                        </div>
                    </Link>

                    <Link to="">
                        <MdCheckroom size={20} className='' />
                        <div className='text-sm'>
                            <h3 id='display'>Top</h3>
                        </div>
                    </Link>
                    <Link to="">
                        <MdOutlineViewComfyAlt size={20} className='lg:ms-2' />
                        <div className='text-sm'>
                            <h3 id='display'>Views</h3>
                        </div>
                    </Link>
                    <Link to="">
                        <SiMaterialdesign size={20} className='lg:ms-4' />
                        <div className='text-sm'>
                            <h3 id='display'>Designs</h3>
                        </div>
                    </Link>
                    <Link to="">
                        <SiNiconico size={20} className='lg:ms-1' />
                        <div className='text-sm'>
                            <h3 id='display'>Cities</h3>
                        </div>
                    </Link>
                    <Link to="">
                        <GiFarmer size={20} className='lg:ms-1' />
                        <div className='text-sm'>
                            <h3 id='display'>OMG</h3>
                        </div>
                    </Link>
                    <Link to="">
                        <LiaUmbrellaBeachSolid size={20} className='lg:ms-1' />
                        <div className='text-sm'>
                            <h3 id='display'>Beach</h3>
                        </div>
                    </Link>
                </div>
                <div className='flex gap-5 lg:ms-56' id='filter'>
                    <div className='flex dark:shadow-md border border-gray-300 rounded-md gap-2 items-center py-2 px-4 shadow-md shadow-gray-300'>
                        <span>Filters</span><span><MdOutlineFilterFrames /></span>
                    </div>
                    <div className=' flex border dark:shadow-md border-gray-300 rounded-md gap-2 items-center py-2 px-4 shadow-md shadow-gray-300'>
                        <div>Display before taxes</div>
                        <TbDiscountCheckFilled />
                    </div>
                </div>


            </section>
        </>
    )
}

export default Display