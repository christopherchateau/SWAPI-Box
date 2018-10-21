import React from "react";
import { shallow } from "enzyme";
import Favorite from "./index";

describe("Favorite", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Favorite
        toggleFavorites={jest.fn()}
        favoritesCount={0}
        selectedCategory={"planets"}
      />
    );
  });

  it("Renders like snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
