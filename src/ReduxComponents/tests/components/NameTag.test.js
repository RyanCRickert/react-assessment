import React from "react";
import { shallow } from "enzyme";
import { NameTag } from "../../NameTag";
import names from "../fixtures/names";

test("should render NameTag with a name", () => {
  const wrapper = shallow(<NameTag {...names[0]} />)
  expect(wrapper).toMatchSnapshot();
});