import React from "react";
import { shallow } from "enzyme";
import RoomList from "./roomList";

describe("RoomList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RoomList />);
    expect(wrapper).toMatchSnapshot();
  });
});
