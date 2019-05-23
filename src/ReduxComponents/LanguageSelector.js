import React from 'react';
import { connect } from "react-redux";
import { changeLanguage } from "./actions/options";

export class LanguageSelector extends React.Component {
  onLanguageChange = (e) => {
    this.props.changeLanguage(e.target.value);
  }

  render() {
    return (
      <div>
        <select
        className="App-language_selector"
        onChange={this.onLanguageChange}
        value={this.props.language}
      >
        <option>English</option>
        <option>Spanish</option>
        <option>French</option>
        <option>German</option>
        <option>Korean</option>
      </select>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  language: state.language
})

const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (language) => dispatch(changeLanguage(language))
})

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);