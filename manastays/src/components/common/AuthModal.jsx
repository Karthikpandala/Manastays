import React, { useState } from "react";
import { X } from "react-feather";

export default function AuthModal({ open, onClose }) {
  const [tab, setTab] = useState("signup");
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl max-w-4xl w-full overflow-hidden flex">
        {/* Left image */}
        <div
          className="hidden md:block w-1/2 bg-cover bg-center relative"
          style={{ backgroundImage: "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url('http://static.photos/nature/640x360/5')" }}
        >
          <div className="absolute inset-0 flex items-end p-6 text-white">
            <div>
              <h3 className="text-xl font-bold mb-2">GET 10% OFF on your first booking!</h3>
              <p>Sign up & Get a Welcome Discount</p>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-end">
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700"><X /></button>
          </div>

          <div className="flex border-b mb-6">
            <button
              onClick={() => setTab("signup")}
              className={`py-2 px-4 font-medium ${tab==="signup" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setTab("signin")}
              className={`py-2 px-4 font-medium ${tab==="signin" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
            >
              Sign In
            </button>
          </div>

          {tab === "signup" ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">First Name</label>
                  <input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Last Name</label>
                  <input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Phone</label>
                <div className="flex">
                  <select className="p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>+91</option>
                  </select>
                  <input type="tel" className="w-full p-3 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Password</label>
                <input type="password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Confirm Password</label>
                <input type="password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-600">
                  I agree to the <a className="text-primary hover:underline" href="/privacy-policy">Privacy Policy</a> and
                  <a className="text-primary hover:underline" href="/refund-cancellation"> Terms</a>
                </span>
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg transition duration-300">Continue</button>
              <p className="text-center text-sm text-gray-600">
                Already registered? <button onClick={() => setTab("signin")} className="text-primary hover:underline">Login</button>
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Mobile or Email</label>
                <input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Password</label>
                <input type="password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <div className="flex justify-between items-center">
                <label className="flex items-center text-sm text-gray-600">
                  <input type="checkbox" className="mr-2" /> Remember me
                </label>
                <button className="text-sm text-primary hover:underline">Forgot password?</button>
              </div>
              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg transition duration-300">Continue</button>
              <p className="text-center text-sm text-gray-600">
                New user? <button onClick={() => setTab("signup")} className="text-primary hover:underline">Signup</button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
