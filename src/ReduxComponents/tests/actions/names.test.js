import { changeNames } from "../../actions/names";

test("should change name text", () => {
  const action = changeNames("Bobby");

  expect(action).toEqual({
    type: "SET_NAMES",
    names: "Bobby"
  });
});