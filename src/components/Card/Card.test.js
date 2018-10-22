import React from "react";
import { shallow } from "enzyme";
import Card from "./index";

describe("Card", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card
        handleCardClick={jest.fn()}
        cardData={{
          name: "Yoda",
          species: "Yoda's Species",
          favorited: false
        }}
      />
    );
  });

  it("Renders like snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Favorited should toggle when handleClick is called", async () => {
    await wrapper.instance().handleClick();
    expect(wrapper.state().favorited).toBe(true);
  });

  it("Favorited should toggle when handleClick called twice", async () => {
    await wrapper.instance().handleClick();
    await wrapper.instance().handleClick();
    expect(wrapper.state().favorited).toBe(false);
  });

  it("Should trim long names down", () => {
    wrapper = shallow(
      <Card
        handleCardClick={jest.fn()}
        cardData={{
          name: "Yoda except a little longer",
          favorited: false
        }}
      />
    );
    const name = wrapper.find(".name");
    expect(name.text()).toBe("Yoda except a little...$");
  });

  it("Should render extra keys in cardData as li elements", () => {
    const li = wrapper.find("li");
    expect(li.text()).toBe("species: Yoda's Species");
  });
});
