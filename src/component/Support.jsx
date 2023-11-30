import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import {TbDiscountCheckFilled} from 'react-icons/tb'

const Support = () => {
    return (
        <div className='bg-pink-900 text-white p-5'>
            <div className='grid lg:grid-cols-3'>
                <div className='my-5'>
                    <div className='font-bold'><Link to="">Support</Link></div>
                    <p> <Link className='hover:text-blue-600 text-sm' to="">Help Center</Link></p>
                    <p><Link className='hover:text-blue-600 text-sm' to="">AirCover</Link></p>
                    <p><Link className='hover:text-blue-600 text-sm' to="">Anti-discrimination</Link></p>
                    <p> <Link className='hover:text-blue-600 text-sm' to="">Disability Support</Link></p>
                    <p> <Link className='hover:text-blue-600 text-sm' to="">Cancellation options</Link></p>
                    <p>  <Link className='hover:text-blue-600 text-sm' to="">Report neighborhood concern</Link></p>
                </div>

                <div className='my-5'>
                    <div className='font-bold'><Link to="">Hosting</Link></div>
                    <p><Link className='hover:text-blue-600 text-sm' to="">Captainbnb your Home</Link></p>
                    <p><Link className='hover:text-blue-600 text-sm' to="">AirCover for Hosts</Link></p>
                    <p><Link className='hover:text-blue-600 text-sm' to="">Hosting resources</Link></p>
                    <p><Link className='hover:text-blue-600 text-sm' to="">Community form</Link></p>
                    <p><Link className='hover:text-blue-600 text-sm' to="">Hosting responsibly</Link></p>
                    <p><Link className='hover:text-blue-600 text-sm' to="">Captainbnb apartments</Link></p>
                </div>

                <div className='my-5'>
                    <div className='font-bold'><Link to="">Captainbnb</Link></div>
                    <p><Link className='text-sm hover:text-blue-600 ' to="">Newsroom</Link></p>
                    <p><Link className='hover:text-blue-600 text-sm' to="">New features</Link></p>
                    <p><Link className='hover:text-blue-600 text-sm' to="">Careers</Link></p>
                    <p><Link className='hover:text-blue-600 text-sm' to="">Investors</Link></p>
                    <p><Link className='hover:text-blue-600 text-sm' to="">Gift cards</Link></p>
                    <p><Link className='hover:text-blue-600 text-sm' to="">Captainbnb.org emergency stays</Link></p>
                </div>
            </div>

            <hr className='my-5' />
            <div className='lg:flex text-sm'>
                <div className='lg:flex lg:gap-5 gap-3'>
                    <span>© 2023 Captainbnb, Inc.</span>
                    <div className='gap-3 lg:flex'>
                    <Link className='hover:text-blue-600' to="">Terms</Link>
                    <Link className='lg:ms-0 ms-2 hover:text-blue-600' to="">Sitemap</Link>
                    <Link className='lg:ms-0 ms-2 hover:text-blue-600' to="">Privacy</Link>
                    <Link className='lg:ms-0 ms-2 hover:text-blue-600' to="">Your Privacy Choices</Link>
                    </div>
                </div>
                <div className='lg:ms-[45%] gap-2 flex'>
                <Link className='hover:text-blue-600 mt-1' to=""><TbDiscountCheckFilled/></Link>
                <Link className='hover:text-blue-600' to="">English(US)</Link>
                <Link className='hover:text-blue-600' to="">#</Link>
                <Link className='hover:text-blue-600' to="">NGN</Link>
                </div>
                <div className='flex gap-2 lg:ms-5'>
                <Link to=""><FaFacebook className='mt-1 hover:text-blue-600' /></Link>
                <Link to=""><AiFillTwitterCircle className='mt-1 hover:text-blue-600'/></Link>
                <Link to=""><AiFillInstagram className='mt-1 hover:text-blue-600'/></Link>
                </div>
            </div>
        </div>

    )
}

export default Support