import React, { useContext } from 'react';
import Navbar from '../Nav/Navbar';
import Sidebar from '../Side/Sidebar';
import { AppContext } from '../context/Dashboard';
import { FullScreen } from 'react-full-screen';
import { Route, Routes } from 'react-router-dom';
// import Allusers from '../user/Allusers';
// import Homepage from '../user/Homepage';

const Rootlayout = ({ children }) => {
  const { handle, sideBarOpen } = useContext(AppContext);
  // console.log(sideBarOpen);

  return (
    <>
    
    <FullScreen handle={handle}>
    <div className="dark:text-gray-100 bg-blue-800 dark:bg-slate-700 bg-lighten duration-200 ease-in-out z-1">
    <Navbar />
    <div className="flex max-w-full">
            <Sidebar />
            <div className={`w-full min-h-[93vh] ${!sideBarOpen ? 'md:ml-16' : 'md:ml-64'}`}>
              <main className="py-4 flex-1 break-words">{children}</main>
            </div>
          </div>
          </div>
          </FullScreen>

        
    </>
  );
};

export default Rootlayout;
