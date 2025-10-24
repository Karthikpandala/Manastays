import React from "react";

export default function ListForm() {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">List Your Property</h2>

              {/* Steps */}
              <div className="flex justify-between items-center mb-8">
                {["Basic Info","Location","Amenities","Description"].map((t,i)=>(
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full ${i===0 ? "bg-primary text-white" : "bg-light"} flex items-center justify-center font-medium`}>{i+1}</div>
                      <span className="text-xs mt-1">{t}</span>
                    </div>
                    {i<3 && <div className="h-px flex-1 bg-light mx-2"></div>}
                  </React.Fragment>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={(e)=>e.preventDefault()}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Villa Owner Name</label>
                    <input className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Villa Name</label>
                    <input className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Mobile Number</label>
                    <div className="flex">
                      <select className="border border-light rounded-l-lg px-3 bg-gray-50">
                        <option>+91</option><option>+1</option>
                      </select>
                      <input type="tel" className="border border-light border-l-0 rounded-r-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Number of Rooms</label>
                    <input type="number" className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Total Guests Capacity</label>
                    <input type="number" className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Property Type</label>
                    <select className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Select property type</option>
                      <option>Villa</option><option>Cottage</option><option>Apartment</option><option>Farmhouse</option><option>Bungalow</option>
                    </select>
                  </div>
                  <button className="w-full bg-primary hover:bg-accent text-white py-3 rounded-lg font-medium transition mt-4">
                    Continue 
                  </button>
                </div>
              </form>
            </div>

            <div className="hidden md:flex bg-gray-100 p-8 items-center justify-center">
              <div className="text-center max-w-sm">
                <svg className="mx-auto mb-4" width="64" height="64" viewBox="0 0 24 24" fill="none"><path d="M3 12l2-2 4 4 10-10 2 2L9 18 3 12z" stroke="#4FA3C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <h3 className="text-xl font-bold mb-2">Why List With Us?</h3>
                <p className="text-gray-600 mb-6">Join thousands of property owners who trust Manastays.com to showcase their properties to millions of travelers.</p>
                <div className="space-y-3 text-left">
                  {["Higher occupancy rates","Competitive pricing","24/7 support","Secure payments"].map((t,i)=>(
                    <div key={i} className="flex items-start">
                      <svg className="mr-2 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 12l2-2 4 4 10-10 2 2L9 18 3 12z" stroke="#4FA3C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
