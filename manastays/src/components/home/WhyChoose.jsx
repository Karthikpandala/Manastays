import React from "react";
import { CheckCircle, Clock, Zap, Star, Home as HomeIcon, HelpCircle } from "react-feather";
import SectionTitle from "../common/SectionTitle.jsx";
import { whyChoose } from "../../data/features.js";

const ICONS = { "check-circle": CheckCircle, clock: Clock, zap: Zap, star: Star, home: HomeIcon, "help-circle": HelpCircle };

export default function WhyChoose() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <SectionTitle center title="Why Choose ManaStays" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChoose.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
