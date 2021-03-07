import React from "react";
import { Collection, CollectionItem, Row, Col } from "react-materialize";

const RestaurantList = ({ restaurants }) => {
  return (
    <Row>
      <Col m={8} s={12} l={12}>
        <Collection header="Restaurants">
          {restaurants.length === 0 ? (
            <CollectionItem style={{ color: "grey" }}>
              (none added yet)
            </CollectionItem>
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
