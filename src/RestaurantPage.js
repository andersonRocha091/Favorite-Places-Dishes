import React, { useState } from "react";

import RestaurantForm from "./RestaurantForm";
import RestaurantList from "./RestaurantList";

const RestaurantPage = () => {
  const [restaurantsNames, setRestaurantsNames] = useState([]);
  const [showRestaurantForm, setShowRestaurantForm] = useState(false);
  const handleAddNewRestaurant = (newRestaurant) => {
    let restaurantsNew = [newRestaurant, ...restaurantsNames];
    setRestaurantsNames(restaurantsNew);
    setShowRestaurantForm(false);
  };
  const handleShowNewRestaurantForm = () => {
    setShowRestaurantForm(true);
  };
  return (
    <div>
      <button
        data-test="addRestaurantButton"
        onClick={handleShowNewRestaurantForm}
      >
        Add Restaurant
      </button>
      {showRestaurantForm ? (
        <RestaurantForm onSave={handleAddNewRestaurant} />
      ) : null}
      <RestaurantList restaurants={restaurantsNames} />
    </div>
  );
};

export default RestaurantPage;
