import React from "react";
import Button from "../common/Button.jsx";
import { MapPin, Calendar, Users } from "react-feather";

export default function SearchBar() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="relative">
          <span className="absolute left-3 top-3 text-gray-400"><MapPin size={18} /></span>
          <input placeholder="Where are you going?" className="pl-10 w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div className="relative">
          <span className="absolute left-3 top-3 text-gray-400"><Calendar size={18} /></span>
          <input placeholder="Check-In" className="pl-10 w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div className="relative">
          <span className="absolute left-3 top-3 text-gray-400"><Calendar size={18} /></span>
          <input placeholder="Check-Out" className="pl-10 w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div className="relative">
          <span className="absolute left-3 top-3 text-gray-400"><Users size={18} /></span>
          <input placeholder="Guests & Rooms" className="pl-10 w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <Button className="bg-primary hover:bg-accent text-white rounded-lg font-medium transition duration-300">Search</Button>
      </div>
    </div>
  );
}
