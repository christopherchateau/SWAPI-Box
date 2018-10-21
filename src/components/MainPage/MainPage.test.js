import React from "react";
import MainPage from "./index";
import { shallow } from "enzyme";

describe("MainPage", () => {
  let wrapper = (
    <MainPage
      cardData={[]}
      appFunctionBundle={{}}
      favoritesCount={0}
      selectedCategory={"planets"}
      toggleFavorites={jest.fn()}
      updateData={jest.fn()}
      handleCardClick={jest.fn()}
    />
  );

  it("Renders like snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
