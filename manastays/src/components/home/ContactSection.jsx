import React from "react";
import SectionTitle from "../common/SectionTitle.jsx";
import { Phone, Mail, MapPin, Clock } from "react-feather";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 container px-4">
      <div className="text-center mb-12">
        <SectionTitle center title="Get In Touch" subtitle="Ready to book your dream villa? Our team is here to help you find the perfect getaway. Reach out to us and let’s make your vacation dreams come true." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: Phone, title: "Call Us", line1:"+91 8367262873", sub:"Available 24/7 for your queries", href:"tel:+918367262873" },
            { icon: Mail,  title: "Email Us", line1:"contact@manastays.com", sub:"Get a response within 2 hours", href:"mailto:contact@manastays.com" },
            { icon: MapPin,title: "Visit Us", line1:"Ibrahimpatanam, Ranga Reddy, Telangana (501506)", sub:"Our headquarters in Telangana" },
            { icon: Clock, title: "Business Hours", line1:"Mon–Sun: 9AM–9PM", sub:"Extended hours for your convenience" },
          ].map((c,i)=>(
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-3">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <c.icon className="text-primary" />
                </div>
                <h3 className="font-bold">{c.title}</h3>
              </div>
              {c.href ? <a href={c.href} className="text-primary hover:underline block mb-2">{c.line1}</a> : <p className="mb-2">{c.line1}</p>}
              <p className="text-sm text-gray-500">{c.sub}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="font-bold text-xl mb-6">Send us a message</h3>
          <form onSubmit={(e)=>e.preventDefault()}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Phone</label>
              <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
            </div>
            <button className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg transition duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
