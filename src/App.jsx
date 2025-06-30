// import React, { useState, useEffect } from 'react';
// import Question from './components/Question';
// import Result from './components/Result';
// import { AnimatePresence, motion } from 'framer-motion';

// const data = {
//    Grounding: {
//     archetype: 'The Rooted One',
//     product: 'Embrace Bodysuit',
//     description: 'Feel grounded and secure with this earthy piece.',
//     fabric: 'TENCEL Soft',
//     image: 'https://i.pinimg.com/736x/83/94/91/839491c71757dc8249de87d197461b17.jpg',
//   },
//   Softness: {
//     archetype: 'The Gentle Whisper',
//     product: 'Caress Wrap',
//     description: 'Wrap yourself in delicate, dreamy textures.',
//     fabric: 'Organic Cotton',
//     image: 'https://i.pinimg.com/736x/e5/5b/a3/e55ba3f66afc2181f24b44eb0564ef7d.jpg',
//   },
//   Energy: {
//     archetype: 'The Radiant Pulse',
//     product: 'Ignite Bodysuit',
//     description: 'Designed to spark movement and vitality.',
//     fabric: 'Cooling Mesh',
//     image: 'https://i.pinimg.com/736x/3a/fd/fc/3afdfc34c110c54421fd029cfa867d9f.jpg',
//   },
//   Freedom: {
//     archetype: 'The Unbound',
//     product: 'Flow Tunic',
//     description: 'Celebrate movement and boundless spirit.',
//     fabric: 'Bamboo Weave',
//     image: 'https://i.pinimg.com/736x/7d/61/5c/7d615ca8b3f1fe5fd958be34065741a7.jpg', 
//   },
// };

// function App() {
//   const [choice, setChoice] = useState(null);
//   const [welcomeBack, setWelcomeBack] = useState(false);
//   const [storedCraving, setStoredCraving] = useState(null);

//   useEffect(() => {
//     const lastChoice = localStorage.getItem('lastChoice');
//     if (lastChoice) {
//       setWelcomeBack(true);
//       setStoredCraving(lastChoice);
//     }
//   }, []);

//   const handleSelect = (option) => {
//     setChoice(option);
//     localStorage.setItem('lastChoice', option);
//   };

//   const handleReset = () => {
//     setChoice(null);
//   };

//   return (
//     <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4 font-inter">
//       <div className="max-w-md w-full text-center">
//         {welcomeBack && !choice && (
//           <p className="mb-4 text-sm text-stone-500 italic">
//             Welcome back! You last craved <span className="text-rose-600 font-semibold">{storedCraving}</span>.
//           </p>
//         )}
//         <AnimatePresence mode="wait">
//           {!choice ? (
//             <motion.div
//               key="question"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4 }}
//             >
//               <Question onSelect={handleSelect} data={data} />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="result"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4 }}
//             >
//               <Result choice={choice} data={data} onReset={handleReset} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Result from "./components/Result";

export default function App() {
  const [mood, setMood] = useState("");
  const [returningUser, setReturningUser] = useState(false);

  useEffect(() => {
    const savedMood = localStorage.getItem("mood");
    if (savedMood) {
      setMood(savedMood);
      setReturningUser(true);
    }
  }, []);

  const handleSelectMood = (selectedMood) => {
    setMood(selectedMood);
    localStorage.setItem("mood", selectedMood);
  };

  const handleReset = () => {
    setMood("");
    localStorage.removeItem("mood");
    setReturningUser(false);
  };

  return (
    <main className="min-h-screen bg-rose-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center font-light">
        {returningUser && mood && (
          <p className="text-sm text-gray-500 mb-4">Welcome back 🌸</p>
        )}
        {mood ? (
          <Result mood={mood} onReset={handleReset} />
        ) : (
          <Question onSelect={handleSelectMood} />
        )}
      </div>
    </main>
  );
}
