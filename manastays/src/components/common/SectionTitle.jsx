import React from "react";
export default function SectionTitle({ title, subtitle, center=false, className="" }) {
  return (
    <div className={["mb-8", center ? "text-center" : "", className].join(" ")}>
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
