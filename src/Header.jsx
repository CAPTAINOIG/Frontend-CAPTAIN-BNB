import React, { useContext, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUserCircle, FaBars, FaConnectdevelop, FaAngleUp, FaAngleDown } from 'react-icons/fa'; // Updated icons
import { BsSun } from 'react-icons/bs';
import { BiSolidMoon } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AppContext } from './context/Dashboard';
import Searchinput from './component/Searchinput';

const Header = () => {
    const { theme, setTheme } = useContext(AppContext)
    const [host, setHost] = useState(false);
    const [hosting, setHosting] = useState(false);

    const toggleHost = () => {
        setHost(!host);
    };

    const toggleUp = () => {
        setHost(false);
        console.log(host);
    };

    const toggleDown = () => {
        setHosting(false);
        setHost(true);
        console.log(host);
    };

    return (
        <div className='p-4  flex justify-between border dark:border-gray-700 border-gray-200 font-bold'>
            <Link to="/" className='flex items-center gap-1'>
                <FaConnectdevelop size={25} className='text-pink-600 ' />
                <span className='font-bold lg:text-xl text-pink-600 text-sm lg:block hidden'>captainbnb</span>
            </Link>
            <div className='lg:ms-20 lg:text-md flex gap-2 lg:border lg:border-gray-300 lg:rounded-full lg:py-2 lg:px-4 dark:shadow-md shadow-md shadow-gray-300'>
                <div className='mt-1' id='week'>Anywhere</div>
                <div id='week' className='lg:border-1 mt-1 lg:border-gray-300'>
                    <div>Any week</div>
                </div>
                <div id='week' className='border-1 mt-1 border-gray-300'>
                    <div>Add guests</div>
                </div>
                <button id='week' className='text-white p-2 bg-pink-600  rounded-full'><AiOutlineSearch /></button>
                <Searchinput/>
            </div>
            <div className='flex'>
                <div className='flex lg:me-5 font-bold  lg:gap-2 mt-3'>
                    <span id='Captainbnb'>Captainbnb your home </span>
                    <div className='mt-1'>
                        {
                            theme === 'dark' ?
                                <BiSolidMoon id='moon' size={17} className='cursor-pointer' onClick={() => setTheme("light")} /> :
                                <BsSun id='moon' size={17} className='cursor-pointer' onClick={() => setTheme("dark")} />
                        }
                    </div>

                </div>
                <Link to="" className='flex gap-2 border items-center border-gray-300 rounded-full py-2 px-4'>
                    <Link className='hidden underline text-white' id='host' to="/hosting">Host</Link>
                    <div>
                        <FaBars className='cursor-pointer' />
                    </div>
                    <div className='bg-gray-500 text-white rounded-full border cursor-pointer border-gray-500 relative overflow-hidden'>
                        <FaUserCircle />
                    </div>
                    
                    </Link>
                    <button onClick={toggleUp} className={host ? '' : 'hidden'} id="up">
                        <FaAngleUp />
                        <Link className='underline text-white font-bold' id='host' to="/intro">Host</Link>
                    </button>
                    <button onClick={toggleDown} className={host ? 'hidden' : ''}>
                        <FaAngleDown />
                    </button>

            </div>
        </div>
    )
}

export default Header