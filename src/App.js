import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Router from "./components/Router";
import ErrorBanner from "./components/shared/ErrorBanner";
import { setRoute } from "./router";
import { loadPiano } from "../src/player";

import { Note } from "tonal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadPianoError: null,
    };
  }

  componentDidMount() {
    if (!window.Soundfont) {
      setTimeout(() => this.loadPianoResource(window.Soundfont), 1000);
    }
  }

  loadPianoResource(soundfont) {
    loadPiano(soundfont)
      .catch(error => this.setState({ loadPianoError: error }));
  }

  render() {
    const { path, route } = this.props;
    const handleTonicChange = midi => {
      const tonic = Note.fromMidi(midi);
      setRoute(tonic, route.path, route.id);
    };

    return (
      <div className="container App">
        {
          this.state.loadPianoError &&
          <ErrorBanner>
            <h4>Oh No...</h4>
            <p>Failed to load piano player resource. Please turn off any active adblock extensions.</p>
          </ErrorBanner>
        }
        <Header route={route} onTonicChange={handleTonicChange} />
        <Router path={path} route={route} />
      </div>
    );
  }
}

export default connect(state => state)(App);
