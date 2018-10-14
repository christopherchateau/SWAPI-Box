import React from "react";
import { shallow, mount } from "enzyme";
import CardContainer from "./index";

describe("CardContainer", () => {
  it("Renders like snapshot", () => {
    const wrapper = shallow(
      <CardContainer
        cardData={[]}
        handleCardClick={jest.fn()}
        selectedCategory={"planets"}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("Should render message stating no category has been selected", () => {
    const wrapper = shallow(
    <CardContainer
      cardData={[]}
      handleCardClick={jest.fn()}
      selectedCategory={"initial"}
    />
  );
    const message = wrapper.find(".emptyContainerMessage");
    expect(message.text()).toBe("$ select a category, you must $");
  });
  it("Should render message stating there are no given favorites", () => {
    const wrapper = shallow(
    <CardContainer
      cardData={[]}
      handleCardClick={jest.fn()}
      selectedCategory={"planets"}
    />
  );
    const message = wrapper.find(".emptyContainerMessage");
    expect(message.text()).toBe("These are not the cards you are looking for!");
  });

  it("Should not render a message when cards are given", () => {
    const wrapper = shallow(
    <CardContainer
      cardData={[{
        name: 'Luke Skywalker',
        species: 'Human',
        language: 'Galactic Basic',
        population: 200000}]}
      handleCardClick={jest.fn()}
      selectedCategory={"planets"}
    />
    );
    const message = wrapper.find(".emptyContainerMessage");
    expect(message.length).toBe(0);
  });

  it("Should render cards when data is given", () => {
    const wrapper = shallow(
    <CardContainer
      cardData={[{
        name: 'Luke Skywalker',
        species: 'Human',
        language: 'Galactic Basic',
        population: 200000}]}
      handleCardClick={jest.fn()}
      selectedCategory={"planets"}
    />
    );
    const message = wrapper.find("Card");
    expect(message.length).toBe(1);
  });
});
