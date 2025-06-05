import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Hero = () => {

   useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <section className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left" data-aos="zoom-in">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-4">
            It's time to hit refresh
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-pink-500 mb-2">
            New Arrivals
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-lg mx-auto md:mx-0">
            Latest Women’s Fresh New Styles & Old School Originals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg text-sm font-medium  transition">
              SEASON ENDING SALE
            </button>
            <button className="border border-pink-600 transition-transform text-pink-500 px-6 py-3 rounded-lg text-sm font-medium hover:bg-pink-600 hover:text-white">
              DISCOVER MORE
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://sapnasriwaz.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-01-at-11.28.56_a1c4b1bd.jpg.pagespeed.ce._Ww7ii2yU6.jpg"
            alt="New Arrivals"
            className="w-full max-w-md rounded-xl shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
