import React, { useState } from 'react';

const RestaurantForm = ({ onSave }) => {
  const [inputText, setInputText] = useState("");

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleTextChange}
        data-test="newRestaurantName"
      />
      <button
        data-test="saveNewRestaurantButton"
        onClick={() => onSave(inputText)}
      >
        Add
      </button>
    </div>
  );
};

export default RestaurantForm;
