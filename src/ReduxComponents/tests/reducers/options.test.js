import optionsReducer from "../../reducers/options";

test("should set language", () => {
  const action = {
    type: "SET_LANGUAGE",
    language: "French"
  }

  const state = optionsReducer({}, action);
  expect(state).toEqual({ language: "French", greeting: "Bonjour" });
});