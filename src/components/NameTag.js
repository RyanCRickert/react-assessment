import React from "react";

const NameTag = ({ name, language, color, changeColor }) => {
  return (
    <div onClick={changeColor} className="Name-tag_container">
      <div className={`Name-tag_greeting${color}`}>{language}</div>
      <div className="Name-tag_person">{name}</div>
      <div className={`Name-tag_bottom${color}`} />
    </div>
  )
}

export default NameTag;