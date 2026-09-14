

import React from "react";
import image1 from "../../assets/image1.png";
import Villa from "../../assets/Villa.png";
import Money from "../../assets/Money.png";
import { GoArrowRight } from "react-icons/go";

function Aboutus() {
  return (
    <section className="w-full px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 mt-10">
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[500px] max-h-screen lg:h-auto object-contain"
            src={image1}
            alt="About Us"
          />
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2">

          <h1 className="text-[#0061E0] text-sm font-semibold">
            ABOUT US
          </h1>

          <h2 className="text-3xl sm:text-4xl font-bold mt-5 leading-tight">
            We're on a Mission to Change View of RealEstate Field.
          </h2>

          <p className="text-sm sm:text-base text-gray-500 mt-5 leading-6 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit ux sed
            eiusmod tempor incididunt ut labore et dolore. enim admix minim
            veniam quis nostrud.
          </p>

          {/* Right Lower Part */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">

            {/* Modern Villa */}
            <div className="w-full">
              <img
                src={Villa}
                alt="Modern Villa"
                className="w-12 h-12 object-contain"
              />

              <h1 className="font-bold text-lg mt-3">
                Modern Villa
              </h1>

              <p className="text-gray-500 mt-3 leading-6">
                When unknown printer took galley of type and scrambled.
              </p>

              <div className="flex items-center gap-1 text-[#0061E0] mt-4">
                <GoArrowRight />
                <button>
                  Learn More
                </button>
              </div>
            </div>

            {/* Secure Payment */}
            <div className="w-full">
              <img
                src={Money}
                alt="Secure Payment"
                className="w-12 h-12 object-contain"
              />

              <h1 className="font-bold text-lg mt-3">
                Secure Payment
              </h1>

              <p className="text-gray-500 mt-3 leading-6">
                When unknown printer took galley of type and scrambled.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Aboutus
