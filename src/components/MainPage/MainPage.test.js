import React from "react";
import MainPage from "./index";
import { shallow } from "enzyme";

describe("MainPage", () => {
  let wrapper = (
    <MainPage
      cardData={[]}
      updateData={jest.fn()}
      handleCardClick={jest.fn()}
      toggleFavorites={jest.fn()}
      favoritesCount={0}
      selectedCategory={"planets"}
    />
  );

  it("Renders like snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
