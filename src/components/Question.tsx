import React, { useState, useEffect } from "react";

type QuestionProps = {
  word: string;
  hint: string;
};

function Question({ word, hint }: QuestionProps) {
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
