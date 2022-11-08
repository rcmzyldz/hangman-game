import "./App.css";
import Hangman from "./Hangman";
import React from "react";

type AppStates = {
  headVisible: "hidden" | "visible";
  bodyVisible: "hidden" | "visible";
  armLeftVisible: "hidden" | "visible";
  armRightVisible: "hidden" | "visible";
  legLeftVisible: "hidden" | "visible";
  legRightVisible: "hidden" | "visible";
  chairVisible: "hidden" | "visible";
};

class Design extends React.Component {
  public state;

  constructor(props: AppStates) {
    super(props);
    const state: AppStates = {
      headVisible: "hidden",
      bodyVisible: "hidden",
      armLeftVisible: "hidden",
      armRightVisible: "hidden",
      legLeftVisible: "hidden",
      legRightVisible: "hidden",
      chairVisible: "hidden",
    };

    this.state = state;
  }

  render() {
    return (
      <Hangman
        headVisible={this.state.headVisible}
        bodyVisible={this.state.bodyVisible}
        armLeftVisible={this.state.armLeftVisible}
        armRightVisible={this.state.armRightVisible}
        legLeftVisible={this.state.legLeftVisible}
        legRightVisible={this.state.legLeftVisible}
        chairVisible={this.state.chairVisible}
      />
    );
  }
}

export default Design;
