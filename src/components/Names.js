import React from 'react';
import { AppConsumer } from "./AppProvider";

export default class Names extends React.Component {
  render() {
    return (
      <AppConsumer>
        {(context) => (
          <textarea
          onChange={context.onChangeText}
          value={context.state.names}
          className="App-name_input"
          />
        )}
    </AppConsumer>
    );
  }
}