import React from "react";
import { shallow, mount } from "enzyme";
import Card from "./index";

describe("Card", () => {
  it("Renders like snapshot", () => {
    const wrapper = shallow(
      <Card
        // key={Math.random() + index}
        handleCardClick={jest.fn()}
        cardData={''}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
