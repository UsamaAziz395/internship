import React from 'react'

import HexaLogo from "../../assets/HexaLogo.png"
import Techlogo from '../../assets/TechLogo.png'
import RealEstatelogo from '../../assets/RealEstateLogo.png'
import Monogram from '../../assets/Monogram.png'

function Partners() {
  return (
    <section className="w-full bg-[#F5F5F5] py-6 sm:py-8">

      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 px-5">

        <img
          src={HexaLogo}
          alt="Hexa Logo"
          className="w-24 sm:w-28 md:w-32 h-auto object-contain"
        />

        <img
          src={Techlogo}
          alt="Tech Logo"
          className="w-24 sm:w-28 md:w-32 h-auto object-contain"
        />

        <img
          src={RealEstatelogo}
          alt="Real Estate Logo"
          className="w-24 sm:w-28 md:w-32 h-auto object-contain"
        />

        <img
          src={Monogram}
          alt="Monogram"
          className="w-24 sm:w-28 md:w-32 h-auto object-contain"
        />

      </div>

    </section>
  )
}

export default Partners
