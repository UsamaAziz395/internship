// import React from "react";
import California from "../../assets/California.png";
import LosAngelas from "../../assets/LosAngelas.png";
import Singapore from "../../assets/Singapore.png";

const House = [
  {
    id: 1,
    image: Singapore,
    name: "Michel Smith",
    location: "Hills, CA 90210",
    title: "1963 S Crescent Heights Blvd",
    timing: "1 day ago",
    area: "2400 square feet",
    Garages: "2 Garages",
    beds: "20 Bedroom",
    baths: "10 Bedroom",
    price: "$5,304,000",
  },
  {
    id: 2,
    image: LosAngelas,
    name: "Adam Smith",
    location: "Los Angelas,USA",
    title: "302 North Plam Drive",
    timing: "5 day ago",
    area: "2300 square feet",
    Garages: "3 Garages",
    beds: "20 Bedroom",
    baths: "10 Bedroom",
    price: "$5,142,000",
  },
  {
    id: 3,
    image: California,
    name: "David Lee",
    location: "California Hills, CA 90210",
    title: "28 Quaker Road, Manhasset",
    timing: "5 day ago",
    area: "2020 square feet",
    Garages: "2 Garages",
    beds: "22 Bedroom",
    baths: "11 Bedroom",
    price: "$4,784,000",
  },
  {
    id: 4,
    image: Singapore,
    name: "Lee Hue",
    location: "Los Angel, CA 90210",
    title: "Sofi Berryessa 750 King Road",
    timing: "5 day ago",
    area: "2350 square feet",
    Garages: "4 Garages",
    beds: "19 Bedroom",
    baths: "10 Bedroom",
    price: "$3,534,000",
  },
  {
    id: 5,
    image: LosAngelas,
    name: "Tom Steven",
    location: "Louisiana, CA 90210",
    title: "1203 Orren Street, Northeast",
    timing: "6 day ago",
    area: "1800 square feet",
    Garages: "2 Garages",
    beds: "16 Bedroom",
    baths: "7 Bedroom",
    price: "$3,142,000",
  },
  {
    id: 6,
    image: California,
    name: "David Jhonson",
    location: "Claremont, CA 90210",
    title: "28 Ridge Road, Manhasset",
    timing: "7 day ago",
    area: "2020 square feet",
    Garages: "3 Garages",
    beds: "20 Bedroom",
    baths: "11 Bedroom",
    price: "$2,384,000",
  },
];

function Dream() {
  return (
    <section className="w-full px-5 sm:px-8 md:px-12 lg:px-20 py-12">

      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[#0061E0] text-sm font-semibold">
          FEATURE LISTING
        </h2>

        <h1 className="font-bold text-2xl sm:text-3xl pt-4">
          We Bring Dream Homes To Reality
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 pt-10">

        {House.map((house) => (
          <div
            key={house.id}
            className="shadow-md w-full max-w-[320px] sm:w-[300px] overflow-hidden"
          >

            {/* Image */}
            <img
              src={house.image}
              alt="Property"
              className="h-40 w-full object-cover"
            />

            {/* Title */}
            <div className="font-semibold text-sm pt-3 px-5">
              <p className="truncate">
                {house.title}
              </p>
            </div>

            {/* Location */}
            <div className="text-center text-gray-500 text-sm pt-2 px-3">
              <h3>{house.location}</h3>
            </div>

            <hr className="text-gray-300 mt-2" />

            {/* Property Details */}
            <div className="flex flex-wrap justify-between text-xs gap-2 pt-3 px-5 text-gray-500">
              <span>{house.area}</span>
              <span>{house.Garages}</span>
              <span>{house.beds}</span>
              <span>{house.baths}</span>
            </div>

            <hr className="text-gray-300 mt-2" />

            {/* Agent + Timing */}
            <div className="flex justify-between gap-2 text-xs pt-2 px-5">
              <h1 className="text-gray-500 truncate">
                {house.name}
              </h1>

              <h2 className="text-[#0061E0] whitespace-nowrap">
                {house.timing}
              </h2>
            </div>

            {/* Price */}
            <div className="text-white bg-[#0061E0] h-8 py-1 mt-2 w-full text-center text-sm">
              <h2>{house.price}</h2>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Dream;