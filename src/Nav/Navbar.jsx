import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/Dashboard'
import { MdMenu } from 'react-icons/md'
import { AiOutlineFullscreen } from 'react-icons/ai'
import { BsFillMoonFill, BsSun } from 'react-icons/bs'
import avatar2 from '../assets/image/avatar2.jpg'
import DropdownMessage from '../pages/DropdownMessage'
import Dropdownnotification from '../pages/Dropdownnotification'

const Navbar = () => {
    let monitor = JSON.parse(localStorage.getItem('theme'))
    // console.log(monitor);
    const {toggleSideBar, handle, theme, setTheme} = useContext(AppContext)
    // console.log(theme);
    // const [themeLoad, setThemeLoad] = useState("")
    

    // useEffect(() => {
    //     let monitor = JSON.parse(localStorage.getItem('theme'))
    //     console.log(monitor);
    //     setTheme(monitor)
    // }, [])
    
    return (
        <>
        <div className=' sticky top-0 right-0 left-0 p-2 shadow-sm dark:shadow-md dark:text-gray-100 dark:bg-slate-800 bg-blue-900 z-[99]'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-between gap-5'>
                        <div className="lg:hidden cursor-pointer" onClick={() => toggleSideBar()}>
                            <MdMenu size={25} />
                        </div>
                        <img className='hidden md:block' src="https://img.icons8.com/color/512/firebase.png" width={35} alt="" />
                        <span className="text-xl text-white font-medium sm:block hidden">Fireboard</span>
                    </div>
                    <div className='flex items-center justify-between md:gap-10 gap-6'>
                        <div>
                        {
                            theme === 'dark' ? 
                            <BsSun size={25} className='cursor-pointer text-white' onClick={()=> setTheme ("light")}/>:
                            <BsFillMoonFill size={22}  className='cursor-pointer text-white'  onClick={()=> setTheme("dark")}/>
                        }
                        </div>
                        
                        <div className='cursor-pointer rounded-lg bg-white dark:bg-slate-400'>
                        <AiOutlineFullscreen size={25} onClick={handle.enter} />
                        </div>
                        <DropdownMessage/>
                        <Dropdownnotification/>
                        <div>
                            <img className='rounded-full' src={avatar2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
        )
}

export default Navbar