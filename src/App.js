import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "./components/shared/Header";
import Router from "./components/Router";

class App extends Component {
  render() {
    const { path } = this.props;
    return (
      <div className="container App">
        <Header />
        {<Router path={path} />}
      </div>
    );
  }
}

export default connect(state => state)(App);
