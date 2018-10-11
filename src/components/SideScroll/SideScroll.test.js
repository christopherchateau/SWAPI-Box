import React from "react";
import SideScroll from "./index";
import { shallow } from "enzyme";

describe("SideScroll", () => {
  const exampleData = {
    title: 'A New Hope',
    opening_crawl: 'Opening crawl text here',
    release_date: '1977-05-25'
  };
  const wrapper = shallow(<SideScroll episodeData={exampleData}/>)

  it("Should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
