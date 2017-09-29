import React, { Component } from "react";

export default class Collapsable extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: this.props.collapsed || false };
  }
  render() {
    const toggle = e => {
      e.preventDefault();
      this.setState({ collapsed: !this.state.collapsed });
    };
    return (
      <div className="Collapsable">
        <p>
          <a href="#" onClick={toggle}>
            {this.state.collapsed ? "Show " : "Hide "}
            {this.props.title}
          </a>
        </p>
        {this.state.collapsed ? <br /> : this.props.children}
      </div>
    );
  }
}
