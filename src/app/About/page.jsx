"use client";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
          About Us
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed text-center">
          Welcome to our About Page! We are passionate about providing the best
          services and solutions tailored to your needs. Our goal is to create a
          lasting impact through innovation, creativity, and dedication. Thank
          you for being part of our journey.
        </p>
        <div className="text-center mt-6">
          <button className="btn btn-primary px-6 py-2 rounded-lg text-white font-semibold shadow-md hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
