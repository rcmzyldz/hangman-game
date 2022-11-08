import React from "react";
import axios from "axios";
import { Response } from "./Question";

import { useState, useEffect } from "react";

function CurrentWord() {
  const [word, setWord] = useState<string>("");

  useEffect(() => {
    fetch("https://www.wordgamedb.com/api/v1/words/random").then((response) => {
      response.json().then((data: Response) => {
        setWord(data.word);
      });
    });
  }, []);

  return { word };
}

export default CurrentWord;
