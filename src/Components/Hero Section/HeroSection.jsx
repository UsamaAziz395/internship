// import React from 'react'
// import house from '../../assets/Gallery/house.png'

// function HeroSection() {
//   return (
//     <>
    
//     <div className='h-140 w-full bg-[#F4F9FF]  px-20 flex'>

//         {/* life side */}
//         <div className='ml-25 h-80 w-140 pt-20'>

//     <div>
//             <h1 className=' text-6xl font-bold'>Discover A Place 
//                you'll love to live</h1>
//                </div>
               
// <div>
//                <p className='pt-10 text-xs w-105 '>
//                     Homie is a real estate soluation that gives you the local scoop about homes.
//                      Search confidently with your trusted source of homes for sale or rent.
//                       </p>
//                         <button className='bg-[#0061E0] text-white h-12 w-40 mt-16'>Make An Enquiry</button>
//                         </div>
//                       </div>

//                       {/* Right side */}
                    

//                       <div className='relative '>
//                         <img className='h-120 pt-15' src={ house } alt="gallery" />
                        
                        
//                         <div className='h-40 w-50 bg-white absolute left-1/2 -translate-x-1/2 bottom-0 text-center space-y-1 pt-5 rounded-lg shadow-lg' >
                         
//                         <h1 className=' text-sm font-semibold text-[#7C8893]'>Book your Dream Home  </h1>
//                         <h2 className='font-bold text-[#0061E0] text-2xl'>80+</h2>
//                         <h1 className='  font-semibold text-[#7C8893] '>Home Available </h1>
//                         <button className='bg-[#0061E0] text-white rounded w-25 h-8 text-sm cursor-pointer'>View Details</button>
                        
//                         </div>
                        
                        
//                         </div>

                        

                    
        

//     </div>
      
//     </>
//   )
// }

// export default HeroSection


import React from "react";
import house from "../../assets/Gallery/house.png";

function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-[#F4F9FF] px-5 sm:px-8 md:px-12 lg:px-20">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-5 py-12 lg:py-0">

        {/* Left Side */}
        <div className="w-full lg:w-1/2 pt-5 lg:pt-20">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Discover A Place
            <br />
            you'll love to live
          </h1>

          <p className="mt-6 lg:mt-10 text-sm sm:text-base lg:text-xs leading-6 text-gray-600 max-w-md">
            Homie is a real estate solution that gives you the local scoop
            about homes. Search confidently with your trusted source of homes
            for sale or rent.
          </p>

          <button
            className=" bg-[#0061E0] text-white h-12 w-40 mt-8 lg:mt-16 rounded cursor-pointer"
          >
            Make An Enquiry
          </button>

        </div>

        {/* Right Side */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">

          <img
            className="  w-full  max-w-[500px]  h-auto  lg:h-[480px]  object-contain  lg:pt-10"
            src={house}
            alt="House"
          />

          {/* Floating Card */}
          <div
            className="  absolute  left-1/2  -translate-x-1/2  bottom-[-30px]  sm:bottom-[-20px]  lg:bottom-0 h-40   w-52 bg-white  text-center  space-y-1  pt-5  rounded-lg  shadow-lg">

            <h1 className="text-sm font-semibold text-[#7C8893]">
              Book your Dream Home
            </h1>

            <h2 className="font-bold text-[#0061E0] text-2xl">
              80+
            </h2>

            <h1 className="font-semibold text-[#7C8893]">
              Home Available
            </h1>

            <button
              className="
                bg-[#0061E0]  text-white  rounded  w-25  h-8 text-sm cursor-pointer"
            >
              View Details
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default HeroSection;
