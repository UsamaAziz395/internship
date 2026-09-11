
import React from "react";
import {
  FaHome,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0D2B40] text-white">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Housing */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="border-2 border-white rounded-full p-2">
                <FaHome className="text-xl" />
              </div>

              <h2 className="text-xl font-bold">
                Housing
              </h2>
            </div>

            <p className="text-gray-300 text-sm leading-6 max-w-xs">
              Lorem Ipsum Is Simply Dummy Text Of The
              And Typesetting Industry. Lorem Ipsum Is
              Dummy Text Of The Printing.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <div className="bg-[#0061E0] w-8 h-8 rounded-full flex items-center justify-center">
                <FaFacebookF className="text-sm" />
              </div>

              <div className="bg-[#0061E0] w-8 h-8 rounded-full flex items-center justify-center">
                <FaInstagram className="text-sm" />
              </div>

              <div className="bg-[#0061E0] w-8 h-8 rounded-full flex items-center justify-center">
                <FaLinkedinIn className="text-sm" />
              </div>

              <div className="bg-[#0061E0] w-8 h-8 rounded-full flex items-center justify-center">
                <FaTwitter className="text-sm" />
              </div>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <a href="#home" className="hover:text-white">Home</a>
              <a href="#about" className="hover:text-white">About Us</a>
              <a href="#blog" className="hover:text-white">Blog</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
              <a href="#services" className="hover:text-white">Services</a>
            </div>
          </div>


          {/* Services */}
          <div>
            <h3 className="font-bold mb-5">
              Services
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <a href="#">Wish List</a>
              <a href="#">Login</a>
              <a href="#">Submit a Request</a>
              <a href="#">Appointment</a>
              <a href="#">Promotional Offers</a>
            </div>
          </div>


          {/* Contact */}
          <div>
            <h3 className="font-bold mb-5">
              Contract
            </h3>

            <div className="flex flex-col gap-4 text-sm text-gray-300">

              <div className="flex gap-3 items-start">
                <FaMapMarkerAlt className="mt-1 shrink-0" />

                <p>
                  124 Brooklyn, New York
                  <br />
                  United States
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <FaPhoneAlt />
                <span>+11 2 345 7890</span>
              </div>

              <div className="flex gap-3 items-center">
                <FaEnvelope />
                <span>info@housing.com</span>
              </div>

            </div>
          </div>

        </div>


        {/* Bottom Line */}
        <div className="border-t border-gray-500 mt-10 pt-4 flex flex-col sm:flex-row justify-between gap-3 text-xs text-gray-300">

          <p>
            © Copyright Medin 2022 All Right Reserved.
          </p>

          <div className="flex gap-5">
            <a href="#">Terms Of Use</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;