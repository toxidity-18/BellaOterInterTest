

import React from "react";

const products = {
  Grounding: {
    archetype: "The Rooted One",
    name: "Earth Hug Bodysuit",
    description: "A deep, grounding layer for still days.",
    fabric: "Organic Bamboo Cotton",
    image: "https://i.pinimg.com/736x/83/94/91/839491c71757dc8249de87d197461b17.jpg",
  },
  Softness: {
    archetype: "The Tender Spirit",
    name: "Whisper Wrap Robe",
    description: "Light as air, soft as an embrace.",
    fabric: "TENCEL Soft",
    image: "https://i.pinimg.com/736x/e5/5b/a3/e55ba3f66afc2181f24b44eb0564ef7d.jpg",
  },
  Energy: {
    archetype: "The Vital Spark",
    name: "Ignite Bodysuit",
    description: "Empower your day with dynamic form.",
    fabric: "Cooling Mesh",
    image: "https://i.pinimg.com/736x/3a/fd/fc/3afdfc34c110c54421fd029cfa867d9f.jpg",
  },
  Freedom: {
    archetype: "The Unbound",
    name: "Skyflow Set",
    description: "Move freely with every breath.",
    fabric: "Lightweight Linen Blend",
    image: "https://i.pinimg.com/736x/7d/61/5c/7d615ca8b3f1fe5fd958be34065741a7.jpg",
  },
};

export default function Result({ mood, onReset }) {
  const product = products[mood];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-serif text-gray-700">{product.archetype}</h2>
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-xl shadow"
      />
      <p className="text-lg font-medium text-gray-800">{product.name}</p>
      <p className="text-gray-600">{product.description}</p>
      <span className="inline-block text-sm bg-pink-100 px-3 py-1 rounded-full">
        {product.fabric}
      </span>
      <div>
        <button
          onClick={onReset}
          className="mt-4 text-sm text-pink-600 underline hover:text-pink-800"
        >
          Start Over
        </button>
      </div>
    </div>
  );
}
