import React, { useState } from "react";

const NameTag = ({ name, language }) => {
  const [color, updateColor] = useState(1);

  const changeColor = () => {
    if(color < 4 && color > 0) {
      updateColor(color + 1)
    } else (
      updateColor(1)
    )
  }

  return (
    <div onClick={changeColor} className="Name-tag_container">
      <div className={`Name-tag_greeting${color}`}>{language}</div>
      <div className="Name-tag_person">{name}</div>
      <div className={`Name-tag_bottom${color}`} />
    </div>
  )
}

export default NameTag;

