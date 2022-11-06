import React, { useState } from "react";
import { Button } from "@mui/material";

function KeyboardContainer() {
  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div style={{ textAlign: "center" }}>
      {alphabetArray.map((i, x) => (
        <Button size="small" key={x} variant="contained">
          {i}
        </Button>
      ))}
    </div>
  );
}

export default KeyboardContainer;
