// src/pages/Explore.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import { properties as ALL } from "../data/properties.js";
import { Heart } from "react-feather";

const AMENITIES = ["WiFi","Air Conditioner","Private Parking","Swimming Pool","Kitchen"];
const PREFS = ["Pet Friendly","Family Friendly"];
const NEARBY = ["Airport","Scenic View","Restaurants"];
const RULES = ["Smoking Allowed","Parties Allowed"];

export default function Explore() {
  // Search inputs
  const [q, setQ] = useState("");         // city/state/title
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  // Filters
  const [maxPrice, setMaxPrice] = useState(70000);
  const [amenities, setAmenities] = useState(new Set(["Air Conditioner","Swimming Pool"]));
  const [prefs, setPrefs]       = useState(new Set(["Family Friendly"]));
  const [nearby, setNearby]     = useState(new Set(["Scenic View"]));
  const [rules, setRules]       = useState(new Set());

  // Sort
  const [sortBy, setSortBy] = useState("Recommended");

  const toggle = (setter, value) => {
    setter(prev => {
      const next = new Set(prev);
      next.has(value) ? next.delete(value) : next.add(value);
      return next;
    });
  };

  const filtered = useMemo(() => {
    let list = [...ALL];

    // text search by city/state/title
    const needle = q.trim().toLowerCase();
    if (needle) {
      list = list.filter(p =>
        p.city.toLowerCase().includes(needle) ||
        p.state.toLowerCase().includes(needle) ||
        p.title.toLowerCase().includes(needle)
      );
    }

    // guests (>=)
    const g = parseInt(guests, 10);
    if (!Number.isNaN(g) && g > 0) list = list.filter(p => p.guests >= g);

    // price
    list = list.filter(p => p.price <= maxPrice);

    // amenities (all selected must be present)
    if (amenities.size) list = list.filter(p => [...amenities].every(a => p.amenities?.includes(a)));

    // preferences (stored in p.rules for demo)
    if (prefs.size) list = list.filter(p => [...prefs].every(pr => p.rules?.includes(pr)));

    // nearby
    if (nearby.size) list = list.filter(p => [...nearby].every(n => p.nearby?.includes(n)));

    // rules (Smoking Allowed, Parties Allowed)
    if (rules.size) list = list.filter(p => [...rules].every(r => p.rules?.includes(r)));

    // (front-end only) basic date sanity
    if (checkIn && checkOut) {
      const inD = new Date(checkIn);
      const outD = new Date(checkOut);
      if (!(inD instanceof Date) || isNaN(+inD) || !(outD instanceof Date) || isNaN(+outD) || inD >= outD) {
        list = []; // invalid date range -> show none
      }
    }

    // sort
    switch (sortBy) {
      case "Price Low to High": list.sort((a,b)=> a.price - b.price); break;
      case "Price High to Low": list.sort((a,b)=> b.price - a.price); break;
      case "Rating":            list.sort((a,b)=> (b.rating ?? 0) - (a.rating ?? 0)); break;
      default: /* Recommended */ list.sort((a,b)=> (b.exclusive?1:0) - (a.exclusive?1:0) || (b.rating ?? 0) - (a.rating ?? 0));
    }

    return list;
  }, [q, checkIn, checkOut, guests, maxPrice, amenities, prefs, nearby, rules, sortBy]);

  return (
    <>
      <Header />
      <main className="pt-24 pb-12">
        <div className="container px-4">
          {/* Search Bar */}
          <div className="bg-white rounded-xl p-6 shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <input
                value={q}
                onChange={e=>setQ(e.target.value)}
                placeholder="Where are you going?"
                className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="date"
                value={checkIn}
                onChange={e=>setCheckIn(e.target.value)}
                className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="date"
                value={checkOut}
                onChange={e=>setCheckOut(e.target.value)}
                className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                value={guests}
                onChange={e=>setGuests(e.target.value)}
                placeholder="Guests"
                className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                className="bg-primary hover:bg-accent text-white rounded-lg font-medium transition duration-300"
                onClick={()=>{/* live filtering already happens */}}
              >
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <aside className="w-full md:w-1/4">
              <div className="bg-white rounded-xl p-6 shadow-md sticky top-28">
                <h3 className="font-bold text-lg mb-6">Filters</h3>

                {/* Price */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <input
                    type="range" min="5000" max="70000" value={maxPrice}
                    onChange={e=>setMaxPrice(parseInt(e.target.value,10))}
                    className="w-full h-2 bg-light rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>₹5,000</span>
                    <span>₹{maxPrice.toLocaleString()}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Amenities</h4>
                  <div className="space-y-2">
                    {AMENITIES.map(a=>(
                      <label key={a} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={amenities.has(a)}
                          onChange={()=>toggle(setAmenities, a)}
                          className="mr-2"
                        />
                        <span>{a}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Preferences */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Preferences</h4>
                  <div className="space-y-2">
                    {PREFS.map(p=>(
                      <label key={p} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={prefs.has(p)}
                          onChange={()=>toggle(setPrefs, p)}
                          className="mr-2"
                        />
                        <span>{p}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Nearby */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Nearby</h4>
                  <div className="space-y-2">
                    {NEARBY.map(n=>(
                      <label key={n} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={nearby.has(n)}
                          onChange={()=>toggle(setNearby, n)}
                          className="mr-2"
                        />
                        <span>{n}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* House Rules */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">House Rules</h4>
                  <div className="space-y-2">
                    {RULES.map(r=>(
                      <label key={r} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={rules.has(r)}
                          onChange={()=>toggle(setRules, r)}
                          className="mr-2"
                        />
                        <span>{r}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  className="w-full bg-primary hover:bg-accent text-white py-3 rounded-lg font-medium transition"
                  onClick={()=>{/* optional: collapse panel / no-op because filters are live */}}
                >
                  Apply Filters
                </button>
              </div>
            </aside>

            {/* Results */}
            <section className="w-full md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{filtered.length} Villas Found</h2>
                <div className="flex items-center">
                  <span className="mr-2 text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={e=>setSortBy(e.target.value)}
                    className="border border-light rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Recommended</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                    <option>Rating</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p, idx) => (
                  <div key={p.id + idx} className="bg-white rounded-xl overflow-hidden shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative">
                      <img src={(p.photos && p.photos[0]) || p.img} alt={p.title} className="w-full h-48 object-cover" />
                      <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
                        <Heart className="text-gray-400 hover:text-red-500" />
                      </div>
                      {p.exclusive && (
                        <div className="absolute bottom-3 left-3 bg-primary text-white px-2 py-1 rounded text-sm">Exclusive</div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">{p.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{p.location}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-bold text-primary">₹{p.price.toLocaleString()}</span>
                          <span className="text-gray-500 text-sm">/ night</span>
                        </div>
                        <Link to={`/villas/${p.id}`} className="text-primary hover:underline">View →</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
