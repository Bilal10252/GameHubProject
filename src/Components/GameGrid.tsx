import React, { useEffect, useState } from "react";
import ApiClient from "../Services/ApiClient";
import useGame from "../Hooks/useGame";

const GameGrid = () => {
  let { game, error } = useGame();
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {game.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
