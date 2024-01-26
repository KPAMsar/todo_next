import React, { useState } from "react";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Toggle Dropdown
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleItemClick(item.id)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
