import React, { useState } from 'react';

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="inline-block">
      <button onClick={toggleDropdown} className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
        Menu
      </button>

      {isOpen && (
        <div className="flex flex-col mt-2">
          <SmallButton label="Button 1" />
          <SmallButton label="Button 2" />
          <SmallButton label="Button 3" />
          {/* Add more SmallButton components as needed */}
        </div>
      )}
    </div>
  );
};

const SmallButton = ({ label }) => (
  <button className="mt-1 px-3 py-1 border border-transparent text-xs font-medium rounded text-white bg-gray-500 hover:bg-gray-600 focus:outline-none transition duration-150 ease-in-out">
    {label}
  </button>
);

export default DropdownButton;
