import React from 'react';
import { connect } from "react-redux";
import { changeNames } from "./actions/names";

export class Names extends React.Component {
  onNamesChange = (e) => {
    this.props.changeNames(e.target.value);
  }

  render() {
    return (
      <textarea
      onChange={this.onNamesChange}
      value={this.props.names.names}
      className="App-name_input"
      />
     )
  }
}

const mapStateToProps = (state) => ({
  names: state.names
});

const mapDispatchToProps = (dispatch) => ({
  changeNames: (names) => dispatch(changeNames(names))
})

export default connect(mapStateToProps, mapDispatchToProps)(Names)