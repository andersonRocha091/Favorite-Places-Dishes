import React, { useState } from 'react';
import { Button, TextInput } from "react-materialize";
const RestaurantForm = ({ onSave }) => {
  const [inputText, setInputText] = useState("");

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };
  return (
    <div>
      <TextInput
        label="Restaurant Name"
        type="text"
        value={inputText}
        onChange={handleTextChange}
        data-test="newRestaurantName"
      />
      <Button
        data-test="saveNewRestaurantButton"
        onClick={() => onSave(inputText)}
      >
        Add
      </Button>
    </div>
  );
};

export default RestaurantForm;
