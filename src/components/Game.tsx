import React, { useState, useEffect } from "react";

type Game = {
  word: string;
  text: string;
};

function Game({ word, text }: Game) {
  return (
    <div>
      <p style={{ textAlign: "center" }}>Guess What!!</p>
      <p style={{ textAlign: "center" }}>Hint: {text}</p>
      <div style={{ textAlign: "center" }}>
        {[...Array(word.length)].map((i) => (
          <span key={i}>-</span>
        ))}
      </div>
    </div>
  );
}

export default Game;
