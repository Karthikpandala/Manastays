import React from "react";
import { Heart } from "react-feather";
import { properties } from "../../data/properties.js";

export default function ExploreGrid() {
  return (
    <div className="w-full md:w-3/4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">125 Villas Found</h2>
        <div className="flex items-center">
          <span className="mr-2 text-gray-600">Sort by:</span>
          <select className="border border-light rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Recommended</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
            <option>Rating</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.concat(properties).map((p, idx) => (
          <div key={p.id + idx} className="bg-white rounded-xl overflow-hidden shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative">
              <img src={p.img.replace("/1","/8")} alt={p.title} className="w-full h-48 object-cover" />
              <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
                <Heart className="text-gray-400 hover:text-red-500" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{p.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{p.location}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-primary">₹{p.price.toLocaleString()}</span>
                  <span className="text-gray-500 text-sm">/ night</span>
                </div>
                <a href={p.href} className="text-primary hover:underline">View </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
