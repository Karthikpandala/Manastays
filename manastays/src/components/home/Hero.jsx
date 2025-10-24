import React from "react";
import Button from "../common/Button.jsx";

export default function Hero() {
  return (
    <section className="hero-image-home bg-cover bg-center h-96 flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container px-4 z-10 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Escape</h1>
        <p className="text-xl mb-8">Luxury villas for unforgettable experiences</p>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <input placeholder="Where are you going?" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
            </div>
            <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
            <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
            <Button className="w-full bg-primary hover:bg-primary-dark text-white p-3 rounded-lg">Search</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
