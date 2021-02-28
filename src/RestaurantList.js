import React from 'react';

import RestaurantForm from "./RestaurantForm";

const RestaurantList = () => {
  return (
    <div>
      <button data-test="addRestaurantButton">Add Restaurant</button>
      <RestaurantForm />
    </div>
  );
};

export default RestaurantList;
