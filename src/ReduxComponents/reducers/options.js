const optionsReducerDefaultState = {
  language: "English",
  greeting: "Hello"
}

const determineLanguage = (language) => {
  switch(language) {
    case "English":
      return "Hello";
    case "Spanish":
      return "Hola";
    case "French":
      return "Bonjour";
    case "German":
      return "Hallo";
    case "Korean":
      return "여보세요";
    default:
      return "Hello";
  }
}

export default (state = optionsReducerDefaultState, action ) => {
  switch (action.type) {
    case "SET_LANGUAGE" :
      return {
        ...state,
        language: action.language,
        greeting: determineLanguage(action.language)
      }
    default :
      return state;
  }
}