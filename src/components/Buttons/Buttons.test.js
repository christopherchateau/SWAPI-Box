import React from "react";
import Buttons from "./index";
import { shallow } from "enzyme";

describe("Buttons", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Buttons updateData={jest.fn()} selectedCategory={"planets"} />
    );
  });

  it("Renders like snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
