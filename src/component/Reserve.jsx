import React, { useEffect, useState } from 'react'
import { TbToolsKitchen2, TbWashEco } from 'react-icons/tb'
import { BsPersonWorkspace, BsAlarmFill } from 'react-icons/bs'
import { MdOutlinePool } from 'react-icons/md'
import { PiTelevisionFill } from 'react-icons/pi'
import { LuAlarmCheck } from 'react-icons/lu'
import { IoIosAdd } from 'react-icons/io'
import { FaWifi, FaBabyCarriage, FaHotTub, FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { FiMinus } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { add, decrease, decrement, increase, increment, minus } from '../Redux/counterSlice'
import Inspiration from './Inspiration'
import Support from './Support'
import Swal from 'sweetalert2'




const Reserve = () => {
    let leaseDetails = JSON.parse(localStorage.getItem('lease'))
    // console.log(leaseDetails.hostName);

    let navigate = useNavigate()
    const [amount, setAmount] = useState("")
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [differenceInDays, setDifferenceInDays] = useState(null);
    const [valid, setValid] = useState("")
    const [service, setService] = useState("")
    const [cleaning, setCleaning] = useState("")



    let myCounter = useSelector((state) => state.counterReducer.count)
    let counter = useSelector((state) => state.counterReducer.counter)
    let addMinus = useSelector((state) => state.counterReducer.children)
    // console.log(addMinus);

    let newCounter = addMinus + myCounter
    // console.log(newCounter);
    let dispatch = useDispatch()

    useEffect(() => {
        // amount
        // console.log(leaseDetails.amount);
        setAmount(leaseDetails.amount)
        
        // service fee
        // console.log(leaseDetails.service);
        setService(leaseDetails.service)

        // cleaning fee
        // console.log(leaseDetails.cleaning);
        setCleaning(leaseDetails.cleaning)
    }, [])

    const down = () => {
        document.querySelector('#adults').style.display = 'block'
        document.querySelector('#down').style.display = 'none'
        document.querySelector('#up').style.display = 'block'
    }

    const up = () => {
        document.querySelector('#adults').style.display = 'none'
        document.querySelector('#down').style.display = 'block'
        document.querySelector('#up').style.display = 'none'
    }

    const close = () => {
        document.querySelector('#adults').style.display = 'none'
        document.querySelector('#down').style.display = 'block'
        document.querySelector('#up').style.display = 'none'
    }

    // amount x no of nights
    let price = amount * differenceInDays
    // console.log(price);
    localStorage.setItem("price", JSON.stringify(price))

    let totalPrice = price + cleaning + service
    // console.log(totalPrice);
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice))


    useEffect(() => {
        if (checkIn && checkOut) {
            calculateDateDifference();
        }
    }, [checkIn, checkOut]);
    const handleDateChange = (event, setDateFunction) => {
        setDateFunction(event.target.value);
        setDifferenceInDays(null); // Reset the difference when dates change
        calculateDateDifference();
    };

    const calculateDateDifference = () => {
        const date1 = new Date(checkIn);
        const date2 = new Date(checkOut);
    
        if (date1 && date2 && date2 >= date1) {
            const differenceInMs = date2 - date1;
            const millisecondsInADay = 1000 * 60 * 60 * 24;
            const differenceInDays = Math.floor(differenceInMs / millisecondsInADay);
    
            if (differenceInDays < 2) {
                // Minimum booking condition not met
                setValid("Minimum booking is 2 days.");
                setDifferenceInDays(null);
            } else {
                setDifferenceInDays(differenceInDays);
                localStorage.setItem("differenceInDays", JSON.stringify(differenceInDays));
                setValid("");
            }
        } else {
            setValid("Please select valid dates.");
        }
    };

    const check = () => {
        if (checkIn === "" || checkOut === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please select a date!',
            });
        } else {
            navigate("/dashboard");
        }
    }
    
    return (
        <>
            <div className='text-lg lg:ms-28 ms-10'>What this place offers</div>
            <div className='grid lg:grid-cols-3 grid-cols-1 my-3 font-serif'>
                <div className='my-5'>
                    <div className='flex gap-3 ms-10 lg:ms-28 my-3'>
                        <TbToolsKitchen2 />
                        <p>kitchen</p>
                    </div>
                    <div className='flex gap-3 ms-10 lg:ms-28 my-3'>
                        <BsPersonWorkspace />
                        <p>Dedicated workspace</p>
                    </div>
                    <div className='flex gap-3 ms-10 lg:ms-28 my-3'>
                        <MdOutlinePool />
                        <p>Private pool</p>
                    </div>
                    <div className='flex gap-3 ms-10 lg:ms-28 my-3'>
                        <PiTelevisionFill />
                        <p>TV with standard cable</p>
                    </div>
                    <div className='flex gap-3 ms-10 lg:ms-28 my-3'>
                        <BsAlarmFill />
                        <p>Carbon monoxide alarm</p>
                    </div>
                </div>
                <div className='my-3'>
                    <div className='flex gap-3 ms-10 lg:ms-28 my-3'>
                        <FaWifi />
                        <p>Wifi</p>
                    </div>
                    <div className='flex gap-3 ms-10 lg:ms-28 my-3'>
                        <FaBabyCarriage />
                        <p>Free parking on premises</p>
                    </div>
                    <div className='flex gap-3 ms-10 lg:ms-28 my-3'>
                        <FaHotTub />
                        <p>Private hot tub - available all year</p>
                    </div>
                    <div className='flex gap-3 ms-10 lg:ms-28 my-3'>
                        <TbWashEco />
                        <p>Washer</p>
                    </div>
                    <div className='flex gap-3 ms-10 lg:ms-28 my-3'>
                        <LuAlarmCheck />
                        <p>Smoke alarm</p>
                    </div>
                </div>

                <div className='rounded-lg border lg:p-3 p-10 lg:border-gray-800 lg:shadow-2xl font-serif lg:w-[75%]'>
                    <span className='font-bold'>#{amount} </span> <span>night</span>
                    <div className='flex gap-2 w-[20%]'>
                        <div className='border border-gray-900 rounded'>
                            <label htmlFor="checkIn">CHECK-IN</label>
                            <input placeholder='checkIn'
                                type="date"
                                id="checkIn"
                                value={checkIn}
                                onChange={(event) => handleDateChange(event, setCheckIn)} className='w-[140px] cursor-pointer' />
                        </div>
                        <div className='border border-gray-900 rounded'>
                            <label htmlFor="checkOut">CHECK-OUT</label>
                            <input placeholder='checkOut'
                                type="date"
                                id="checkOut"
                                value={checkOut}
                                onChange={(event) => handleDateChange(event, setCheckOut)} className='cursor-pointer w-[140px]' />
                        </div>
                    </div>
                    {
                        valid ? <small>{valid}</small> : ""
                    }
                    <div>
                        <div className='border border-gray-900 mt-4 rounded flex '>
                            <div>
                                <p>GUESTS</p>
                                <div className='flex gap-2'>
                                    <div>
                                        <span>{newCounter} </span>
                                        <span>guests</span>
                                    </div>
                                    <div>
                                        {
                                            counter ? <span>infants {counter}</span> : ""
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4 lg:ms-28 ms-32'>
                                <FaArrowDown className='cursor-pointer' onClick={down} id='down' />
                                <FaArrowUp className='hidden cursor-pointer' onClick={up} id='up' />
                            </div>
                        </div>
                        <div className='hidden rounded-lg border border-gray-900 shadow-md my-2 p-2' id='adults'>
                            <div className='flex gap-20 my-3'>
                                <div>
                                    <p>Adults</p>
                                    <p>Age 18 & Above</p>
                                </div>
                                <div className='mt-4 gap-2 flex'>
                                    <button className='' onClick={() => dispatch(increment())}><IoIosAdd size={25} className='border border-gray-900 rounded-full' /></button>
                                    <span>{myCounter}</span>
                                    <button className='' onClick={() => dispatch(decrement())}><FiMinus size={25} className='border border-gray-900 rounded-full' /></button>
                                </div>

                            </div>
                            <div className='flex gap-32 my-3'>
                                <div>
                                    <p>Children</p>
                                    <p>Age 2-12</p>
                                </div>
                                <div className='mt-4 gap-2 flex'>
                                    <button className='' onClick={() => dispatch(add())}><IoIosAdd size={25} className='border border-gray-900 rounded-full' /></button>
                                    <span>{addMinus}</span>
                                    <button className='' onClick={() => dispatch(minus())}><FiMinus size={25} className='border border-gray-900 rounded-full' /></button>
                                </div>
                            </div>
                            <div className='flex gap-32 my-3'>
                                <div>
                                    <p>Infants</p>
                                    <p>Under 2</p>
                                </div>
                                <div className='mt-4 gap-2 flex'>
                                    <button className='' onClick={() => dispatch(increase(1))}><IoIosAdd size={25} className='border border-gray-900 rounded-full' /></button>
                                    <span>{counter}</span>
                                    <button className='' onClick={() => dispatch(decrease(1))}><FiMinus size={25} className='border border-gray-900 rounded-full' /></button>
                                </div>

                            </div>
                            <p>This place has a maximum of 12 guests, not including infants. Pets aren't allowed.</p>
                            <Link className='underline' to="" onClick={close} id='close'>Close</Link>
                        </div>
                        <div className='text-center  mt-5'>
                            <div onClick={check} className='bg-pink-600 px-[30%] p-2 rounded hover:bg-pink-900 cursor-pointer text-white text-xl'>CONTINUE</div>
                        </div>
                        <div className='flex lg:gap-[35%] gap-32 mt-3 my-2'>
                            <div>
                                <div data-modal-target="popup-modal" data-modal-toggle="popup-modal" className='cursor-pointer underline'>
                                    #{amount} x {differenceInDays ? differenceInDays : 0} nights
                                </div>

                                <div id="popup-modal" tabIndex="-1" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div className="relative  w-full max-w-md max-h-full">
                                        <div className="relative bg-white rounded-lg shadow">
                                            <button type="button" className="absolute top-3 end-4.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                </svg>
                                            </button>
                                            <div className="p-4 md:p-5 text-center">
                                                <h3 className="font-bold text-sm">Base Price Breakdown</h3>
                                            </div>
                                            <div className='flex px-5 lg:gap-[40%] gap-28'>
                                                <p>Total Breakdown</p>
                                                <p>#{price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>#{price ? price : ""}</div>
                        </div>
                        <div className='flex lg:gap-[50%] gap-32 my-2'>
                            <div>Cleaning fee</div>
                            <div>#{cleaning}</div>
                        </div>
                        <div className='flex lg:gap-[44%] gap-32 my-2'>
                            <div>Captainbnb fee</div>
                            <div>#{service}</div>
                        </div>
                        <div className='flex font-bold gap-[50%]'>
                        <p>Total</p>
                        <p>#{totalPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Inspiration/>
            <Support/>
        </>
    )
}

export default Reserve