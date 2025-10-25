// src/pages/ListProperty.jsx
import React, { useState } from "react";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";

const steps = ["Basic Info","Location","Amenities","Description","Review & Submit"];

export default function ListProperty() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    ownerName: "", villaName: "", email: "", dial:"+91", phone:"",
    rooms:"", capacity:"", type:"",
    address:"", city:"", state:"", pincode:"",
    amen: { wifi:false, ac:false, parking:false, pool:false, kitchen:false },
    summary:""
  });

  const next = ()=> setStep(s => Math.min(s+1, steps.length-1));
  const prev = ()=> setStep(s => Math.max(s-1, 0));
  const onChange = (k,v)=> setForm(f => ({...f, [k]: v}));

  const onSubmit = (e)=> {
    e.preventDefault();
    alert("Submitted! (front-end demo)\n" + JSON.stringify(form, null, 2));
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-12">
          <div className="container px-4">
            <h1 className="text-3xl md:text-4xl font-bold">List Your Property</h1>
            <p className="text-gray-600 mt-2">Step {step+1} of {steps.length} — {steps[step]}</p>
          </div>
        </section>

        <section className="pb-16">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
              {/* Progress */}
              <div className="flex justify-between items-center mb-8">
                {steps.map((t,i)=>(
                  <React.Fragment key={t}>
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full ${i<=step ? "bg-primary text-white" : "bg-light"} flex items-center justify-center font-medium`}>{i+1}</div>
                      <span className="text-xs mt-1">{t}</span>
                    </div>
                    {i<steps.length-1 && <div className="h-px flex-1 bg-light mx-2"></div>}
                  </React.Fragment>
                ))}
              </div>

              {/* Forms */}
              <form onSubmit={onSubmit} className="space-y-5">
                {step===0 && (
                  <>
                    <div>
                      <label className="block text-gray-700 mb-2">Villa Owner Name</label>
                      <input value={form.ownerName} onChange={e=>onChange("ownerName", e.target.value)}
                             className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Villa Name</label>
                      <input value={form.villaName} onChange={e=>onChange("villaName", e.target.value)}
                             className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input type="email" value={form.email} onChange={e=>onChange("email", e.target.value)}
                             className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Mobile Number</label>
                      <div className="flex">
                        <select value={form.dial} onChange={e=>onChange("dial", e.target.value)} className="border border-light rounded-l-lg px-3 bg-gray-50">
                          <option>+91</option><option>+1</option>
                        </select>
                        <input value={form.phone} onChange={e=>onChange("phone", e.target.value)}
                               className="border border-light border-l-0 rounded-r-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"/>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">Number of Rooms</label>
                        <input type="number" value={form.rooms} onChange={e=>onChange("rooms", e.target.value)}
                               className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Total Guests Capacity</label>
                        <input type="number" value={form.capacity} onChange={e=>onChange("capacity", e.target.value)}
                               className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Property Type</label>
                      <select value={form.type} onChange={e=>onChange("type", e.target.value)}
                              className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Select property type</option>
                        <option>Villa</option><option>Cottage</option><option>Apartment</option><option>Farmhouse</option><option>Bungalow</option>
                      </select>
                    </div>
                  </>
                )}

                {step===1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label className="block mb-2">Address</label>
                      <input value={form.address} onChange={e=>onChange("address", e.target.value)}
                             className="w-full p-3 border border-light rounded-lg focus:ring-2 focus:ring-primary outline-none"/></div>
                    <div><label className="block mb-2">City</label>
                      <input value={form.city} onChange={e=>onChange("city", e.target.value)}
                             className="w-full p-3 border border-light rounded-lg focus:ring-2 focus:ring-primary outline-none"/></div>
                    <div><label className="block mb-2">State</label>
                      <input value={form.state} onChange={e=>onChange("state", e.target.value)}
                             className="w-full p-3 border border-light rounded-lg focus:ring-2 focus:ring-primary outline-none"/></div>
                    <div><label className="block mb-2">Pincode</label>
                      <input value={form.pincode} onChange={e=>onChange("pincode", e.target.value)}
                             className="w-full p-3 border border-light rounded-lg focus:ring-2 focus:ring-primary outline-none"/></div>
                  </div>
                )}

                {step===2 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      ["wifi","WiFi"],["ac","Air Conditioner"],["parking","Private Parking"],
                      ["pool","Swimming Pool"],["kitchen","Kitchen"]
                    ].map(([k,label])=>(
                      <label key={k} className="flex items-center">
                        <input type="checkbox" checked={form.amen[k]}
                               onChange={e=>setForm(f=>({...f, amen:{...f.amen, [k]: e.target.checked}}))}
                               className="mr-2"/>
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                )}

                {step===3 && (
                  <div>
                    <label className="block mb-2">Short Description</label>
                    <textarea rows="5" value={form.summary} onChange={e=>onChange("summary", e.target.value)}
                              className="w-full p-3 border border-light rounded-lg focus:ring-2 focus:ring-primary outline-none"></textarea>
                  </div>
                )}

                {step===4 && (
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Review</h3>
                    <pre className="bg-gray-50 p-4 rounded-lg overflow-auto text-sm">{JSON.stringify(form, null, 2)}</pre>
                  </div>
                )}

                {/* Controls */}
                <div className="flex justify-between pt-4">
                  <button type="button" onClick={prev} disabled={step===0}
                          className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50">Back</button>
                  {step < steps.length-1 ? (
                    <button type="button" onClick={next}
                            className="px-4 py-2 rounded-lg bg-primary text-white">Continue →</button>
                  ) : (
                    <button type="submit" className="px-4 py-2 rounded-lg bg-primary text-white">Submit</button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer dark />
    </>
  );
}
