import React from "react";
import { shallow, mount } from "enzyme";
import Card from "./index";

describe("Card", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card
        handleCardClick={jest.fn()}
        cardData={''}
      />
    );
  });

  it("Renders like snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});