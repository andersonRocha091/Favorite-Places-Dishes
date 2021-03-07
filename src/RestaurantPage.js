import React, { useState } from "react";
import { Button, Row, Col } from "react-materialize";
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
    <Row>
      <Row>
        <Button
          data-test="addRestaurantButton"
          onClick={handleShowNewRestaurantForm}
        >
          Add Restaurant
        </Button>
      </Row>
      <Row>
        {showRestaurantForm ? (
          <RestaurantForm onSave={handleAddNewRestaurant} />
        ) : null}
      </Row>
      <Row>
        <RestaurantList restaurants={restaurantsNames} />
      </Row>
    </Row>
  );
};

export default RestaurantPage;
