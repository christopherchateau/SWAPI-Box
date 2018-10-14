import React from "react";
import { shallow, mount } from "enzyme";
import CardContainer from "./index";

describe("CardContainer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CardContainer
        cardData={[]}
        handleCardClick={jest.fn()}
        selectedCategory={"planets"}
      />
    );
  });

  it("Renders like snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
