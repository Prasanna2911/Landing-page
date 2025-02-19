import React from "react";
export function Hero() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
            Transform Your Digital Presence
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Create stunning websites that convert visitors into customers.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://ik.imagekit.io/d3kzbpbila/thejashari_jnmo0LdKhK"
            alt="Hero"
            className="rounded-lg shadow-xl h-[450px] w-[400px] md:mr-[200px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
