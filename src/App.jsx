
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
