import React from 'react'

const Workspace = () => {
  return (
    <div className='flex justify-between p-4'>
       <div className='flex gap-8'>
         <button className='text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md  shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] bg-richblack-600 text-white hover:shadow-none hover:scale-95 transition-all duration-200'>Create Workspace</button>
         <button className='text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md  shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] bg-richblack-600 text-white hover:shadow-none hover:scale-95 transition-all duration-200'>Edit</button>
       </div>
    </div>
  )
}

export default Workspace