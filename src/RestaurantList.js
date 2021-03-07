import React from "react";
import { Collection, CollectionItem, Row, Col } from "react-materialize";

const RestaurantList = ({ restaurants }) => {
  return (
    <Row>
      <Col m={6} s={12}>
        <Collection header="Restaurants">
          {restaurants.length === 0 ? (
            <CollectionItem>(none added yet)</CollectionItem>
          ) : (
            restaurants.map((restaurantName) => (
              <CollectionItem key={restaurantName}>
                {restaurantName}
              </CollectionItem>
            ))
          )}
        </Collection>
      </Col>
    </Row>
  );
};

export default RestaurantList;
