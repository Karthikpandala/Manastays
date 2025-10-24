import React from "react";

export default function ListHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 hero-image-list">
      <div className="absolute inset-0 bg-gradient-to-br from-[#C2E6F5]/90 to-white/90"></div>
      <div className="container px-4 relative z-10">
        <div className="max-w-xl">
          <div className="bg-white/90 inline-block px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-medium"> Diwali Offer</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">List Your Property & Earn More</h1>
          <p className="text-lg mb-6">Join thousands of hosts who are earning with Manastays.com</p>
        </div>
      </div>
    </section>
  );
}
