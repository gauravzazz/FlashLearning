import React, { useState } from 'react';

const Flashcard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-64 h-40 m-auto perspective" onClick={flipCard}>
      <div className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style preserve-3d shadow-lg rounded-lg ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 text-white flex items-center justify-center font-bold text-lg rounded-lg">
          {frontContent}
        </div>
        <div className="absolute w-full h-full bg-gradient-to-r from-red-400 to-red-600 text-white flex items-center justify-center font-bold text-lg rotate-y-180 rounded-lg">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
