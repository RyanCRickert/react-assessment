import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { LanguageSelector } from "../../LanguageSelector";

let changeLanguage, wrapper;

beforeEach(() => {
  changeLanguage = jest.fn();
  wrapper =  shallow(
    <LanguageSelector
      changeLanguage={changeLanguage}
      />)
});

test("should render LanguageSelector", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle changing of language", () => {
  const value = "French";

  expect(toJSON(wrapper)).toMatchSnapshot();
  wrapper.find("select").simulate("change", {
    target: { value }
  });
  expect(changeLanguage).toHaveBeenCalled();
  expect(toJSON(wrapper)).toMatchSnapshot();
})