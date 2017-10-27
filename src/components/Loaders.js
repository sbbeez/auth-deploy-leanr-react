import React, { Component } from "react";
import Spinner from "react-spinkit";

class Loaders extends Component {
  render() {
    return (
      <div>
        <Spinner name="ball-scale-multiple" color="orange" />
        Loading...
      </div>
    );
  }
}

export default Loaders;
