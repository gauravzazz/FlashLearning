import React from 'react';
import Flashcard from './FlashCard';
import MCQFlashcard from './MCQFlashcard';

const Timeline = ({ questions }) => {
  const colorClasses = ['bg-color-1', 'bg-color-2', 'bg-color-3', 'bg-color-4']; // Array of color classes

  return (
    <div className="timeline">
      {questions.map((question, index) => {
        const cardColor = {
          front: colorClasses[index % colorClasses.length], // Cycle through color classes
          back: colorClasses[(index + 1) % colorClasses.length] // Different color for the back
        };

        switch (question.type) {
          case 'flashcard':
            return (
              <Flashcard
                key={question.id}
                frontContent={question.frontContent}
                backContent={question.backContent}
                cardColor={cardColor}
              />
            );
          case 'mcq':
            return (
              <MCQFlashcard
                key={question.id}
                question={question.question}
                options={question.options}
                correctAnswer={question.correctAnswer}
                explanation={question.explanation}
                cardColor={cardColor}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Timeline;
