import React from "react";
import Header from "./components/Header";
import ImageContainer from "./components/ImageContainer";
import Question from "./components/Question";
import KeyboardContainer from "./components/KeyboardContainer";

function App() {
  return (
    <>
      <Header title="Hangman" />
      <ImageContainer />
      <Question />
      <KeyboardContainer />
    </>
  );
}

export default App;
