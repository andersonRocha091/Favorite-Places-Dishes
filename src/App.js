import React from "react";
import { Col, Row } from "react-materialize";

import RestaurantPage from "./RestaurantPage";

const App = () => {
  return (
    <Row>
      <Col s={12} m={10} l={8} offset="m1 l2">
        <RestaurantPage />
      </Col>
    </Row>
  );
};

export default App;
