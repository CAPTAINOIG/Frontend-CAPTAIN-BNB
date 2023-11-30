import React, { useEffect, useState } from 'react'
import CountrySelect from './CountrySelect'
import { FaStar } from 'react-icons/fa'
import PaystackPop from '@paystack/inline-js'

const Paystack = () => {
    let leaseDetails = JSON.parse(localStorage.getItem('lease'))
    // console.log(leaseDetails.service);
    let totalAmount = JSON.parse(localStorage.getItem('price'))
    // console.log(totalAmount);

    let dayDifference = JSON.parse(localStorage.getItem('differenceInDays'))
    // console.log(dayDifference);

    // to get finalTotal it will be totalAmount plus service

    // let real = dayDifference * leaseDetails.amount
    // console.log(real);
    const finalAmount = totalAmount + leaseDetails.service + leaseDetails.cleaning 
    // console.log(finalAmount);    


    const [total, setTotal] = useState("")
    const [image, setImage] = useState("")
    const [address, setAddress] = useState("")
    const [rating, setRating] = useState("")
    const [HostImage, setHostImage] = useState("")
    const [amount, setAmount] = useState("")
    const [dayDiff, setDayDiff] = useState("")
    const [service, setService] = useState("")
    const [cleaning, setCleaning] = useState("")
    const [usdFinalAmount, setUsdFinalAmount] = useState("")
    const [email, setEmail] = useState("");
    const [payAmount, setPayAmount] = useState("");
    const [payAddress, setPayAddress] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("")
    const [select, setSelect] = useState("")



    useEffect(() => {
        setTotal(totalAmount)
        // console.log(totalAmount);
        setImage(leaseDetails.image)
        setAddress(leaseDetails.address)
        setRating(leaseDetails.rating)
        setHostImage(leaseDetails.HostImage)
        setAmount(leaseDetails.amount)
        setDayDiff(dayDifference)
        setService(leaseDetails.service)
        setCleaning(leaseDetails.cleaning)
        setUsdFinalAmount(finalAmount)

    }, [])





    const payWithPayStack = (e) => {
        
        const publicKey = import.meta.env.VITE_APP_PAYSTACK_KEY;

        if (email === "" || address === "" || phone === "" || city === "") {
            alert('all input field are required')
        } else {
            e.preventDefault();
            const paystack = new PaystackPop();
            paystack.newTransaction({
                key: publicKey,
                amount: usdFinalAmount * 100,
                email,
                payAddress,
                city,
                phone,
                select,
                onSuccess(transaction) {
                    let message = `Payment Complete! Reference ${transaction.reference}`
                    alert(message)
                    setEmail("")
                    setAddress("")
                    setCity("")
                    setPhone("")
                },
                oncancel() {
                    alert("You have Canceled the transaction")
                }
            })
        }
    }



    return (
        <>
            <h1 className='text-center font-bold text-3xl mt-5'>Confirm and Pay</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 font-serif'>
                <div className='border shadow rounded-lg lg:w-[60%] lg:h-[70%] lg:ms-28 lg:mt-[10%] lg:p-5 p-6'>
                    <div className='flex border-b-2'>
                        <div>
                            <img className='rounded mb-4' src={image} alt="" width={150} />
                        </div>
                        <div className='p-3 lg:ms-20 ms-5 py-2'>
                            <p>{address}</p>
                            <div className='flex gap-2'>
                                <span className='mt-1'><FaStar /></span>
                                <span>{rating}.00</span>
                            </div>
                            <div className='flex gap-3'>
                                <span>Superhost </span> <span><img className='rounded-full mt-1' src={HostImage} alt="" width={20} /></span>
                            </div>
                        </div>
                    </div>
                    <h1 className='font-bold mt-5 my-4'>Price Details</h1>
                    <div className='flex lg:gap-[40%] gap-[45%]'>
                        <div>
                            <p>#{amount} * {dayDiff} nights</p>
                        </div>
                        <div>#{totalAmount}</div>
                    </div>
                    <div className='flex lg:gap-[40%] my-3 gap-[45%]'>
                        <div>
                            <p>captainbnb service</p>
                        </div>
                        <div>${service}</div>
                    </div>
                    <div className='flex lg:gap-[45%] gap-[50%]'>
                        <div>
                            <p>cleaning service</p>
                        </div>
                        <div>${cleaning}</div>
                    </div>
                    <div className='flex mt-8 font-bold lg:gap-[45%] gap-[45%]'>
                        <div>
                            <p>Total (USD)</p>
                        </div>
                        <div>#{usdFinalAmount}</div>
                    </div>
                </div>


                <div >
                    <form className='border bg-white lg:w-[75%] w-[90%] shadow p-5 mt-5 mx-auto rounded-lg'>
                        <h1 className='text-1xl text-center text-pink-800 font-bold font-sans'>Billing address</h1>
                        <div className='my-1'>
                            <label className='font-bold text-sm text-pink-800' htmlFor="">Email Address</label>
                            <input type="email" id='email-address' className='border border-pink-500 h-[30px] mt-3 w-full rounded lg:w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent' onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <div>
                            <label className='font-bold text-sm text-pink-800' htmlFor="amount">Amount(#)</label>
                            <input type="tel" id='amount' className='border border-pink-500 h-[30px] mt-3 w-full rounded lg:w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent' disabled placeholder={`#${usdFinalAmount}`} value={payAmount} />
                        </div>
                        <div>
                            <label className='font-bold text-sm text-pink-800' htmlFor="first-name">Address</label>
                            <input type="text" id='first-name' className='border border-pink-500 h-[30px] mt-3 w-full rounded lg:w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent' onChange={(e) => setPayAddress(e.target.value)} value={payAddress} />
                        </div>
                        <div>
                            <label className='font-bold text-sm text-pink-800' htmlFor="last-name">City</label>
                            <input type="text" id='last-name' className='border border-pink-500 h-[30px] mt-3 w-full rounded lg:w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent' onChange={(e) => setCity(e.target.value)} value={city} />
                        </div>
                        <div>
                            <label className='font-bold text-sm text-pink-800' htmlFor="last-name">Phone</label>
                            <input type="text" id='last-name' className='border border-pink-500 h-[30px] mt-3 w-full rounded lg:w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent' onChange={(e) => setPhone(e.target.value)} value={phone} />
                        </div>
                        <div>
                            <label className='font-bold text-pink-800 text-sm'>Select Country</label>
                            <div className='border border-pink-500 rounded bg-pink-500'>
                                <CountrySelect onChange={(e) => setSelect(e.target.value)} value={select} />
                            </div>
                        </div>
                        <button className='bg-pink-800 text-white h-[35px] rounded lg:mt-5 mt-5  lg:w-[100%] w-[100%]' onClick={payWithPayStack}>PAY</button>
                    </form>
                </div>


            </div>


        </>
    )
}

export default Paystack