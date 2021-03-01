import React, { useState } from "react";

import RestaurantForm from "./RestaurantForm";
import RestaurantList from "./RestaurantList";

const RestaurantPage = () => {
  const [restaurantsNames, setRestaurantsNames] = useState([]);
  const handleAddNewRestaurant = (newRestaurant) => {
    let restaurantsNew = [newRestaurant, ...restaurantsNames];
    setRestaurantsNames(restaurantsNew);
  };
  return (
    <div>
      <button data-test="addRestaurantButton">Add Restaurant</button>
      <RestaurantForm onSave={handleAddNewRestaurant} />
      <RestaurantList restaurants={restaurantsNames} />
    </div>
  );
};

export default RestaurantPage;
