import React, { useEffect, useRef, useState } from 'react'
import { BsChatDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import avatar2 from '../assets/image/avatar2.jpg'
import { motion } from "framer-motion"





const DropdownMessage = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const trigger = useRef(null)
    const dropdown = useRef(null)

    useEffect(() => {
        const handleClick =({target})=>{
            // if(!dropdown.current) return;
            if(!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
            return; setDropdownOpen(false)
        }
        document.addEventListener("click", handleClick)
        return()=> document.removeEventListener("click", handleClick)
        })
    

    return (
        <>
        <div className="relative dark:text-gray-700" x-data="{ dropdownOpen: false, notifying: true }">
                <Link ref={trigger} onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <BsChatDots size={27} className='cursor-pointer text-white font-medium' />
                </Link>

                <div ref={dropdown} onFocus={() => setDropdownOpen(true)} onBlur={() => setDropdownOpen(false)} className={`absolute md:-right-16 right-0 mt-2.5 flex lg:h-96 h-60 flex-col lg:w-[19rem] w-[15rem] border border-stroke text-sm font-serif bg-blue-900 text-white dark:bg-slate-900 dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 px-3 rounded ${dropdownOpen === true ? 'block' : 'hidden'}`}>
                    <div className='px-4'>
                        <p className='font-serif lg:text-2xl text-center text-white font-medium text-black'>Messages</p>
                    </div>
                    <div className="flex h-auto flex gap-4 border-t border-stroke px-1 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 flex-col lg:text-sm overflow-y-auto">
                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Marriya Desoya 🤴</p>
                                <p>I like your confidence 💪</p>
                                <p>2 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Robert John 🤴</p>
                                <p>Can you share your offer?</p>
                                <p>10 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Ibrahim Adeniyi 🤴</p>
                                <p>I came across your Profile</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Yusuf Papiloyaks🤴</p>
                                <p>I am waiting for response!</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Captain OIG 🤴</p>
                                <p>Good knowing you guys</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>

                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Marriya Desoya 🤴</p>
                                <p>I like your confidence 💪</p>
                                <p>2 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Robert John 🤴</p>
                                <p>Can you share your offer?</p>
                                <p>10 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Ibrahim Adeniyi 🤴</p>
                                <p>I came across your Profile</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Yusuf Papiloyaks🤴</p>
                                <p>I am waiting for response!</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Captain OIG 🤴</p>
                                <p>Good knowing you guys</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>

                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Marriya Desoya 🤴</p>
                                <p>I like your confidence 💪</p>
                                <p>2 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Robert John 🤴</p>
                                <p>Can you share your offer?</p>
                                <p>10 min ago ⏰</p>
                            </div>
                        </div>

                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Ibrahim Adeniyi 🤴</p>
                                <p>I came across your Profile</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Yusuf Papiloyaks🤴</p>
                                <p>I am waiting for response!</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Captain OIG 🤴</p>
                                <p>Good knowing you guys</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Marriya Desoya 🤴</p>
                                <p>I like your confidence 💪</p>
                                <p>2 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Robert John 🤴</p>
                                <p>Can you share your offer?</p>
                                <p>10 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Ibrahim Adeniyi 🤴</p>
                                <p>I came across your Profile</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Yusuf Papiloyaks🤴</p>
                                <p>I am waiting for response!</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Captain OIG 🤴</p>
                                <p>Good knowing you guys</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>

                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Marriya Desoya 🤴</p>
                                <p>I like your confidence 💪</p>
                                <p>2 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Robert John 🤴</p>
                                <p>Can you share your offer?</p>
                                <p>10 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Ibrahim Adeniyi 🤴</p>
                                <p>I came across your Profile</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Yusuf Papiloyaks🤴</p>
                                <p>I am waiting for response!</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Captain OIG 🤴</p>
                                <p>Good knowing you guys</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>

                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Marriya Desoya 🤴</p>
                                <p>I like your confidence 💪</p>
                                <p>2 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Robert John 🤴</p>
                                <p>Can you share your offer?</p>
                                <p>10 min ago ⏰</p>
                            </div>
                        </div>

                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Ibrahim Adeniyi 🤴</p>
                                <p>I came across your Profile</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Yusuf Papiloyaks🤴</p>
                                <p>I am waiting for response!</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Captain OIG 🤴</p>
                                <p>Good knowing you guys</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Marriya Desoya 🤴</p>
                                <p>I like your confidence 💪</p>
                                <p>2 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Robert John 🤴</p>
                                <p>Can you share your offer?</p>
                                <p>10 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Ibrahim Adeniyi 🤴</p>
                                <p>I came across your Profile</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Yusuf Papiloyaks🤴</p>
                                <p>I am waiting for response!</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Captain OIG 🤴</p>
                                <p>Good knowing you guys</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>

                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Marriya Desoya 🤴</p>
                                <p>I like your confidence 💪</p>
                                <p>2 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Robert John 🤴</p>
                                <p>Can you share your offer?</p>
                                <p>10 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Ibrahim Adeniyi 🤴</p>
                                <p>I came across your Profile</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Yusuf Papiloyaks🤴</p>
                                <p>I am waiting for response!</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Captain OIG 🤴</p>
                                <p>Good knowing you guys</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>

                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Marriya Desoya 🤴</p>
                                <p>I like your confidence 💪</p>
                                <p>2 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Robert John 🤴</p>
                                <p>Can you share your offer?</p>
                                <p>10 min ago ⏰</p>
                            </div>
                        </div>

                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Ibrahim Adeniyi 🤴</p>
                                <p>I came across your Profile</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Yusuf Papiloyaks🤴</p>
                                <p>I am waiting for response!</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Captain OIG 🤴</p>
                                <p>Good knowing you guys</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Marriya Desoya 🤴</p>
                                <p>I like your confidence 💪</p>
                                <p>2 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Robert John 🤴</p>
                                <p>Can you share your offer?</p>
                                <p>10 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Ibrahim Adeniyi 🤴</p>
                                <p>I came across your Profile</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Yusuf Papiloyaks🤴</p>
                                <p>I am waiting for response!</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Captain OIG 🤴</p>
                                <p>Good knowing you guys</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>

                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Marriya Desoya 🤴</p>
                                <p>I like your confidence 💪</p>
                                <p>2 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Robert John 🤴</p>
                                <p>Can you share your offer?</p>
                                <p>10 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Ibrahim Adeniyi 🤴</p>
                                <p>I came across your Profile</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Yusuf Papiloyaks🤴</p>
                                <p>I am waiting for response!</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Captain OIG 🤴</p>
                                <p>Good knowing you guys</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>

                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Marriya Desoya 🤴</p>
                                <p>I like your confidence 💪</p>
                                <p>2 min ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Robert John 🤴</p>
                                <p>Can you share your offer?</p>
                                <p>10 min ago ⏰</p>
                            </div>
                        </div>

                        <div className='flex border border-t rounded border-stroke px-2 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Ibrahim Adeniyi 🤴</p>
                                <p>I came across your Profile</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-3'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Yusuf Papiloyaks🤴</p>
                                <p>I am waiting for response!</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>
                        <div className='flex border border-t rounded border-stroke px-1 py-5'>
                            <div>
                                <img className='rounded h-[90%]' src={avatar2} alt="" />
                            </div>
                            <div className='ms-5'>
                                <p>Captain OIG 🤴</p>
                                <p>Good knowing you guys</p>
                                <p>1 day ago ⏰</p>
                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </>
    )
}

export default DropdownMessage