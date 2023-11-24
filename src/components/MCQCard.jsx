import React, { useState } from 'react';
import { motion } from 'framer-motion';

const answers = [
  { id: 'A', text: 'Option 1', isCorrect: false, explanation: 'Explanation for Option A' },
  { id: 'B', text: 'Option 2', isCorrect: true, explanation: 'Explanation for Option B' },
  { id: 'C', text: 'Option 3', isCorrect: false, explanation: 'Explanation for Option C' },
  { id: 'D', text: 'Option 4', isCorrect: false, explanation: 'Explanation for Option D' },
];

const MCQCard = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (!answer.isCorrect) {
      flipCard();
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-200 rounded-lg shadow-md bg-white">
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="perspective"
      >
        <div className={`w-full h-full ${flipped ? 'invisible' : 'visible'}`}>
          <h2 className="text-lg font-semibold mb-6">Q. This is an MCQ question with 4 options?</h2>
          <div className="grid grid-cols-2 gap-4">
            {answers.map((answer) => (
              <button
                key={answer.id}
                onClick={() => handleAnswerClick(answer)}
                className={`w-full p-4 text-left border-2 rounded-lg cursor-pointer ${
                  selectedAnswer?.id === answer.id
                    ? answer.isCorrect
                      ? 'border-green-500 bg-green-100'
                      : 'border-red-500 bg-red-100'
                    : 'border-gray-300'
                }`}
              >
                {answer.id}. {answer.text}
              </button>
            ))}
          </div>
        </div>
        {selectedAnswer && !selectedAnswer.isCorrect && flipped && (
          <motion.div
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            className={`w-full h-full absolute top-0`}
            style={{ transform: 'rotateY(180deg)' }} // Rotate the content back
          >
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Explanation</h3>
              <p className="mb-4">{selectedAnswer.explanation}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={flipCard}
              >
                Back to Question
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default MCQCard;
