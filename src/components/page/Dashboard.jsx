import React from "react";
import { Outlet } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  return (
   <div>
       <nav className="flex justify-between  sm:justify-around md:justify-between bg-richblack-800 h-16 items-center p-8 gap-2">
      <div>
        <img
          src="https://bizbeepro.frappe.cloud/files/Link%20PRO.png"
          className="w-[200px]"
          alt="logo"
        />
      </div>
      <div className="flex items-center gap-2">
        <div class="w-[100px]  border border-richblack-200 rounded flex items-center space-x-9  sm:w-[200px] md:w-[300px]  bg-white">
          <CiSearch className="absolute ml-3 text-[16px] font-extrabold  text-blue-800" />
          <input
            className="w-full  relative outline-0 py-2 text-xs text-blue-800"
            type="search"
            placeholder="Search or type a command (Ctrl + G)"
          />
        </div>
        <div>
          <CiBellOn className="text-xl text-white" />
        </div>
        <div>
          <p className="border-r-2 h-6 text-white"></p>
        </div>
        <div>
          <RxAvatar className="text-3xl text-white" />
        </div>
      </div>
     
      </nav>
    <div><Sidebar/></div>
    <div>{<Outlet/>}</div>
   </div>
  );
};

export default Dashboard;
