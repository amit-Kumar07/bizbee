import React from 'react'
import Accordion from '../Accordion'
const Home = () => {
  return (
    <div>
        <div className="mt-4 bg-richblue-300">

<img src="https://img.freepik.com/free-vector/city-landmarks-wallpaper-video-conferencing_23-2148627714.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702512000&semt=ais"
         
          alt="temp"
          width={1920}
          height={900}
            loading="lazy"
        />
      </div>

   {/* section - 2 */}
   <div className="flex flex-col  mt-36 w-11/12 text-white m-20 gap-10">
        <div className="md:text-4xl  font-semibold sm:mr-8">
          Bizbee PRO: Simplifying Work with Tailored Software Solutions and
          Innovation.
        </div>
        <div className="md:text-2xl text-richblack-200 sm:mr-8" >
          Bizbee PRO simplifies software development with tailored solutions.
          Our mantra: "Simplify Your Work."
        </div>
        <div className="lg:ml-[-421px] md:ml-[-290px] sm:ml-[-100px]">
          <Accordion />
        </div>
      </div>
    </div>
  )
}

export default Home