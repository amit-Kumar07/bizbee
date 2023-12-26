import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const navlinks = [
  {
    title: "Login",
    path: "/login",
  },
];
const Login = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({ username: "", passowrd: "" });
  const [showPassword, setShowPassword] = useState(false);
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandeler(event) {
    event.preventDefault();
    toast.success("Logged in");
    navigate("/dashboard")
    console.log("Printing data");
    console.log(formData);
  }

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div className="bg-richblack-800">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between  h-20">
            <div className="flex items-center">
              <NavLink to="/">
                <img
                  src="https://bizbeepro.frappe.cloud/files/BizbeePRO2-removebg-preview.png"
                  alt="Logo"
                  width={150}
                  height={25}
                  loading="lazy"
                />
              </NavLink>
            </div>
            {/* navlinks */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navlinks.map((link, index) => (
                  <a
                    key={index}
                    className="text-xl text-yellow-25 hover:text-white hover:bg-richblack-200 transition-all duration-500 px-3 py-2 rounded-md text-md font-medium"
                    href={link.path}
                  >
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
                  href={link.title}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      {/* login form */}
      <div className="grid grid-cols-1 sm:grid-cols-1 h-screen">
        <div className="bg-richblack-200 flex flex-col justify-center">
          <form
            onSubmit={submitHandeler}
            className="max-w-[400px] w-full mx-auto bg-richblack-500 p-8 px-8 rounded-lg"
          >
            <p className="text-2xl text-white font-bold text-center">
              Login to ABC
            </p>
            <p className="ml-32 mt-8 mb-4  rounded-full">
              <img
                src="https://bizbeepro.frappe.cloud/assets/whitelabel/images/whitelabel_logo.jpg"
                loading="lazy"
                alt="logo"
                className="rounded-md"
                width={90}
                height={48}
              />
            </p>
            <div className="flex flex-col text-richblack-5 py-2">
              <label>
                Username<sup className="text-pink-200">*</sup>
              </label>
              <input
                required
                type="email"
                name="username"
                onChange={changeHandler}
                value={formData.name}
                className="bg-richblack-800 mt-2 p-2  rounded-lg text-richblack-5 
                "
              />
            </div>
            <div className="flex flex-col py-2 text-richblack-5 relative">
              <label>
                Password<sup className="text-pink-200">*</sup>
              </label>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={changeHandler}
                className="bg-richblack-800 mt-2 p-2  rounded-lg text-richblack-5 "
              />
              <span
                className="absolute right-3 top-[48px] cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </div>
            <div className="flex justify-between text-blue-100 ">
              {/* <p className="flex items-center">
                <input className="mr-2" type="checkbox" />
                Remeber Me
              </p> */}
              <p className="text-xs mt-2  max-w-max ml-auto">
                Forgot Password
              </p>
            </div>
            <button className="w-full my-5 py-2 bg-yellow-50  rounded-[8px] shadow-lg shadow-yellow-400/50 hover:shadow-yellow-400/40 ">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
