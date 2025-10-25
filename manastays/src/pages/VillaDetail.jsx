// src/pages/VillaDetail.jsx
import React, { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import { properties } from "../data/properties.js";
import {
  ArrowLeft, MapPin, Users, Home as HomeIcon, Droplet, Star,
  Phone, Image as ImageIcon, ChevronRight, CheckCircle, XCircle, AlertTriangle
} from "react-feather";

function Dot({ className = "" }) {
  return <span className={`inline-block w-2.5 h-2.5 rounded-full ${className}`} />;
}

export default function VillaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const villa = useMemo(() => properties.find(p => p.id === id), [id]);

  if (!villa) {
    return (
      <>
        <Header />
        <main className="container px-4 py-16">
          <button onClick={() => navigate(-1)} className="text-primary hover:underline inline-flex items-center mb-6">
            <ArrowLeft size={18} className="mr-1" /> Back
          </button>
          <p>Villa not found.</p>
        </main>
        <Footer />
      </>
    );
  }

  const main = villa.photos?.[0];
  const thumb1 = villa.photos?.[1] || villa.photos?.[0];
  const thumb2 = villa.photos?.[2] || villa.photos?.[1] || villa.photos?.[0];

  return (
    <>
      <Header />
      <main className="container px-4 pt-6 pb-16">
        {/* Top bar */}
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="text-gray-700 hover:text-primary inline-flex items-center">
            <ArrowLeft size={18} className="mr-1" /> Back
          </button>
          <span className="text-gray-400">|</span>
          <span className="text-sm text-gray-600">Exclusive</span>
        </div>

        {/* Title / location / rating */}
        <div className="mb-4">
          <h1 className="text-2xl md:text-3xl font-extrabold">{villa.title}</h1>
          <div className="flex items-center text-gray-600 mt-2 gap-4">
            <span className="inline-flex items-center"><MapPin size={16} className="mr-2" /> {villa.location}</span>
            {villa.rating && (
              <span className="inline-flex items-center"><Star className="text-yellow-500 mr-1" size={16} />{villa.rating}</span>
            )}
          </div>
          {villa.address && (
            <p className="text-sm text-gray-500 mt-1">{villa.address}</p>
          )}
        </div>

        {/* Gallery + booking card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Big image */}
          <div className="md:col-span-2 relative">
            <img src={main} alt={villa.title} className="w-full h-[360px] md:h-[420px] object-cover rounded-xl" />
            <button
              className="absolute left-4 bottom-4 bg-white/95 backdrop-blur px-3 py-2 rounded-md text-sm font-medium inline-flex items-center shadow"
              onClick={() => alert("Lightbox gallery coming soon (front-end demo).")}
            >
              <ImageIcon size={16} className="mr-2" /> View Photos
            </button>
          </div>

          {/* Two stacked thumbs */}
          <div className="grid grid-rows-2 gap-4">
            <img src={thumb1} alt={`${villa.title} thumb 1`} className="w-full h-[178px] md:h-[200px] object-cover rounded-xl" />
            <div className="relative">
              <img src={thumb2} alt={`${villa.title} thumb 2`} className="w-full h-[178px] md:h-[200px] object-cover rounded-xl" />
              <button
                className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-lg font-semibold rounded-xl"
                onClick={() => alert("Open gallery with +13 images (front-end demo).")}
              >
                +13
              </button>
            </div>
          </div>
        </div>

        {/* Chips (BHK / Max Guests / Bathrooms) + check-in/out note */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-3 text-sm mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                <HomeIcon size={14} className="mr-2" /> {villa.beds} BHK
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                <Users size={14} className="mr-2" /> {villa.guests} MAX GUEST
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                <Droplet size={14} className="mr-2" /> {villa.baths} Bathrooms
              </span>
            </div>

            {/* Check-in/out small text */}
            {(villa.checkin || villa.checkout) && (
              <div className="text-sm text-gray-600 mb-6">
                Check-in time: <b>{villa.checkin || "—"}</b>, Check-out time: <b>{villa.checkout || "—"}</b><br />
                <span className="text-gray-500">Note: Early check-in and late check-out is subject to availability (may incur an additional fee).</span>
              </div>
            )}

            {/* Description */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-2">Property Description</h2>
              <p className="text-gray-700 leading-relaxed">{villa.description}</p>

              {/* CTA buttons like brochures/videos */}
              <div className="flex flex-wrap gap-3 mt-4">
                <a href="#" className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-sm">
                  📄 Property Brochure
                </a>
                <a href="#" className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-sm">
                  🎬 Property Videos
                </a>
              </div>
            </section>

            {/* Amenities grid (icons as dots + label, keep light) */}
            {villa.amenities?.length > 0 && (
              <section className="mb-10">
                <h3 className="text-xl font-semibold mb-3">Amenities</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {villa.amenities.map((a, i) => (
                    <li key={i} className="flex items-center text-gray-800">
                      <Dot className="bg-primary mr-2" /> {a}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Location (map) */}
            {villa.map?.embedUrl || villa.address ? (
              <section className="mb-10">
                <h3 className="text-xl font-semibold mb-3">Location</h3>
                <div className="rounded-xl overflow-hidden border">
                  {villa.map?.embedUrl ? (
                    <iframe
                      title="map"
                      src={villa.map.embedUrl}
                      width="100%"
                      height="360"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  ) : (
                    <div className="p-6 text-gray-600">Map coming soon.</div>
                  )}
                </div>
                {villa.map?.dirUrl && (
                  <a
                    className="mt-3 inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                    href={villa.map.dirUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Directions <ChevronRight size={16} className="ml-1" />
                  </a>
                )}
              </section>
            ) : null}

            {/* Rules & Refund Policy */}
            <section className="mb-10">
              <h3 className="text-xl font-semibold mb-4">Rules and Refund Policy</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold">100% Future Stay Voucher / 100% Refund</p>
                      <p className="text-sm text-gray-600">Before 12 days</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="text-yellow-600 mt-1" />
                    <div>
                      <p className="font-semibold">50% Future Stay Voucher / Refund</p>
                      <p className="text-sm text-gray-600">6 to 12 days</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-2">
                    <XCircle className="text-red-600 mt-1" />
                    <div>
                      <p className="font-semibold">No Refund</p>
                      <p className="text-sm text-gray-600">Less than 6 days</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <a href="/refund-cancellation" className="px-4 py-2 rounded-lg border">Refund Policy</a>
                <a href="/home-rules" className="px-4 py-2 rounded-lg border">Home Rules and Policy</a>
              </div>
            </section>

            {/* FAQs */}
            {villa.faqs?.length > 0 && (
              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-3">FAQs</h3>
                <div className="divide-y rounded-xl border">
                  {villa.faqs.map((f, i) => (
                    <details key={i} className="group">
                      <summary className="flex w-full cursor-pointer list-none items-center justify-between px-4 py-3 font-medium hover:bg-gray-50">
                        <span>{f.q}</span>
                        <ChevronRight className="transition group-open:rotate-90" />
                      </summary>
                      <div className="px-4 pb-4 text-gray-700">{f.a}</div>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Booking card */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow border p-5 sticky top-24">
              <div className="text-2xl font-extrabold text-primary">
                ₹{villa.price.toLocaleString()} <span className="text-sm text-gray-500 font-medium">/ Per Night {villa.weekdayNote ? `+ Taxes (${villa.weekdayNote})` : ""}</span>
              </div>

              <form className="mt-4 space-y-3" onSubmit={(e)=>e.preventDefault()}>
                {/* Fake date pickers to match visual (dd-mm-yyyy) */}
                <input placeholder="dd-mm-yyyy" className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-primary" />
                <input placeholder="dd-mm-yyyy" className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-primary" />
                <input placeholder="1 Guests" className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-primary" />

                <div className="flex items-center gap-2">
                  <input placeholder="Enter coupon code" className="flex-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-primary" />
                  <button className="px-4 py-2 rounded-lg border hover:bg-gray-50">Apply</button>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Total</span>
                  <span className="font-semibold text-gray-800">₹0.00</span>
                </div>

                <button className="w-full bg-gray-900 hover:bg-black text-white p-3 rounded-lg">LOGIN TO BOOK</button>

                <div className="rounded-lg border p-3 text-sm text-gray-700 flex items-center gap-2">
                  <Phone size={16} /> CONTACT YOUR HOST
                  <span className="ml-auto font-semibold">+91 8367262873</span>
                </div>
              </form>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
