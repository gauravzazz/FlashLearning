import React, { useState } from 'react';

const QuestionEntryPage = () => {
  const [questionType, setQuestionType] = useState('flashcard');
  const [topic, setTopic] = useState('');
  const [subtopic, setSubtopic] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctOption, setCorrectOption] = useState(0);

  const handleOptionChange = (value, index) => {
    setOptions(options.map((opt, i) => i === index ? value : opt));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const questionData = questionType === 'flashcard' ? 
      {
        type: questionType,
        topic,
        subtopic,
        question,
        answer
      } : 
      {
        type: questionType,
        topic,
        subtopic,
        question,
        options,
        correctAnswer: options[correctOption]
      };

    console.log('Form Submission:', JSON.stringify(questionData, null, 2));
    // Replace console.log with your API call or state update logic
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Topic:</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Subtopic:</label>
          <input
            type="text"
            value={subtopic}
            onChange={(e) => setSubtopic(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Question Type:</label>
          <select
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
          >
            <option value="flashcard">Flashcard</option>
            <option value="mcq">MCQ</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Question:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {questionType === 'flashcard' ? (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Answer:</label>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        ) : (
          <>
            <div className="mb-4">
              {options.map((option, index) => (
                <div key={index} className="mb-2">
                  <label className="block text-gray-700 text-sm font-bold mb-1">Option {index + 1}:</label>
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(e.target.value, index)}
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              ))}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Correct Option:</label>
              <select
                value={correctOption}
                onChange={(e) => setCorrectOption(parseInt(e.target.value, 10))}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {options.map((_, index) => (
                  <option key={index} value={index}>{index + 1}</option>
                ))}
              </select>
            </div>
          </>
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Question
        </button>
      </form>
    </div>
  );
};

export default QuestionEntryPage;
