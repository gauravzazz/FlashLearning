import React, { useState } from 'react';

const Flashcard = ({ frontContent, backContent, cardColor }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-80 h-56 m-auto perspective" onClick={flipCard}>
      <div className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style preserve-3d shadow-lg rounded-lg ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className={`absolute w-full h-full flex items-center justify-center font-bold text-lg rounded-lg text-center p-4 ${cardColor.front}`}>
          {frontContent}
        </div>
        <div className={`absolute w-full h-full flex items-center justify-center font-bold text-lg rotate-y-180 rounded-lg text-center p-4 ${cardColor.back}`}>
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
