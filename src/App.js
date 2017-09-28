import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "./components/shared/Header";
import Tonal from "./components/Tonal";
import Notes from "./components/Notes";
import Note from "./components/Note";
import Intervals from "./components/Intervals";
import Keys from "./components/Keys";
import Chords from "./components/Chords";
import Scales from "./components/Scales";

const Router = ({ path }) => {
  const route = path.split("/");
  switch (route[0]) {
    case "notes":
      return <Notes />;
    case "note":
      return <Note note={route[1]} />;
    case "intervals":
      return <Intervals />;
    case "scales":
      return <Scales />;
    case "chords":
      return <Chords />;
    case "keys":
      return <Keys />;
    default:
      return <Tonal />;
  }
};

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
