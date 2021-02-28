import React from 'react';

const RestaurantForm = () => {
  return (
    <div>
      <input type="text" data-test="newRestaurantName" />
      <button data-test="saveNewRestaurantButton">Add</button>
    </div>
  );
};

export default RestaurantForm;
