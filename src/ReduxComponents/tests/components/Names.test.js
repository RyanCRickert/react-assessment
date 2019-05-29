import React from "react";
import { shallow } from "enzyme";
import { Names } from "../../Names";
import names from "../fixtures/names";

test("should render Names", () => {
  const wrapper = shallow(<Names />)
  expect(wrapper).toMatchSnapshot();
});