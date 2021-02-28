import React from 'react';

import RestaurantForm from "./RestaurantForm";

const RestaurantList = () => {
  const handleAddNewRestaurant = () => {

  };
  return (
    <div>
      <button data-test="addRestaurantButton">Add Restaurant</button>
      <RestaurantForm onSave={handleAddNewRestaurant}/>
    </div>
  );
};

export default RestaurantList;
