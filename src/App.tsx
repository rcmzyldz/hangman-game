import React from "react";
import Header from "./components/Header";
import ImageContainer from "./components/ImageContainer";
import Question from "./components/Question";

function App() {
  return (
    <>
      <Header title="Hangman" />
      <ImageContainer />
      <Question />
    </>
  );
}

export default App;
