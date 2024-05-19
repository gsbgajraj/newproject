// src/Hero/Hero.js
import React from 'react';

function Hero() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to My Website</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover amazing content and engage with our community. We're glad to have you here.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="py-3 px-6 text-white bg-green-500 rounded-lg hover:bg-green-400 transition duration-300"
          >
            Get Started
          </a>
          <a
            href="#"
            className="py-3 px-6 text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
