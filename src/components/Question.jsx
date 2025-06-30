
import React from "react";

export default function Question({ onSelect }) {
  const options = ["Grounding", "Softness", "Energy", "Freedom"];

  return (
    <div>
      <h1 className="text-2xl font-serif text-gray-800 mb-6">
        What does your body crave today?
      </h1>
      <div className="grid gap-3">
        {options.map((mood) => (
          <button
            key={mood}
            onClick={() => onSelect(mood)}
            className="bg-white rounded-xl py-3 px-4 shadow hover:bg-pink-100 transition"
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
}
