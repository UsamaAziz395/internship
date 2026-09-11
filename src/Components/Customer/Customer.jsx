import React from "react";
import Grace from "../../assets/Gallery/grace.png";
import Connor from "../../assets/Gallery/connor.png";
import Kira from "../../assets/Gallery/kira.png";

function Customers() {

  const customers = [
    {
      name: "Grace Hall",
      role: "Customer",
      image: Grace,
      message:
        "I could probably go into sales for you. I am completely blown away. After using SEO my business skyrocketed! The very best.",
    },
    {
      name: "Connor Walker",
      role: "Customer",
      image: Connor,
      message:
        "I received very good care at Chistity Clinic, and the doctor took the time to explain the medications he was prescribing and why.",
    },
    {
      name: "Kira Wood",
      role: "Customer",
      image: Kira,
      message:
        "I have insurance and still go to this clinic. The cost is in line with my copay and I don't need to wait long for an appointment.",
    },
  ];

  return (
    <section className="bg-[#EAF4FF] py-16">

      {/* Heading */}
      <div className="text-center mb-8">

        <p className="text-[#0061E0] text-xs font-semibold uppercase">
          Our Testimonials
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
          What Our Customers Says
        </h2>

      </div>

      {/* Customers */}
      <div className="max-w-5xl mx-auto px-5">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {customers.map((customer, index) => (

            <div key={index}>

              {/* Message Box */}
              <div className="bg-white rounded-lg p-5 shadow-sm relative">

                <p className="text-gray-500 text-sm leading-6">
                  {customer.message}
                </p>

                {/* Small triangle */}
                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white rotate-45"></div>

              </div>

              {/* Customer */}
              <div className="flex items-center gap-3 mt-5">

                <img
                  src={customer.image}
                  alt={customer.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-sm text-gray-800">
                    {customer.name}
                  </h3>

                  <p className="text-xs text-gray-400">
                    {customer.role}
                  </p>
                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-2 mt-8">

          <span className="w-2 h-2 rounded-full bg-[#0061E0]"></span>
          <span className="w-2 h-2 rounded-full border border-[#0061E0]"></span>
          <span className="w-2 h-2 rounded-full border border-[#0061E0]"></span>
          <span className="w-2 h-2 rounded-full border border-[#0061E0]"></span>
          <span className="w-2 h-2 rounded-full border border-[#0061E0]"></span>

        </div>

      </div>

    </section>
  );
}

export default Customers