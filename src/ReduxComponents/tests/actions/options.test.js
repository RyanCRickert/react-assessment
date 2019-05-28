import { changeLanguage } from "../../actions/options";

test("should change name text", () => {
  const action = changeLanguage("Example");

  expect(action).toEqual({
    type: "SET_LANGUAGE",
    language: "Example"
  });
});