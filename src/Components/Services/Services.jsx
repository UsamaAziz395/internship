// import React from 'react'
// import buy from '../../assets/buy.png'
// import rent from '../../assets/rent.png'
// import sale from '../../assets/sale.png'
// import { GoArrowRight } from "react-icons/go";
// import excavator from '../../assets/excavator.png'
// import design from '../../assets/design.png'
// import office from '../../assets/office.png'
// import map from '../../assets/map.png'


// const Service = [ 
//     {
//            id:1,
//             image : buy,
//             title: 'Buy A Home',
//             Text: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
//             button: ' Find A Home'
//     },
//         {
//            id:2,
//             image : rent,
//             title: 'Rent A Home',
//             Text: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
//             button: ' Find A Home'
//     },
//         {
//            id:3,
//             image : sale,
//             title: 'Sell A Home',
//             Text: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
//             button: ' Find A Home '
//     },
    
// ]

// function Services() {
//   return (

//     <>
//     {/* Top Part */}

//     {/* main-container */}
//     <div className=' h-110 w-full' id='Services'>
//         {/* Heading */}
//          <h1 className='text-center text-[#0061E0]'>Our Services</h1>
//         <h1 className='text-2xl font-bold text-center pt-8'>Our Main Focus</h1>
//         <div className='md:flex justify-center md:space-x-6 space-y-6 text-center'>

 

                   
//             {Service.map((Service,index) => (
//                  <div className='mt-10 '>
//                 <div key={index} className={` shadow-lg h-65 w-60 rounded ${index === 0 ? 'border-b-2 border-[#0061E0] ' : ''} `} > 

//                 {/* <div className='h-15 w-15 mt-5 py-3 px-3 mx-20 shadow-lg rounded-full'> */}
//                  <img
//                  src={Service.image}
//                  alt='Services'
//                  className='h-10 w-10   '
//                  />
//                  <div className= {`text-xl font-bold mt-3 ${index === 0 ? 'text-blue-600' : 'text-black'}`}>
                    
//                     {Service.title}
//                  </div>
//                  <div className='mt-2 max-w-md mx-auto text-gray-500  leading-5 text-xs'>
//                     {Service.Text}
//                  </div>

//                  <div className={`text-sm pt-3 ${index === 0 ? 'my-text' : 'text-black'}`}>
//                     {Service.button }
//                  </div>

//                 </div>
//              </div> 

//             ))}
           
            
 
 
//         </div> 

//     </div>

//     {/* Bottom part */}


//     <div  className='h-45 w-full bg-[#E2EFFF] flex justify-evenly items-center'>
//         {/* excavtor */}
//         <div>
//             <img className='h-10 ' src={ excavator } alt="gallery" />
//             <h1 className='font-bold text-2xl'>260+</h1>
//             <p className='text-xs text-gray-400 pt-2'>Total Construction</p>
//         </div>
//         {/* design */}
//         <div>
//             <img className='h-10' src={ design } alt="gallery" />
//             <h1 className='font-bold text-2xl'>110+</h1>
//             <p className='text-xs text-gray-400 pt-2'>Apartio Rooms</p>
//         </div>
//         {/* Offices */}
//         <div> 
//             <img className='h-10' src={ office } alt="gallery" />
//             <h1 className='font-bold text-2xl'>190+</h1>
//             <p className='text-xs text-gray-400 pt-2'>Apartment Sold</p>
//         </div>
//         {/* map  */}
//         <div>
//             <img className='h-10' src={ map } alt="gallery" />
//             <h1 className='font-bold text-2xl'>560+</h1>
//             <p className='text-xs text-gray-400 pt-2'>Total Area Sq</p>
//             </div>
//     </div>
//     </>
   
//   )
// }

// export default Services


import React from "react";
import buy from "../../assets/buy.png";
import rent from "../../assets/rent.png";
import sale from "../../assets/sale.png";
import excavator from "../../assets/excavator.png";
import design from "../../assets/design.png";
import office from "../../assets/office.png";
import map from "../../assets/map.png";

const Service = [
  {
    id: 1,
    image: buy,
    title: "Buy A Home",
    Text: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    button: "Find A Home",
  },
  {
    id: 2,
    image: rent,
    title: "Rent A Home",
    Text: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    button: "Find A Home",
  },
  {
    id: 3,
    image: sale,
    title: "Sell A Home",
    Text: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    button: "Find A Home",
  },
];

function Services() {
  return (
    <>
      {/* ================= Services Top Part ================= */}
      <section
        className="w-full px-5 sm:px-8 md:px-12 lg:px-20 py-12"
        id="Services"
      >
        {/* Heading */}
        <h1 className="text-center text-[#0061E0] text-sm font-semibold">
          Our Services
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-center mt-4">
          Our Main Focus
        </h2>

        {/* Cards */}
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">

          {Service.map((service, index) => (
            <div
              key={service.id}
              className="w-full sm:w-[280px]"
            >
              <div
                className={`h-[260px] w-full rounded shadow-lg text-center px-5 py-6 ${ index === 0  ? "border-b-2 border-[#0061E0]": ""}`}
              >
                {/* Image Center */}
                <div className="flex justify-center">
                  <img
                    src={service.image}
                    alt="Services"
                    className="h-10 w-10 object-contain"
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold mt-4 ${ index === 0   ? "text-[#0061E0]": "text-black" }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-500 leading-5 text-xs">
                  {service.Text}
                </p>

                {/* Button */}
                <div
                  className={`text-sm mt-4 ${
                    index === 0
                      ? "text-[#0061E0]"
                      : "text-black"
                  }`}
                >
                  {service.button}
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= Bottom Stats ================= */}
      <section className="w-full bg-[#E2EFFF] px-5 sm:px-8 py-10">

        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-10 md:gap-20 text-center">

          {/* Excavator */}
          <div className="w-[130px]">
            <div className="flex justify-center">
              <img
                className="h-10 w-10 object-contain"
                src={excavator}
                alt="Construction"
              />
            </div>

            <h1 className="font-bold text-2xl mt-2">
              260+
            </h1>

            <p className="text-xs text-gray-400 pt-2">
              Total Construction
            </p>
          </div>

          {/* Design */}
          <div className="w-[130px]">
            <div className="flex justify-center">
              <img
                className="h-10 w-10 object-contain"
                src={design}
                alt="Rooms"
              />
            </div>

            <h1 className="font-bold text-2xl mt-2">
              110+
            </h1>

            <p className="text-xs text-gray-400 pt-2">
              Apartio Rooms
            </p>
          </div>

          {/* Office */}
          <div className="w-[130px]">
            <div className="flex justify-center">
              <img
                className="h-10 w-10 object-contain"
                src={office}
                alt="Apartment"
              />
            </div>

            <h1 className="font-bold text-2xl mt-2">
              190+
            </h1>

            <p className="text-xs text-gray-400 pt-2">
              Apartment Sold
            </p>
          </div>

          {/* Map */}
          <div className="w-[130px]">
            <div className="flex justify-center">
              <img
                className="h-10 w-10 object-contain"
                src={map}
                alt="Area"
              />
            </div>

            <h1 className="font-bold text-2xl mt-2">
              560+
            </h1>

            <p className="text-xs text-gray-400 pt-2">
              Total Area Sq
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Services;
