import React from "react";
import SideScroll from "./index";
import { shallow } from "enzyme";

describe("SideScroll", () => {
  let wrapper;
  const exampleData = {
    title: 'A New Hope',
    opening_crawl: 'Opening crawl text here',
    release_date: '1977-05-25'
  };

  beforeEach(() => {
    wrapper = shallow(<SideScroll episodeData={exampleData}/>);
  });

  it("Should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

});
