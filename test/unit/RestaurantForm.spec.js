import React from "react";
import { shallow } from "enzyme";
import { expect } from 'chai';
import * as spies from "chai-spies";
import { spy } from "sinon";

import RestaurantForm from "../../src/RestaurantForm";

describe('NewRestaurantForm', () => {
  describe('clicking in save button', () => {
    it('calls the onSave handler', () => {
      const saveHandler = spy();

      const wrapper = shallow(<RestaurantForm onSave={saveHandler} />);
      wrapper
        .find('[data-test="newRestaurantName"]')
        .simulate("change", { target: { value: "Sushi Place" } });
      wrapper.find('[data-test="saveNewRestaurantButton"]').simulate('click');

      expect(saveHandler.calledOnce).to.be.true;
      expect(saveHandler.firstCall.args[0]).to.equal("Sushi Place");
    });
  });
});

