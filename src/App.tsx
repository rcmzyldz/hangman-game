import React from "react";
import Header from "./components/Header";
import ImageContainer from "./components/ImageContainer";
import Question from "./components/Question";
import KeyboardContainer from "./components/KeyboardContainer";
import GuessCount from "./components/GuessCount";


function App() {
  return (
    <>
      <Header title="Hangman" />
      <ImageContainer />
      <Question />
      <KeyboardContainer />
      <GuessCount/>
    </>
  );
}

export default App;



