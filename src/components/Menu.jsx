import React, { useState } from 'react';

const Menu = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [subjectsExpanded, setSubjectsExpanded] = useState(false);
  const [favoritesExpanded, setFavoritesExpanded] = useState(false);
  const [showMoreSubjects, setShowMoreSubjects] = useState(false);
  const [showMoreFavorites, setShowMoreFavorites] = useState(false);
  const [expandedTopic, setExpandedTopic] = useState(null);

  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  // Placeholder data
  const subjects = new Array(20).fill(null).map((_, index) => ({
    topic: `Subject ${index + 1}`,
    subtopics: ['Subtopic 1', 'Subtopic 2', 'Subtopic 3'],
  }));
  const favorites = new Array(10).fill(null).map((_, index) => `Favorite Topic ${index + 1}`);

  const handleTopicClick = (topic) => {
    if (expandedTopic === topic) {
      setExpandedTopic(null);
    } else {
      setExpandedTopic(topic);
    }
  };

  return (
    <div className={`menu ${menuExpanded ? 'w-64' : 'w-16'} bg-gray-800 text-white h-screen`}>
      <div className={`menu-toggle ${menuExpanded ? 'hidden' : ''} cursor-pointer p-2`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="logo py-4 text-center">
        {/* Placeholder for logo */}
        <img src="logo-placeholder.png" alt="Logo" className="mx-auto w-10 h-10 rounded-full" />
      </div>
      <div className="favorites">
        <div className="header cursor-pointer px-4 py-2" onClick={() => setFavoritesExpanded(!favoritesExpanded)}>
          Favorites
        </div>
        {favoritesExpanded && (
          <div className="topics">
            {favorites.map((fav, favIndex) => (
              <div
                key={favIndex}
                className={`topic cursor-pointer p-2 ${expandedTopic === fav ? 'bg-gray-700' : ''}`}
                onClick={() => handleTopicClick(fav)}
              >
                {fav}
                {expandedTopic === fav && (
                  <div className="subtopics pl-4">
                    <div>Subtopic 1</div>
                    <div>Subtopic 2</div>
                    <div>Subtopic 3</div>
                  </div>
                )}
              </div>
            ))}
            <button
              className="text-white p-2 w-full text-left"
              onClick={() => setShowMoreFavorites(!showMoreFavorites)}
            >
              {showMoreFavorites ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
      <div className="subjects">
        <div className="header cursor-pointer px-4 py-2" onClick={() => setSubjectsExpanded(!subjectsExpanded)}>
          Subjects
        </div>
        {subjectsExpanded && (
          <div className="topics">
            {subjects.map((subject, subjIndex) => (
              <div key={subjIndex}>
                <div
                  className={`topic cursor-pointer p-2 ${expandedTopic === subject.topic ? 'bg-gray-700' : ''}`}
                  onClick={() => handleTopicClick(subject.topic)}
                >
                  {subject.topic}
                  {expandedTopic === subject.topic && (
                    <div className="subtopics pl-4">
                      {subject.subtopics.map((subtopic, subIndex) => (
                        <div key={subIndex}>{subtopic}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <button
              className="text-white p-2 w-full text-left"
              onClick={() => setShowMoreSubjects(!showMoreSubjects)}
            >
              {showMoreSubjects ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
