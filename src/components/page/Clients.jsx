import React from 'react'
import Workspace from '../Workspace'
import { LuArrowUpRight } from "react-icons/lu";
import { FiFileText } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
const Clients = () => {
  return (
    <div className='flex flex-col py-12 px-14'>
        <div className='flex justify-between items-center mt-[-30px] border-b-4'>
        <h2>Dashboard</h2>
        <Workspace/>
        </div>
    <div className='flex space-x-8 mt-5'>
        <div className='w-2/5 h-[150px] border  border-richblack-100  rounded flex flex-col p-4 text-gray-600 justify-between shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:scale-105 transition-all duration-100 hover:outline outline-caribbeangreen-400 '>
           <div className='flex justify-between items-center'>
           <p className='text-[1rem]'>Quotation Submitted</p>
            <p className='text-[1rem]'>...</p>
           </div>
           <p className='text-3xl fontbold text-blue-600'>0</p>
        </div>
        <div className='w-2/5 h-[150px] border  border-richblack-100  rounded flex flex-col p-4 text-gray-600 justify-between shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:scale-105 transition-all duration-75 hover:outline outline-caribbeangreen-400 '>
           <div className='flex justify-between items-center'>
           <p className='text-[1rem]'>Job In-Process</p>
            <p className='text-[1rem]'>...</p>
           </div>
           <p className='text-3xl fontbold text-caribbeangreen-400'>0</p>
        </div>
        <div className='w-2/5 h-[150px] border  border-richblack-100  rounded flex flex-col p-4 text-gray-600 justify-between shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:scale-105 transition-all duration-75 hover:outline outline-caribbeangreen-400 '>
           <div className='flex justify-between items-center'>
           <p className='text-[1rem]'>Sales Order Billing</p>
            <p className='text-[1rem]'>...</p>
           </div>
           <p className='text-3xl fontbold text-pink-300'>0</p>
        </div>

    
    </div>

    <div className='flex item-center justify-between'>

         <div className='flex space-x-14 mt-12 items-center'>
            <div className='flex items-center gap-1'>
             <p className='text-[15px] text-richblack-600 hover:text-black'>Client Quotation</p>
             <LuArrowUpRight className='text-richblack-300'/>
            </div>
            <div className='flex items-center gap-5'>
            <p className='bg-blue-50 hover:bg-blue-100  opacity-70 hover:opacity-100 rounded px-3 text-[0.9rem] transition-all duration-100'><span className='font-extrabold text-[18px] text-blue-600 hover:scale-110'>.</span> <span className='text-blue-500 opacity-80'>2</span></p>
            <p className="border-r-2 h-6 text-richblack-50"></p>
            </div>
            
         </div>

        
         {/* box-2 */}
         <div className='flex space-x-14 mt-12 items-center'>
            <div className='flex items-center gap-1'>
             <p className='text-[15px] text-richblack-600 hover:text-black'>Sales Invoice</p>
             <LuArrowUpRight className='text-richblack-300'/>
            </div>
            <div className='flex items-center gap-5'>
            <p className='bg-yellow-50   opacity-70 hover:opacity-100 rounded px-3 text-[0.9rem] transition-all duration-100'><span className='font-extrabold text-[18px] text-richblack-400 hover:scale-110'>.</span> <span className='text-richblack-500 opacity-80'>1</span></p>
            <p className="border-r-2 h-6 text-richblack-50"></p>
            </div>
            
         </div>

         {/* box-3 */}
         <div className='flex space-x-14 mt-12 items-center'>
            <div className='flex items-center gap-1'>
             <p className='text-[15px] text-richblack-600 hover:text-black'>My Clients</p>
             <LuArrowUpRight className='text-richblack-300'/>
            </div>
            <div className='flex items-center gap-5'>
            <p className='bg-caribbeangreen-200  opacity-70 hover:opacity-100 rounded px-3 text-[0.9rem] transition-all duration-100'><span className='font-extrabold text-[18px] text-white hover:scale-110'>.</span> <span className='text-white opacity-80'>4</span></p>
            <p className="border-r-2 h-6 text-richblack-50"></p>
            </div>
            
         </div>
         {/* box-4 */}
         <div className='flex space-x-14 mt-12 items-center'>
            <div className='flex items-center gap-1'>
             <p className='text-[15px] text-richblack-600 hover:text-black'>To Do</p>
             <LuArrowUpRight className='text-richblack-300'/>
            </div>
            <div className='flex items-center gap-5'>
            <p className='bg-pink-300 hover:bg-blue-100  opacity-70 hover:opacity-100 rounded px-3 text-[0.9rem] transition-all duration-100'><span className='font-extrabold text-[18px] text-white hover:scale-110'>.</span> <span className='text-white opacity-80'>2</span></p>
            <p className="border-r-2 h-6 text-richblack-50"></p>
            </div>
            
         </div>
    </div>
    
    {/* footer */}

    <div className='flex border-t-2 mt-14 justify-between items-center' >
        {/* col-1 */}
        <div className='flex flex-col space-y-5 mt-8 text-richblack-500'>
        <div className='flex items-center gap-3 text-richblack-500'>
            <p className='text-2xl'><FiFileText/></p>
            <p className='hover:scale-105 transition-all duration-100  hover:text-red-600'>Reoprt - I</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='bg-richblack-50  w-4 h-4 rounded relative'>
                <span><BsDot/></span>
            </p>
            <p className='hover:scale-105 text-[0.8rem] transition-all duration-100'>Sales Register</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='bg-richblack-50  w-4 h-4 rounded relative'>
                <span><BsDot/></span>
            </p>
            <p className='hover:scale-105 text-[0.8rem] transition-all duration-100'>Sales Analytics</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='bg-richblack-50  w-4 h-4 rounded relative'>
                <span><BsDot/></span>
            </p>
            <p className='hover:scale-105 text-[0.8rem] transition-all duration-100'>Sales Invoice Trends</p>
        </div>

        </div>
       

       {/* col-2 */}
       <div className='flex flex-col space-y-5 mt-8 text-richblack-500'>
        <div className='flex items-center gap-3 text-richblack-500'>
            <p className='text-2xl'><FiFileText/></p>
            <p className='hover:scale-105 transition-all duration-100  hover:hover:text-red-600'>Reoprt - II</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='bg-richblack-50  w-4 h-4 rounded relative'>
                <span><BsDot/></span>
            </p>
            <p className='hover:scale-105 text-[0.8rem] transition-all duration-100'>Quotaition Trends</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='bg-richblack-50  w-4 h-4 rounded relative'>
                <span><BsDot/></span>
            </p>
            <p className='hover:scale-105 text-[0.8rem] transition-all duration-100'>Service-wise Sales History</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='bg-richblack-50  w-4 h-4 rounded relative'>
                <span><BsDot/></span>
            </p>
            <p className='hover:scale-105 text-[0.8rem] transition-all duration-100'>Sales Person-wise Transaction Summary</p>
        </div>
        {/* <div className='flex items-center gap-2'>
            <p className='bg-richblack-50  w-4 h-4 rounded relative'>
                <span><BsDot/></span>
            </p>
            <p>Delayed Service Report</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='bg-richblack-50  w-4 h-4 rounded relative'>
                <span><BsDot/></span>
            </p>
            <p>Service Completion Trends</p>
        </div> */}

        </div>
       
       {/* col-3 */}
       <div className='flex flex-col space-y-5 mt-8 text-richblack-500'>
        <div className='flex items-center gap-3 text-richblack-500'>
            <p className='text-2xl'><FiFileText/></p>
            <p className='hover:scale-105 transition-all duration-100 hover:hover:text-red-600'>Reoprt - III</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='bg-richblack-50  w-4 h-4 rounded relative'>
                <span><BsDot/></span>
            </p>
            <p className='hover:scale-105 text-[0.8rem] transition-all duration-100'>Client Without Any Sales Transactions</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='bg-richblack-50  w-4 h-4 rounded relative'>
                <span><BsDot/></span>
            </p>
            <p className='hover:scale-105 text-[0.8rem] transition-all duration-100'>Client Accounts Receivable</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='bg-richblack-50  w-4 h-4 rounded relative'>
                <span><BsDot/></span>
            </p>
            <p className='hover:scale-105 text-[0.8rem] transition-all duration-100'>Inactive Customer</p>
        </div>

        </div>
    </div>
</div>
  )
}

export default Clients