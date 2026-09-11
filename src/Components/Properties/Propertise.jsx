Propertise

import React from 'react'

import California from '../../assets/Gallery/California.png'
import LosAngelas from '../../assets/Gallery/LosAngelas.png'
import Singapore from '../../assets/Gallery/Singapore.png'

const Property = [
  {
    id: 1,
    image: Singapore,
    Price: '$300,000',
    name: 'William Hue',
    profession: 'Estate Agents',
    title: '5232 North Carolina Ave. 21BC',
    location: 'California, USA',
    beds: '4 beds',
    baths: '3 bath',
  },
  {
    id: 2,
    image: LosAngelas,
    Price: '$350,000',
    name: 'Adam Smith',
    profession: 'Estate Agents',
    title: '5232 North Carolina Ave. 21BC',
    location: 'Los Angelas, USA',
    beds: '5 beds',
    baths: '3 bath',
  },
  {
    id: 3,
    image: California,
    Price: '$500,000',
    name: 'Butcher Bos',
    profession: 'Estate Agents',
    title: '5232 North Carolina Ave. 21BC',
    location: 'Houstan, USA',
    beds: '6 beds',
    baths: '4 bath',
  },
]

function Propertise() {
  return (
    <section className="w-full px-5 sm:px-8 md:px-12 lg:px-20 py-12">

      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[#0061E0] text-sm font-semibold">
          PROPERTIES
        </h2>

        <h1 className="font-bold text-2xl sm:text-3xl pt-4">
          Our Popular Propertise
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 pt-10">

        {Property.map((property, index) => (
          <div
            key={property.id}
            className="w-full max-w-[320px] sm:w-[300px] shadow-md overflow-hidden"
          >

            {/* Image */}
            <img
              src={property.image}
              alt="Property"
              className="h-40 w-full object-cover"
            />

            {/* Content */}
            <div className="px-4 py-3">

              {/* Price */}
              <p
                className={`font-bold ${
                  index === 0
                    ? 'text-[#0061E0]'
                    : 'text-black'
                }`}
              >
                {property.Price}
              </p>

              {/* Title */}
              <h3 className="text-gray-500 text-xs pt-2">
                {property.title}
              </h3>

              {/* Location */}
              <h3
                className={`font-bold text-sm pt-2 ${
                  index === 0
                    ? 'text-[#0061E0]'
                    : 'text-black'
                }`}
              >
                {property.location}
              </h3>

              {/* Beds & Baths */}
              <div className="flex justify-between text-gray-500 text-sm pt-4">
                <span>{property.beds}</span>
                <span>{property.baths}</span>
              </div>

              {/* Agent */}
              <div
                className={`flex flex-col pt-4 ${
                  index === 0
                    ? 'text-[#0061E0]'
                    : 'text-black'
                }`}
              >
                <span>{property.name}</span>

                <span className="text-gray-500 text-sm">
                  {property.profession}
                </span>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Propertise

