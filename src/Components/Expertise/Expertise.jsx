import React from "react";
import David from "../../assets/David.png";
import Mike from "../../assets/Mike.png";
import Steven from "../../assets/Steven.png";
import Group from "../../assets/Group.png";
import Call from "../../assets/Call.png";
import Billi from "../../assets/Billi.png"

const Experte = [
  {
    id: 1,
    image: David,
    name: "David Wing",
    profession: "Eco Builder",
    phone: "Call: +123 456 7890",
    callimg: Call,
  },
  {
    id: 2,
    image: Mike,
    name: "Mike Hue",
    profession: "Architect Design",
    phone: "Call: +123 456 7890",
    callimg: Call,
  },
  {
    id: 3,
    image: Steven,
    name: "Ela Steven",
    profession: "Interior Design",
    phone: "Call: +123 456 7890",
    callimg: Call,
  },
  {
    id: 4,
    image: Billi,
    name: "Billi Butcher",
    profession: "Sweet Home",
    phone: "Call: +123 456 7890",
    callimg: Call,
  },
];

function Expertise() {
  return (
    <section className="w-full px-5 sm:px-8 md:px-12 lg:px-20 py-12">

      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[#0061E0] text-sm font-semibold">
          EXPERTISE IS HERE
        </h2>

        <h1 className="font-bold text-2xl sm:text-3xl pt-4">
          Our Growing Agents
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 pt-10">

        {Experte.map((expert) => (
          <div
            key={expert.id}
            className="shadow-md w-full max-w-[250px] sm:w-[220px] h-auto min-h-[280px] pt-6 px-5"
          >

            {/* Agent Image */}
            <div className="flex justify-center">
              <img
                className="h-40 w-35 object-cover"
                src={expert.image}
                alt={expert.name}
              />
            </div>

            {/* Name */}
            <div className="font-semibold mt-3">
              {expert.name}
            </div>

            {/* Profession */}
            <div className="text-gray-400 text-sm pt-1">
              {expert.profession}
            </div>

            {/* Phone */}
            <div className="text-gray-400 text-sm pt-2 flex items-center gap-2">
              <img
                className="h-3 w-3 object-contain"
                src={expert.callimg}
                alt="Call"
              />

              <span>{expert.phone}</span>
            </div>

          </div>
        ))}

      </div>

      {/* Bottom - Become An Agent */}
      <div className="w-full max-w-5xl mx-auto mt-16 bg-[#E2EFFF] px-6 sm:px-8 py-6">

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-center sm:text-left">

          {/* Group Image */}
          <img
            className="h-16 w-auto object-contain"
            src={Group}
            alt="Group"
          />

          {/* Text */}
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-semibold">
              Become An Agent
            </h1>

            <p className="text-gray-500 text-sm pt-2">
              Agent hen an unknown printer took a galley scramble
            </p>
          </div>

          {/* Button */}
          <button className="bg-[#0061E0] h-10 w-28 text-white rounded">
            Join Now
          </button>

        </div>

      </div>

    </section>
  );
}

export default Expertise;
