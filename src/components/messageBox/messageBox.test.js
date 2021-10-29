import React from "react";
import { shallow } from "enzyme";
import MessageBox from "./messageBox";

describe("MessageBox", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MessageBox />);
    expect(wrapper).toMatchSnapshot();
  });
});
