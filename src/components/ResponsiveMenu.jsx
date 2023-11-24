import React, { useState } from 'react';
// Replace with your logo's path

const ResponsiveMenu = () => {
  const [isFavoriteOpen, setFavoriteOpen] = useState(false);
  const [isSubjectsOpen, setSubjectsOpen] = useState(false);

  const toggleFavorite = () => setFavoriteOpen(!isFavoriteOpen);
  const toggleSubjects = () => setSubjectsOpen(!isSubjectsOpen);

  return (
    <div className="flex flex-col h-screen bg-gray-100 shadow-lg">
      <div className="p-4">

      </div>
      <div className="flex flex-col flex-grow">
        <a href="#" className="p-4 hover:bg-gray-200">Home</a>
        
        <div className="p-4 hover:bg-gray-200">
          <button onClick={toggleFavorite}>Favorite</button>
          {isFavoriteOpen && (
            <div className="flex flex-col pl-4">
              {/* Map your favorite items here */}
              <a href="#">Favorite Item 1</a>
              <a href="#">Favorite Item 2</a>
            </div>
          )}
        </div>

        <div className="p-4 hover:bg-gray-200">
          <button onClick={toggleSubjects}>Subjects</button>
          {isSubjectsOpen && (
            <div className="flex flex-col pl-4">
              {/* Map your subjects here */}
              <a href="#">Subject 1</a>
              <a href="#">Subject 2</a>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 text-center">
        <span>Your Name</span>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
