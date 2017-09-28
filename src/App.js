import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "./components/shared/Header";
import Router from "./components/Router";

class App extends Component {
  render() {
    return (
      <div className="container App">
        <Header />
        {<Router path={this.props.path} />}
      </div>
    );
  }
}

export default connect(state => state)(App);
