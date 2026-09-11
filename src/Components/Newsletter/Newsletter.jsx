// import React, { useState } from 'react'

// function Newsletter() {
//   const [sub, setSub] = useState("");

//   const Subscribe = (e) => {
//     e.preventDefault();
    

// console.log(sub);

//     setSub("");


//   };

  
//   return (
//     <>

//     <div className='h-40 w-full bg-[#0061E0]'>
// <div className='flex justify-evenly pt-15'>
//   <div>
//       <h1 className='text-4xl text-white font-bold'>Join Our Newsletter Now </h1>
//       <p className='text-white text-sm'>Register now to get updates on promotions...</p>
//       </div>
// <div className=''>
//   <form onSubmit={Subscribe}>
//   <input
//     value={sub}
//     onChange={(e) => setSub(e.target.value)}
//     className="text-xs outline-none w-70 h-12 bg-white py-3 rounded-tl-md rounded-bl-md pl-3"
//     type="text"
//     placeholder="Enter your email to subscribe..."
//   />

//   <button
//     type="submit"
//     className="bg-black h-12 w-30 text-white rounded-tr-md rounded-br-md"
//   >
//     SUBSCRIBE
//   </button>
// </form>
// </div>

// </div>
      
//     </div>
    
    
//     </>
    
//   )
// }

// export default Newsletter



import React, { useState } from 'react'

function Newsletter() {
  const [sub, setSub] = useState("")

  const Subscribe = (e) => {
    e.preventDefault()

    console.log(sub)

    setSub("")
  }

  return (
    <section className="w-full bg-[#0061E0] px-5 sm:px-8 py-8 sm:py-10">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
            Join Our Newsletter Now
          </h1>

          <p className="text-white text-sm pt-2">
            Register now to get updates on promotions...
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={Subscribe}
          className="flex w-full max-w-[500px] flex-col sm:flex-row"
        >

          <input
            value={sub}
            onChange={(e) => setSub(e.target.value)}
            className="
              h-12
              w-full
              min-w-0
              bg-white
              px-3
              text-xs
              outline-none
              rounded-md
              sm:rounded-l-md
              sm:rounded-r-none
            "
            type="email"
            placeholder="Enter your email to subscribe..."
          />

          <button
            type="submit"
            className="
              h-12
              w-full
              sm:w-[120px]
              bg-black
              text-white rounded-md sm:rounded-l-none sm:rounded-r-md mt-2 sm:mt-0"
          >
            SUBSCRIBE
          </button>

        </form>

      </div>

    </section>
  )
}

export default Newsletter
