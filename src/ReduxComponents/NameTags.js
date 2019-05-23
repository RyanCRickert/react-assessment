import React from 'react';
import { connect } from "react-redux";

import NameTag from "./NameTag";

export const NameTags = props => {
  return (
    <div className="Name-tag_holder">
    {props.names && props.names.split("\n").map((name, index) => {
      if(name.trim().length > 0) {
        return(
          <NameTag name={name} language={props.language} key={index} />
        )
      }
    })}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    names: state.names.names,
    language: state.options.greeting
  };
}

export default connect(mapStateToProps)(NameTags);