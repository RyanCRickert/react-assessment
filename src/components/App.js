import React from 'react';
import { AppProvider } from "./AppProvider";
import LanguageSelector from "./LanguageSelector";
import NameTags from "./NameTags";
import Names from "./Names";

class App extends React.Component {
  render() {
    return(
      <AppProvider>
        <div className="App">
          <div>
            <Names />
            <LanguageSelector />
            <NameTags />
          </div>
        </div>
      </AppProvider>
    )
  }
}

export default App;