import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // text: props.text,
    };
  }

  render() {
    return (
      <div>
        <h1>Hello from Home</h1>
        <Link to="/gsUpload"></Link>
      </div>
    );
  };
}
