import { Button } from "@mui/material";
import React, { useState } from "react";

function GuessCount() {
  const [lifeCounter, setLifeCounter] = useState(0);

  const handleCounter = () => {
    setLifeCounter((prev) => prev + 1);
  };

  return (
    <div>
      {" "}
      <Button
        style={{ position: "absolute", top: "50px", right: "10vw" }}
        size="small"
        onClick={handleCounter}
        variant="contained"
        color="warning"
      >
        Wrong Guesses: {lifeCounter} / 6
      </Button>
    </div>
  );
}

export default GuessCount;
