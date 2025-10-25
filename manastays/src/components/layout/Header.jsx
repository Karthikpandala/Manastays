// src/components/layout/Header.jsx  (only the <nav> links and View All button usage depend on this)
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, User, Menu } from "react-feather";
import Button from "../common/Button.jsx";
import AuthModal from "../common/AuthModal.jsx";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-2xl font-bold text-primary">Manastays.com</Link>
            <span className="text-xs text-gray-500 hidden md:block">Find Your Perfect Escape</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <Link to="/exclusive" className="font-medium hover:text-primary transition">EXCLUSIVE</Link>
            <Link to="/explore" className="font-medium hover:text-primary transition">EXPLORE</Link>
            <Link to="/list" className="font-medium hover:text-primary transition">List Your Property</Link>
          </nav>

          <div className="flex items-center gap-4">
            <a href="/#contact" className="hidden md:flex items-center gap-1 text-gray-700 hover:text-primary transition">
              <Phone size={18} /><span>+91 8367262873</span>
            </a>
            <Button onClick={() => setAuthOpen(true)} className="p-2 rounded-full hover:bg-gray-100"><User size={18} /></Button>
            <button className="md:hidden" onClick={() => setMobileOpen(v=>!v)}><Menu /></button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white py-2 px-4 shadow-lg">
            <div className="flex flex-col gap-3">
              <Link to="/exclusive" className="font-medium hover:text-primary transition">EXCLUSIVE</Link>
              <Link to="/explore" className="font-medium hover:text-primary transition">EXPLORE</Link>
              <Link to="/list" className="font-medium hover:text-primary transition">List Your Property</Link>
              <a href="/#contact" className="font-medium flex items-center gap-2 hover:text-primary transition">
                <Phone size={16} /><span>+91 8367262873</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
