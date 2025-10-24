import React from "react";
import { Home, Users, Headphones, DollarSign, Shield, TrendingUp } from "react-feather";
import SectionTitle from "../common/SectionTitle.jsx";
import { whyListWithUs } from "../../data/features.js";

const ICONS = { home: Home, users: Users, headphones: Headphones, "dollar-sign": DollarSign, shield: Shield, "trending-up": TrendingUp };

export default function WhyChooseUsGrid() {
  return (
    <section className="py-16 bg-light/30">
      <div className="container px-4">
        <SectionTitle center title="Why Choose Manastays.com?" subtitle="Trusted by property owners and travelers alike" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyListWithUs.map((f,i)=>{
            const Icon = ICONS[f.icon];
            return (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
