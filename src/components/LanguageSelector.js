import React from 'react';
import { AppConsumer } from "./AppProvider";

export default class LanguageSelector extends React.Component {
  render() {
    return (
      <AppConsumer>
        {(context) => (
          <div>
          <select
          className="App-language_selector"
          onChange={context.onChangeLanguage}
          value={context.state.language}
        >
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
          <option>Korean</option>
        </select>
        </div>
        )}
    </AppConsumer>
    );
  }
}