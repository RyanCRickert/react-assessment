import React from 'react';
import { AppConsumer } from "./AppProvider";

import NameTag from "./NameTag";

export default class NameTags extends React.Component {
  render() {
    return (
      <AppConsumer>
        {(context) => (
          <div className="Name-tag_holder">
          {context.state.namesArray && context.state.namesArray.map((person, index) => {
            if(person.trim().length > 0) {
              return( <NameTag name={person} language={context.state.language} color={context.state.color} changeColor={context.changeColor} key={index} /> )
            }
          })}
          </div>
        )}
    </AppConsumer>
    );
  }
}