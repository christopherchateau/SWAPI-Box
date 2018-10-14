import React from "react";
import { shallow, mount } from "enzyme";
import Card from "./index";

describe("Card", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card
        handleCardClick={jest.fn()}
        cardData={{name: 'Yoda', favorited: false}}
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

  it.skip("Should call handleCardClick from props when handleClick is called", async () => {
    await wrapper.instance().handleClick();
  });

  it.skip("Should run handleClick when button is clicked", async () => {
    const button = wrapper.find(".favoriteIcon");
    button.simulate("click");
  });
});
