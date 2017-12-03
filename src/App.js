import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Router from "./components/Router";
import { setRoute } from "./router";
import { Note } from "tonal";

class App extends Component {
  render() {
    const { path, route } = this.props;
    const handleTonicChange = midi => {
      const tonic = Note.fromMidi(midi);
      setRoute(tonic, route.path, route.id);
    };
    return (
      <div className="container App">
        <Header route={route} onTonicChange={handleTonicChange} />
        {<Router path={path} route={route} />}
      </div>
    );
  }
}

export default connect(state => state)(App);
