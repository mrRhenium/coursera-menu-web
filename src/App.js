import React, { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import "./App.css";
// import "./bootstrap.css";

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Main />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
