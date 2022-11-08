import React, { useState, useEffect } from "react";

export interface Response {
  id: string;
  word: string;
  category: string;
  numLetters: number;
  numSyllables: number;
  __v: number;
}

function Question() {
  const [word, setWord] = useState<string>("");
  const [hint, setHint] = useState<string>("");

  useEffect(() => {
    fetch("https://www.wordgamedb.com/api/v1/words/random").then((response) => {
      response.json().then((data: Response) => {
        setWord(data.word);
        setHint(data.category);
      });
    });
  }, []);

  return (
    <div>
      <p style={{ textAlign: "center" }}>Guess What!!</p>
      <p style={{ textAlign: "center" }}>Hint: {hint}</p>
      <div style={{ textAlign: "center" }}>
        {[...Array(word.length)].map((i) => (
          <span key={i}>-</span>
        ))}
      </div>
    </div>
  );
}

export default Question;
