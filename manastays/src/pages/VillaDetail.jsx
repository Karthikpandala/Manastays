// src/pages/VillaDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import { properties } from "../data/properties.js";
import { MapPin, Users, Home as HomeIcon, Droplet, Star } from "react-feather";

export default function VillaDetail() {
  const { id } = useParams();
  const villa = properties.find(p => p.id === id);

  if (!villa) {
    return (
      <>
        <Header />
        <main className="container px-4 py-16">
          <p>Villa not found.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container px-4 py-10">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">{villa.title}</h1>
          <div className="flex items-center text-gray-600 mt-2">
            <MapPin size={16} className="mr-2" /> {villa.location}
            <span className="inline-flex items-center ml-4"><Star className="text-yellow-500 mr-1" size={16}/>{villa.rating}</span>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <img className="w-full h-64 object-cover rounded-lg md:col-span-2" src={villa.photos[0]} alt={villa.title}/>
          <img className="w-full h-64 object-cover rounded-lg" src={villa.photos[1] || villa.photos[0]} alt={villa.title}/>
        </div>

        {/* Quick facts */}
        <div className="flex gap-6 text-gray-700 mb-8">
          <span className="inline-flex items-center"><Users size={18} className="mr-2" /> {villa.guests} Guests</span>
          <span className="inline-flex items-center"><HomeIcon size={18} className="mr-2" /> {villa.beds} Rooms</span>
          <span className="inline-flex items-center"><Droplet size={18} className="mr-2" /> {villa.baths} Baths</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Description & amenities */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-3">About this place</h2>
            <p className="text-gray-700">{villa.description}</p>

            <h3 className="text-lg font-semibold mt-8 mb-3">Amenities</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {villa.amenities.map((a, i)=>(
                <li key={i} className="text-gray-700">• {a}</li>
              ))}
            </ul>
          </div>

          {/* Right: Booking box (front-end only) */}
          <aside className="bg-white rounded-xl shadow p-6 h-fit">
            <div className="text-2xl font-bold text-primary">₹{villa.price.toLocaleString()} <span className="text-sm text-gray-500 font-normal">/ night</span></div>
            <form className="mt-4 space-y-3" onSubmit={(e)=>e.preventDefault()}>
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"/>
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"/>
              <input type="number" min="1" placeholder="Guests" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"/>
              <button className="w-full bg-primary hover:bg-primary-dark text-white p-3 rounded-lg">Request to Book</button>
            </form>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
