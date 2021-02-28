import React, { useState } from "react";

import RestaurantForm from "./RestaurantForm";

const RestaurantList = () => {
  const [restaurantsNames, setRestaurantsNames] = useState([]);
  const handleAddNewRestaurant = (newRestaurant) => {
    let restaurantsNew = [newRestaurant, ...restaurantsNames];
    setRestaurantsNames(restaurantsNew);
  };
  return (
    <div>
      <button data-test="addRestaurantButton">Add Restaurant</button>
      <RestaurantForm onSave={handleAddNewRestaurant}/>
    </div>
  );
};

export default RestaurantList;
