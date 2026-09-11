import React from 'react'
import { FiCheck } from "react-icons/fi"
import { GoArrowRight } from "react-icons/go"

function Facilities() {
  return (
    <>
      {/* Main Section */}
      <div className="
        w-full
        px-5 sm:px-8 md:px-12 lg:px-20
        py-10 lg:py-16
        flex flex-col lg:flex-row
        items-center
        gap-8 lg:gap-12
      ">

        {/* ================= LEFT SIDE ================= */}
        <div className="w-full lg:w-1/2">

          <div className="w-full max-w-[600px] mx-auto">

            <iframe
              className="
                w-full
                h-[250px]
                sm:h-[320px]
                md:h-[380px]
                lg:h-[350px]
              "
              src="https://www.youtube.com/embed/ABC123"
              title="YouTube video"
              allowFullScreen
            ></iframe>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="w-full lg:w-1/2">

          {/* Small Heading */}
          <h1 className="
            text-[#0061E0]
            text-sm
            font-semibold
            mt-2
          ">
            OUR FACILITIES
          </h1>


          {/* Main Heading */}
          <div className="mt-2">

            <h2 className="
              text-2xl
              sm:text-3xl
              lg:text-4xl
              font-bold
              leading-tight
              text-gray-900
            ">
              The experts in local and
              international property
            </h2>

          </div>


          {/* Description */}
          <div className="
            mt-4
            max-w-[520px]
          ">

            <p className="
              text-sm
              leading-6
              text-gray-500
            ">
              Agent hen an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic.
            </p>

          </div>


          {/* ================= FACILITIES ================= */}
          <div className="
            mt-7
            w-full
            max-w-[500px]
            grid
            grid-cols-1 sm:grid-cols-2
            gap-y-4
            gap-x-8
          ">

            {/* Parking Space */}
            <div className="flex items-center gap-2 text-gray-500">
              <FiCheck className="text-[#0061E0] text-lg" />
              <span className="text-sm">
                Parking Space
              </span>
            </div>


            {/* Medical Center */}
            <div className="flex items-center gap-2 text-gray-500">
              <FiCheck className="text-[#0061E0] text-lg" />
              <span className="text-sm">
                Medical Center
              </span>
            </div>


            {/* Swimming Pool */}
            <div className="flex items-center gap-2 text-gray-500">
              <FiCheck className="text-[#0061E0] text-lg" />
              <span className="text-sm">
                Swimming Pool
              </span>
            </div>


            {/* Kids Playland */}
            <div className="flex items-center gap-2 text-gray-500">
              <FiCheck className="text-[#0061E0] text-lg" />
              <span className="text-sm">
                Kids Playland
              </span>
            </div>


            {/* Private Security */}
            <div className="flex items-center gap-2 text-gray-500">
              <FiCheck className="text-[#0061E0] text-lg" />
              <span className="text-sm">
                Private Security
              </span>
            </div>


            {/* Library Area */}
            <div className="flex items-center gap-2 text-gray-500">
              <FiCheck className="text-[#0061E0] text-lg" />
              <span className="text-sm">
                Library Area
              </span>
            </div>

          </div>


          {/* ================= READ MORE ================= */}
          <button className="
            mt-7
            flex
            items-center
            gap-2
            text-[#0061E0]
            text-sm
            font-medium
            hover:gap-3
            transition-all
          ">
            <GoArrowRight />
            Read More
          </button>

        </div>

      </div>
    </>
  )
}

export default Facilities