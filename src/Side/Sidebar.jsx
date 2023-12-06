import { useContext, useEffect } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlNotebook, SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsChat, BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line, RiProductHuntFill } from "react-icons/ri";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { MdVerticalDistribute } from "react-icons/md";
import { AppContext } from "../context/Dashboard";
import Allusers from "../user/Allusers";
import { Home } from "react-feather";
import Homepage from "../user/Homepage";
import Userplace from "../user/Userplace";


const Sidebar = () => {
  const { sideBarOpen, setSideBarOpen, isTablet } = useContext(AppContext)


  // check on useRef
  const sidebarRef = useRef();
  // this is useParams
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTablet) {
      setSideBarOpen(false)
    } else {
      setSideBarOpen(true)
    }
  }, [isTablet]);



  const overlayClicked = () => {
    setSideBarOpen(false)
  }


  useEffect(() => {
    isTablet && setSideBarOpen(false);
  }, [pathname]);

  const Nav_animation = isTablet
    ? {
      open: {
        x: 0,
        width: "13rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        x: -250,
        width: 0,
        transition: {
          damping: 40,
          delay: 0.15,
        },
      },
    }
    : {
      open: {
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        width: "4rem",
        transition: {
          damping: 40,
        },
      },
    };

  return (
    
    <div className=" relative">
      <div onClick={() => overlayClicked()} className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-gray-500  opacity-30 ${sideBarOpen ? "block" : "hidden"} `}></div>

      <motion.div ref={sidebarRef} variants={Nav_animation} initial={{ x: isTablet ? -250 : 0 }} animate={sideBarOpen ? "open" : "closed"} className="shadow-xl md:z-[9] z-[9999] max-w-[16rem]  w-[16rem] fixed top-0 left-0 h-screen">

      <div className="flex items-center gap-2.5 font-medium bg-blue-900 border-b py-4 dark:border-slate-600 md:mx-0  md:py-10 md:bg-lighten text-white dark:md:bg-slate-800 dark:bg-slate-800" >
          <img className="md:hidden" src="https://img.icons8.com/color/512/firebase.png" width={35} alt="" />
          <span className="text-xl whitespace-pre md:hidden">Fireboard</span>
      </div>

        <div className="flex flex-col dark:bg-slate-800 dark:text-white text-white text-4xl bg-blue-900 h-full">
          <ul className=" px-2.5 text-[0.9rem] py-5 flex flex-col gap-2 overflow-x-hidden font-serif   dark:scrollbar-track-slate-400  dark:scrollbar-thumb-slate-700  md:h-[78%] h-[75%]">
          <li>
              <NavLink to={"/admin-captain-bnb-dev-oig"} className="link flex rounded gap-8 hover:bg-white hover:rounded hover:text-black">
                <AiOutlineAppstore size={23} className="mt-2 min-w-max" />
                Homepage
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin-captain-bnb-dev-oig/allusers"} className="link flex gap-8 hover:bg-white hover:rounded hover:text-black">
                <BsPerson size={23} className="mt-2 min-w-max" />
                All Users
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin-captain-bnb-dev-oig/userplace"} className="link flex gap-8 hover:bg-white hover:rounded hover:text-black">
                <BsPerson size={23} className="mt-2 min-w-max" />
                All Userplaces
              </NavLink>
            </li>
            <li>
              <NavLink to={""} className="link flex gap-8 hover:bg-white hover:rounded hover:text-black">
                <HiOutlineDatabase size={23} className="mt-2 min-w-max" />
                Storage
              </NavLink>
            </li>
            {/* test routeless */}
            <li>
              <NavLink to={""} className="link flex gap-8 hover:bg-white hover:rounded hover:text-black">
                <SlNotebook size={23} className="mt-2 min-w-max" />
                Post
              </NavLink>
            </li>
            <li>
              <NavLink to={""} className="link flex gap-8 hover:bg-white hover:rounded hover:text-black">
                <RiProductHuntFill size={23} className="mt-2 min-w-max" />
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to={""} className="link flex gap-8 hover:bg-white hover:rounded hover:text-black">
                <MdVerticalDistribute size={23} className="mt-2 min-w-max" />
                Table
              </NavLink>
            </li>
            <li>
              <NavLink to={""} className="link flex gap-8 hover:bg-white hover:rounded hover:text-black">
                <BsChat size={23} className="mt-2 min-w-max" />
                Chat
              </NavLink>
            </li>

            {/* {(sidebarOpen || isTablet) && ( */}
            <div className="border-y py-5 dark:border-slate-600 md:border-slate-300 ">
              {
                (sideBarOpen || isTablet) &&
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  Product categories
                </small>
              }
            </div>

            <li>
              <NavLink to={""} className="link flex gap-8 hover:bg-white hover:rounded hover:text-black">
                <SlSettings size={23} className="mt-2 min-w-max" />
                Settings
              </NavLink>
            </li>
          </ul>

          {sideBarOpen && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="flex border-y dark:border-slate-600 border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>Spark</p>
                  <small>No-cost $0/month</small>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Upgrade
                </p>
              </div>
            </div>
          )}</div>
        <motion.div onClick={() => {setSideBarOpen(!sideBarOpen) }
        }
          animate={
            sideBarOpen
              ? {
                x: 0,
                y: -10,
                rotate: 0,
              }
              : {
                x: -10,
                y: 50,
                rotate: 180,
              }
          }
          transition={{ duration: 0 }} className="absolute w-fit h-fit z-50  right-2 bottom-24 cursor-pointer bg-blue-50 dark:text-black rounded-full p-2 my-auto">
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>



      
  <Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/allusers' element={<Allusers/>}/>
  <Route path='/userplace' element={<Userplace/>}/>

</Routes>
    </div>

    
  );
};

export default Sidebar;
