import React from "react";
import { shallow, mount } from "enzyme";
import CardContainer from "./index";

describe("CardContainer", () => {
  it("Renders like snapshot", () => {
    const wrapper = shallow(
      <CardContainer cardData={[]} handleCardClick={jest.fn()} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
