import React from "react";

import LanguageSelector from "./LanguageSelector";
import Names from "./Names";
import NameTags from "./NameTags";

const App = () => {
  return (
    <React.Fragment>
      <Names />
      <LanguageSelector />
      <NameTags />
    </React.Fragment>
  )
}

export default App;