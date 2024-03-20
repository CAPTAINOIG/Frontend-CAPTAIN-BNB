import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GiOakLeaf } from 'react-icons/gi'
import { useState } from 'react'
import { FaSnapchatGhost } from 'react-icons/fa'
import { MdLocationOn, MdLocalBar } from 'react-icons/md'
const Guestfavorite = () => {
    let leaseDetails = JSON.parse(localStorage.getItem('lease'))
    // console.log(leaseDetails.hostName);
    const [hostImage, setHostImage] = useState("")
    const [hostName, setHostName] = useState("")
    const [years, setYears] = useState("")
    const [rating, setRating] = useState("")
    const [message, setMessage] = useState("")
    const [about, setAbout] = useState("")



    useEffect(() => {
        setHostImage(leaseDetails.HostImage)
        setHostName(leaseDetails.hostName)
        setYears(leaseDetails.years)
        setRating(leaseDetails.rating)
        setMessage(leaseDetails.message)
        setAbout(leaseDetails.about)

    }, [])

    return (
        <section>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div className='border border-pink-200 rounded-lg lg:ms-28 my-3 p-3'>
                    <Link className='grid lg:grid-cols-2 grid-cols-1 text-sm font-bold' to="">
                        <div className='flex lg:ms-0 ms-20'>
                            <span><GiOakLeaf size={30} className='mt-1' /></span>
                            <p className='text-center'>Guest <br /> favorite</p>
                            <span><GiOakLeaf size={30} className='mt-1' /></span>
                        </div>
                        <div className='lg:ms-0 ms-10'>One of the most loved homes <br /> on Captainbnb, according to guests</div>
                    </Link>
                </div>
            </div>

            <div className='lg:ms-28 ms-5 flex gap-7 my-5'>
                <div>
                    <img className='rounded-full mt-5' src={hostImage} alt="" width={60} />
                </div>
                <div className=' text-sm mt-1'>
                    <div>Hosted by {hostName}</div>
                    <div>Superhost: {years} years hosting</div>
                    <div>Message: {message}</div>
                    <div>About: {about}</div>
                </div>
            </div>
            <div className='lg:ms-28 ms-5 flex gap-7 my-5'>
                <div>
                    <FaSnapchatGhost className='mt-2' />
                </div>
                <div className=' text-sm'>
                    <div>{hostName}  is a Superhost</div>
                    <p>Superhosts are experienced, highly rated Hosts.</p>
                    <p></p>
                </div>
            </div>
            <div className='lg:ms-28 ms-5 flex gap-7 my-5'>
                <div>
                    <MdLocationOn className='mt-2' />
                </div>
                <div className=' text-sm'>
                    <div>Great location</div>
                    <div>100% of recent guests gave the location a {rating}-star rating.</div>
                </div>
            </div>

            <div className='lg:ms-28 ms-5 flex gap-7 my-5'>
                <div>
                    <MdLocalBar />
                </div>
                <div className=' text-sm '>
                    <div>Free cancellation before December 6</div>

                </div>
            </div>
            <hr />
        </section>
    )
}

export default Guestfavorite