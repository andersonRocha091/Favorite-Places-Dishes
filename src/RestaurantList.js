import React from "react";
import { Collection, CollectionItem, Row, Col } from "react-materialize";

const RestaurantList = ({ restaurants }) => {
  return (
    <Row>
      <Col m={8} s={12} l={12}>
        <Collection header="Restaurants">
          <RestaurantItens restaurants={restaurants} />
        </Collection>
      </Col>
    </Row>
  );
};
const RestaurantItens = ({ restaurants }) =>
  restaurants.length === 0 ? (
    <EmptyRestaurantItens />
  ) : (
    <SomeRestaurantItens restaurants={restaurants} />
  );
const EmptyRestaurantItens = () => (
  <CollectionItem style={{ color: "grey" }}>(none added yet)</CollectionItem>
);

const SomeRestaurantItens = ({ restaurants }) => (
  restaurants.map((restaurantName) => (
    <CollectionItem key={restaurantName}>
      {restaurantName}
    </CollectionItem>
  ))
);

export default RestaurantList;
