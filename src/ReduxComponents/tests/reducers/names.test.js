import namesReducer from "../../reducers/names";

test("should set name", () => {
  const action = {
    type: "SET_NAMES",
    names: "Example"
  }

  const state = namesReducer({}, action);
  expect(state).toEqual({ names: "Example"})
});