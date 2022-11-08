import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

function KeyboardContainer() {
  const chosenLetters: string[] = [];

  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div style={{ textAlign: "center" }}>
      {alphabetArray.map((i, x) => (
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
  );
}

export default KeyboardContainer;
