import React, { useState } from 'react';

const MCQFlashcard = ({ question, options, correctAnswer, explanation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === correctAnswer) {
      setFeedback('correct');
      setTimeout(() => setFeedback(null), 2000); // Display success animation for 2 seconds
    } else {
      setFeedback('incorrect');
      setTimeout(() => {
        setFeedback(null);
        setIsFlipped(true); // Flip after showing failure animation
      }, 2000); // Display failure animation for 2 seconds
    }
  };

  const handleTap = () => {
    if (isFlipped || feedback === 'incorrect') {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className="w-80 h-56 m-auto perspective" onClick={handleTap}>
      <div className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style preserve-3d shadow-lg rounded-lg ${isFlipped ? 'rotate-y-180' : ''}`}>
        {!isFlipped ? (
          <div className="absolute w-full h-full bg-blue-500 text-white flex flex-col justify-center font-bold text-lg rounded-lg p-4">
            <div className="overflow-y-auto mb-4 p-2" style={{ maxHeight: '50%' }}>
              {question}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {options.map((option, index) => (
                <button
                  key={index}
                  className={`bg-white text-black p-2 rounded ${selectedOption === option ? 'bg-green-300' : 'hover:bg-gray-200'}`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {String.fromCharCode(97 + index)}. {option}
                </button>
              ))}
            </div>
            {feedback && <p className={`text-2xl mt-2 ${feedback === 'correct' ? 'animate-bounce text-green-400' : 'text-red-400'}`}>{feedback === 'correct' ? '🎉 Correct!' : '❌ Incorrect'}</p>}
          </div>
        ) : (
          <div className="absolute w-full h-full bg-green-500 text-white flex flex-col items-center justify-center font-bold text-lg rotate-y-180 rounded-lg p-4">
            <p>Answer: {correctAnswer}</p>
            <p>{explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MCQFlashcard;
