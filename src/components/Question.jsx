// import React from 'react';

// const FlowerIcon = () => (
//   <svg className="w-6 h-6 text-rose-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v2m6.364 1.636l-1.414 1.414M20 12h-2m-1.636 6.364l-1.414-1.414M12 20v-2m-6.364-1.636l1.414-1.414M4 12h2m1.636-6.364l1.414 1.414" />
//   </svg>
// );

// const Question = ({ onSelect, data }) => {
//   return (
//     <>
//       <FlowerIcon />
//       <h1 className="text-2xl font-playfair text-stone-800 mb-8">
//         What does your body crave today?
//       </h1>
//       <div className="grid gap-4">
//         {Object.keys(data).map((key) => (
//           <button
//             key={key}
//             onClick={() => onSelect(key)}
//             className="py-3 px-6 bg-white text-stone-700 border border-stone-300 rounded-2xl shadow-sm hover:bg-pink-50 transition duration-300 ease-in-out"
//           >
//             {key}
//           </button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Question;
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
