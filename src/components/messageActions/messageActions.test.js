import React from "react";
import { shallow } from "enzyme";
import MessageActions from "./messageActions";

describe("MessageActions", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MessageActions />);
    expect(wrapper).toMatchSnapshot();
  });
});
