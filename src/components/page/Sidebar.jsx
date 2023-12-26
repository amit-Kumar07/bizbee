import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/Navigation';
import Workspace from '../Workspace';


const variants = {
  expanded:{width: "20%"},
  nonExpanded:{width: "5%"}
}
const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded , setIsExpanded] = useState(true);

  const clickhandler = (index) => {
    setActiveTab(index);
  };
  return (
   <>
    <div className='w-full flex relative'>
    <motion.div 
    animate={isExpanded ? "expanded" : "nonExpanded"}
    variants={variants}
    className={"flex flex-col py-12 w-1/5 h-screen  border  border-r-1 relative  items-center sm:px-3" + (isExpanded ? " px-10" : " sm:px-7" )}>
      <div className="logo-div flex  space-x-6">
        <p>Logo</p>
        <span className={" font-bold text-xl text-richblack-700 " + (isExpanded ? "block":"hidden") }>Clients</span>
      </div>
    
     <div onClick={() => setIsExpanded(!isExpanded)}
      className="w-5 h-5 bg-richblack-700 rounded-full absolute -right-[10.5px] top-13 flex items-center justify-center">
       <FaAngleRight className="w-[6px] text-white"/>
     </div>

      <div className="mt-10 flex flex-col space-y-4">
        {DASHBOARD_SIDEBAR_LINKS.map((item, index) => (
        <div onClick={() => clickhandler(index)}>
            <div 
            key={index}
            className={
              "flex space-x-0.5 sm:space-x-1 md:space-x-3  sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] p-2 rounded items-center" +
              (activeNavIndex === index ? " bg-richblack-600 text-white" : "")
            }
            onClick={()=> setActiveNavIndex(index)}
          >
           
            <span className='text-2xl '>{item?.icon}</span>
            <span className={ isExpanded ? "hidden sm:block md:block":"sm:hidden md:hidden " }>{item?.label}</span>
          
          </div>
        </div>
        ))}
      </div>
    </motion.div>


    <main className='grow'>
      {DASHBOARD_SIDEBAR_LINKS[activeTab].content}
    </main>
    </div>
   </>
  )
}

export default Sidebar



































// import React from 'react'
// import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/Navigation';
// import {Link, useLocation} from 'react-router-dom';
// const Sidebar = () => {
//   return (
//     <div>
//          <div>
//             {DASHBOARD_SIDEBAR_LINKS.map((item) => (
//                 <SidebarLink key={item.key}
//                 item={item}
//                 />
//             ))}
//          </div>
//     </div>
//   )
// }

// function SidebarLink({item}){
//   const {pathname} = useLocation();
//   return (
//     <Link to={item.path}>
//         <div>
//             <span>{item.icon}</span>
//             <span>{item.label}</span>
//         </div>
//     </Link>
//   )
// }
// export default Sidebar