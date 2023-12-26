import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Home from "./page/Home";
const navlinks = [
  {
    title: "Login",
    path: '/login',
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="bg-richblack-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pt-4 h-16">
          <div className="flex items-center ml-[0.2px]">
        <img
            src="https://bizbeepro.frappe.cloud/files/BizbeePRO2-removebg-preview.png"
            alt="Logo"
            width={150}
            height={25}
            loading="lazy"
          />
          </div>
          {/* navlinks */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navlinks.map((link, index) => (
                  <a
                  key={index}
                  className="text-xl text-yellow-25 hover:text-white hover:bg-richblack-200 transition-all duration-500 px-3 py-2 rounded-md text-md font-medium"
                href={link.path}>
                  {link.title}
                </a>
                
              ))}
            </div>
          </div>
          
              {/* hamburger button */} 
        <div className="-mr-2 flex md:hidden">
          <button
            type="button"
            onClick={handleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-richblack-300 hover:text-white hover:bg-richblack-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span className="sr-only">Open Main Menu</span>
            {open === true ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        </div>
      </div>
      {/* mobile-menu */}
      {open ? (
        <div className="md:hidden">
            <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
               {navlinks.map((link, index) => (
                <a 
                key={index}
                className="text-richblack-300 hover:bg-richblack-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href={link.title}>{link.title}</a>
               ))}
            </div>
        </div>
      ) : null}

   <Home/>
    </div>
  );
}; 

export default Navbar;
