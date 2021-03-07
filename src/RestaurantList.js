import React from 'react';
import { Collection, CollectionItem, Row, Col } from "react-materialize";

const RestaurantList = ({ restaurants }) => {
  return (
    <Row>
      <Col m={6} s={12}>
        <Collection>
          {restaurants.map((restaurantName) => (
            <CollectionItem key={restaurantName}>{restaurantName}</CollectionItem>
          ))}
        </Collection>
      </Col>
    </Row>
  );
};

export default RestaurantList;
