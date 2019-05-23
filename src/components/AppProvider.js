import React from 'react';

const AppContext = React.createContext();

export class AppProvider extends React.Component {
  state = {
    names: "",
    language: "English",
    greeting: "Hello",
    namesArray: [],
    color: 1
  }
  
  determineLanguage = (language) => {
    switch(language) {
      case "English":
        return this.setState({ language: "English", greeting: "Hello"});
      case "Spanish":
        return this.setState({ language: "Spanish", greeting: "Hola"});
      case "French":
        return this.setState({ language: "French", greeting: "Bonjour"});
      case "German":
        return this.setState({ language: "German", greeting: "Hallo"});
      case "Korean":
        return this.setState({ language: "Korean", greeting: "여보세요"});
      default:
        return this.setState({ language: "English", greeting: "Hello"})
    }
  }

  splitTextInput = (input) => {
    this.setState({ namesArray: input.split("\n") });
  }

  onChangeText = (input) => {
    this.setState({
      names: input
    }, () => {this.splitTextInput(this.state.names)})
  }

  changeColor = () => {
    if(this.state.color < 4 && this.state.color > 0) {
      this.setState({
        color: this.state.color + 1
      })
    } else (
      this.setState({
        color: 1
      })
    )
  }

  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
        onChangeLanguage: (e) => this.determineLanguage(e.target.value),
        onChangeText: (e) => this.onChangeText(e.target.value),
        changeColor: () => this.changeColor()
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export const AppConsumer = AppContext.Consumer;