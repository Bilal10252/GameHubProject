import React, { useEffect, useState } from "react";
import ApiClient from "../Services/ApiClient";
import useGame from "../Hooks/useGame";
import { SimpleGrid } from "@chakra-ui/react";
import GameCards from "./GameCards";

const GameGrid = () => {
  let { game, error } = useGame();
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={4} padding={5}>
        {game.map((g) => (
          <GameCards game={g} key={g.id}></GameCards>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
