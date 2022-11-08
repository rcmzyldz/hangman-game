import { useState, useEffect } from "react";
import { Response } from "../App";

function useCurrentWord() {
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

export default useCurrentWord;
