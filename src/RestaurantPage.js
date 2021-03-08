import React, { useState } from "react";
import { Button, Row, Col, Modal } from "react-materialize";
import RestaurantForm from "./RestaurantForm";
import RestaurantList from "./RestaurantList";

const RestaurantPage = () => {
  const [restaurantsNames, setRestaurantsNames] = useState([]);
  const handleAddNewRestaurant = (newRestaurant) => {
    let restaurantsNew = [newRestaurant, ...restaurantsNames];
    setRestaurantsNames(restaurantsNew);
  };

  return (
    <Row>
      <Modal
        header="New Restaurant"
        trigger={
          <Button
            data-test="addRestaurantButton"
          >
            Add Restaurant
          </Button>
        }
      >
        <RestaurantForm onSave={handleAddNewRestaurant} />
      </Modal>
      <Row>
        <RestaurantList restaurants={restaurantsNames} />
      </Row>
    </Row>
  );
};

export default RestaurantPage;
