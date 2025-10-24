import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from "react-feather";

export default function Footer({ dark=false }) {
  return (
    <footer className={`${dark ? "bg-dark" : "bg-gray-900"} text-white pt-12 pb-6`}>
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-primary transition">Home</a></li>
              <li><a href="/?page=explore" className="hover:text-primary transition">Explore</a></li>
              <li><a href="/?page=exclusive" className="hover:text-primary transition">Exclusive</a></li>
              <li><a href="/?page=list" className="hover:text-primary transition">List Your Property</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="/refund-cancellation" className="hover:text-primary transition">Refund & Cancellation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><Phone size={16} className="mr-2" /><a href="/#contact" className="hover:text-primary transition">+91 8367262873</a></li>
              <li className="flex items-center"><Mail size={16} className="mr-2" /><a href="mailto:contact@manastays.com" className="hover:text-primary transition">contact@manastays.com</a></li>
              <li className="flex items-center"><MapPin size={16} className="mr-2" /><span>Ibrahimpatanam, Telangana</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition"><Instagram /></a>
              <a href="#" className="hover:text-primary transition"><Facebook /></a>
              <a href="#" className="hover:text-primary transition"><Twitter /></a>
              <a href="#" className="hover:text-primary transition"><Linkedin /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p> {new Date().getFullYear()} Manastays.com — Find Your Perfect Escape</p>
        </div>
      </div>
    </footer>
  );
}
