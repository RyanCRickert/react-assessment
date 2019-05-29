import React from "react";
import { shallow } from "enzyme";
import { NameTags } from "../../NameTags";
import names from "../fixtures/names";

test("should render NameTags with names", () => {
  const wrapper = shallow(<NameTags names={names} />)
  expect(wrapper).toMatchSnapshot();
});