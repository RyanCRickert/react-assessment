import React from 'react';
import { connect } from "react-redux";
import { changeLanguage } from "./actions/options";
import { changeNames } from "./actions/names";

export const LanguageSelector = props => {
  const onLanguageChange = (e) => {
    props.changeLanguage(e.target.value);
  }

  const generateNames = () => {
    const namesArray = [];
    fetch("https://uinames.com/api/?amount=8&region=united+states")
      .then(res => {
        return res.json()
      })
      .then(data => {
        data.forEach(entry => {
          namesArray.push(entry.name)
        })

        return props.changeNames(namesArray.join("\n"))
      }).catch(err => {
        alert("API can sometimes be a bit difficult and blocks calls, please try again.");
      })
  }

  return (
    <div className="options-container">
      <select
      className="App-language_selector"
      onChange={onLanguageChange}
      value={props.language}
      >
        <option>English</option>
        <option>Spanish</option>
        <option>French</option>
        <option>German</option>
        <option>Korean</option>
      </select>
      <button className="generator-button" onClick={generateNames}>Generate Names</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  language: state.language
})

const mapDispatchToProps = (dispatch) => ({
  changeLanguage: language => dispatch(changeLanguage(language)),
  changeNames: names => dispatch(changeNames(names))
})

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);