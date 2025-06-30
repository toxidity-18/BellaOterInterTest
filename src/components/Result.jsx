// import React from 'react';
// import { motion } from 'framer-motion';

// const containerStyles = {
//   Grounding: "bg-stone-100",
//   Softness: "bg-pink-50",
//   Energy: "bg-orange-50",
//   Freedom: "bg-sky-50",
// };

// const Result = ({ choice, data, onReset }) => {
//   const item = data[choice];
//   const style = containerStyles[choice] || "bg-white";

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className={`w-full min-h-screen box-border overflow-hidden ${style} flex flex-col md:flex-row`}
//       aria-live="polite"
//     >
//       {/* Image Section */}
//       <motion.div
//         initial={{ x: -40, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="md:w-1/2 w-full h-64 md:h-full"
//       >
//         <img
//           src={item.image}
//           alt={item.product}
//           loading="lazy"
//           className="w-full h-full object-cover"
//         />
//       </motion.div>

//       {/* Info Section */}
//       <motion.div
//         initial={{ x: 40, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.6 }}
//         className="md:w-1/2 w-full h-auto md:h-full px-6 py-12 flex flex-col justify-center"
//       >
//         <h2 className="text-3xl font-playfair text-stone-800 mb-2">
//           {item.archetype}
//         </h2>
//         <p className="italic text-stone-600 mb-3 font-inter text-xl">
//           {item.product}
//         </p>
//         <p className="text-base text-stone-700 mb-4 font-inter">
//           {item.description}
//         </p>
//         <span className="text-xs text-rose-600 font-medium tracking-wide bg-rose-100 px-3 py-1 rounded-full w-max">
//           {item.fabric}
//         </span>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={onReset}
//           className="mt-8 px-6 py-2 text-sm bg-white text-stone-800 border border-stone-300 rounded-xl hover:bg-rose-100 transition w-max"
//         >
//           Start Over
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Result;

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
