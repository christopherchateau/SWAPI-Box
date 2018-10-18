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
    />
  );

  it("Renders like snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
