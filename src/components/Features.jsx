import React from "react";
import { useState, useMemo } from "react";
export function Features() {
  const features = useMemo(
    () => [
      { title: "Fast Performance", desc: "Lightning-fast loading times" },
      { title: "Secure", desc: "Enterprise-grade security" },
      { title: "Reliable", desc: "99.9% uptime guarantee" },
    ],
    []
  );
  return (
    <section id="features" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
