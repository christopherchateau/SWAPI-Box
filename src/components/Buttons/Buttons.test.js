import React from "react";
import Buttons from "./index";
import { shallow } from "enzyme";

describe("Buttons", () => {

  describe("Rendering", () => {

    it("Renders like snapshot", () => {
      let wrapper = shallow(
        <Buttons updateData={jest.fn()} selectedCategory={"planets"} />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
