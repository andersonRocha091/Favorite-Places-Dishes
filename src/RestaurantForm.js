import React, { useState } from 'react';
import { Button, TextInput, Row } from "react-materialize";
const RestaurantForm = ({ onSave }) => {
  const [inputText, setInputText] = useState("");

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };
  return (
    <Row>
      <TextInput
        s={12}
        m={8}
        l={10}
        label="Restaurant Name"
        type="text"
        value={inputText}
        onChange={handleTextChange}
        data-test="newRestaurantName"
      />
      <Button
        s={12}
        m={4}
        l={2}
        data-test="saveNewRestaurantButton"
        onClick={() => onSave(inputText)}
      >
        Add
      </Button>
    </Row>
  );
};

export default RestaurantForm;
