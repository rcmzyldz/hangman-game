import React, { useEffect, useState } from "react";
import Question from "./components/Question";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import Design from "./components/Design";
import { Button } from "@mui/material";

export interface Response {
  id: string;
  word: string;
  category: string;
  numLetters: number;
  numSyllables: number;
  __v: number;
}

const ALL_LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

function App() {
  const [word, setWord] = useState<string>("");
  const [hint, setHint] = useState<string>("");
  const [guessCount, setGuessCount] = useState(0);

  useEffect(() => {
    fetch("https://www.wordgamedb.com/api/v1/words/random").then((response) => {
      response.json().then((data: Response) => {
        setWord(data.word);
        setHint(data.category);
      });
    });
  }, []);

  const handleAmountOfGuess = () => {
    setGuessCount((prev) => prev + 1);
  };

  return (
    <>
      {/* Title */}
      <Typography variant="h3" align="center">
        Hangman
      </Typography>

      {/* ImageContainer */}
      <Container maxWidth="sm">
        <Design />
      </Container>

      {/* Question */}
      <Question word={word} hint={hint} />

      {/* KeyboardContainer */}
      <div style={{ textAlign: "center" }}>
        {ALL_LETTERS.map((i, x) => (
          <Button
            size="small"
            key={x}
            variant="contained"
            sx={{ m: 1, p: 1 }}
            onClick={() => {}}
          >
            {i}
          </Button>
        ))}
      </div>

      {/* GuessContainer */}
      <div>
        <Button
          style={{ position: "absolute", top: "50px", right: "10vw" }}
          size="small"
          onClick={handleAmountOfGuess}
          variant="contained"
          color="warning"
        >
          Wrong Guesses: {guessCount} / 6
        </Button>
      </div>
    </>
  );
}

export default App;
