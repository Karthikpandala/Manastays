// src/components/home/Trending.jsx  (replace only the <a> with <Link>)
import React from "react";
import { Link } from "react-router-dom";
import { Heart, Users, Home as HomeIcon, Droplet } from "react-feather";
import SectionTitle from "../common/SectionTitle.jsx";
import { properties } from "../../data/properties.js";

function PropertyCard({ p }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="relative">
        <img src={(p.photos && p.photos[0]) || p.img} alt={p.title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3">
          <button className="bg-white p-2 rounded-full shadow-md hover:text-primary"><Heart size={18} /></button>
        </div>
        {p.exclusive && (
          <div className="absolute bottom-3 left-3 bg-primary text-white px-2 py-1 rounded text-sm">Exclusive</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{p.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{p.location}</p>
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center"><Users size={16} className="mr-1" />{p.guests}</span>
          <span className="flex items-center"><HomeIcon size={16} className="mr-1" />{p.beds}</span>
          <span className="flex items-center"><Droplet size={16} className="mr-1" />{p.baths}</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-primary">₹{p.price.toLocaleString()}</span>
            <span className="text-gray-500 text-sm">/ night</span>
          </div>
          <Link to={`/villas/${p.id}`} className="text-primary hover:underline">View →</Link>
        </div>
      </div>
    </div>
  );
}

export default function Trending() {
  return (
    <section className="py-16 container px-4">
      <div className="flex justify-between items-center mb-8">
        <SectionTitle title="Trending Properties" />
        <Link to="/explore" className="text-primary hover:underline">View All</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {properties.map(p => <PropertyCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
