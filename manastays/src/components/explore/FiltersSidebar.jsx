import React from "react";
import { Check } from "react-feather";

function Row({label, checked=false}) {
  return (
    <label className="flex items-center cursor-pointer">
      <input type="checkbox" defaultChecked={checked} className="hidden" />
      <span className={`w-5 h-5 border border-light rounded mr-2 flex items-center justify-center ${checked ? "bg-primary border-primary" : ""}`}>
        {checked && <Check size={14} className="text-white" />}
      </span>
      <span>{label}</span>
    </label>
  );
}

export default function FiltersSidebar() {
  return (
    <div className="w-full md:w-1/4">
      <div className="bg-white rounded-xl p-6 shadow-md md:sticky md:top-28">
        <h3 className="font-bold text-lg mb-6">Filters</h3>

        <div className="mb-6">
          <h4 className="font-medium mb-3">Price Range</h4>
          <div className="px-2">
            <input type="range" min="5000" max="70000" defaultValue="35000" className="w-full h-2 bg-light rounded-lg cursor-pointer" />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>₹5,000</span><span>₹70,000</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-3">Amenities</h4>
          <div className="space-y-2">
            <Row label="WiFi" />
            <Row label="Air Conditioner" checked />
            <Row label="Private Parking" />
            <Row label="Swimming Pool" checked />
            <Row label="Kitchen" />
            <a href="#" className="text-primary text-sm inline-flex items-center mt-2">See more</a>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-3">Preferences</h4>
          <div className="space-y-2">
            <Row label="Pet Friendly" />
            <Row label="Family Friendly" checked />
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-3">Nearby</h4>
          <div className="space-y-2">
            <Row label="Airport" />
            <Row label="Scenic View" checked />
            <Row label="Restaurants" />
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-3">House Rules</h4>
          <div className="space-y-2">
            <Row label="Smoking Allowed" />
            <Row label="Parties Allowed" />
          </div>
        </div>

        <button className="w-full bg-primary hover:bg-accent text-white py-3 rounded-lg font-medium transition">
          Apply Filters
        </button>
      </div>
    </div>
  );
}
